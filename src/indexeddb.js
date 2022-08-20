import React, { useEffect, useRef, useState } from "react";

const IndexedDB = () => {
  const [name, setName] = useState("notes");
  const [version, setVersion] = useState(1);
  const [data, setData] = useState([]);

  const dbRef = useRef(null);

  useEffect(() => {
    console.log("fdfds");
    console.log("ref", dbRef.current);
    console.log("wind", window.indexedDB.databases());
    console.log({ dbRef });
    window.indexedDB.databases().then((res) => {
      if (res.length) {
        // alert('res'+JSON.stringify(res))
        dbRef.current = window.indexedDB.open(name, version);
        dbRef.current.onsuccess = (e) => {
          console.log("useee", e.target.result.objectStoreNames.length);
          if (e.target.result.objectStoreNames.length) {
            console.log("dsdsd", dbRef.current);
            dbRef.current = e.target.result;
            const viewNotes = e.target.result?.transaction(
              "personal",
              "readonly"
            );
            const pNote = viewNotes.objectStore("personal");
            const getReq = pNote.getAll();

            getReq.onsuccess = (e) => {
              const res = e.target.result;
              console.log({ res });
              console.log("on success", res, dbRef.current);
              setData(res);
            };

            getReq.onerror = (e) => {
              console.log("errr", e);
            };
          }
        };
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = window.indexedDB.open(name, version);
    db.onsuccess = (e) => {
      console.log("on success", { e });
    };
    db.onupgradeneeded = (e) => {
      console.log("on upgrade", { e });
      dbRef.current = e.target.result;
      console.log(e.target);
      console.log("upgraded", dbRef.current);
      dbRef.current.createObjectStore("personal", { keyPath: "title" });
      dbRef.current.createObjectStore("todo", { keyPath: "title" });
    };
    db.onerror = (e) => {
      alert(e);
      console.warn({ e });
    };
  };

  const handleAddNote = (e) => {
    const note = {
      title: "note 1" + Math.random(),
      value: "This is note",
    };

    console.log("db name", dbRef.current);
    const tx = dbRef.current.transaction("personal", "readwrite");
    tx.onerror = (e) => alert(e.target.error);
    const pNotes = tx.objectStore("personal");
    pNotes.add(note);

    const viewNotes = dbRef.current.transaction("personal", "readonly");
    const pNote = viewNotes.objectStore("personal");
    const getReq = pNote.getAll();

    getReq.onsuccess = (e) => {
      const res = e.target.result;
      console.log({ res });
      console.log("on success", res, dbRef.current);
      setData(res);
    };

    getReq.onerror = (e) => {
      console.warn(e);
    };
  };

  // console.log(data);
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="db name"
      />
      <input
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        placeholder="version"
        type={"number"}
      />
      <button onClick={handleSubmit}>create db</button>
      <button onClick={handleAddNote}>add note</button>

      {data.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};

export default IndexedDB;
