import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Bittu", score: 95 },
    { name: "Ananya", score: 15 },
    { name: "Kartik", score: 99 },
    { name: "Pihu", score: 55 },
  ]);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent = () => {
    if (!name || !score) return;
    setStudents([...students, { name, score: Number(score) }]);
    setName("");
    setScore("");
  };

  const updateScore = (index, newScore) => {
    const updated = [...students];
    updated[index].score = Number(newScore);
    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg =
    students.reduce((acc, s) => acc + s.score, 0) / total || 0;

  return (
    <div className="container">
      <h1 className="title">STUDENT SCOREBOARD</h1>

      <div className="form">
        <input
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Score (0-100)"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={addStudent}>+ ADD</button>
      </div>

      <div className="stats">
        <div>TOTAL<br />{total}</div>
        <div>PASSED<br />{passed}</div>
        <div>AVG SCORE<br />{Math.round(avg)}</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td>
                <span className={s.score >= 40 ? "pass" : "fail"}>
                  {s.score >= 40 ? "PASS" : "FAIL"}
                </span>
              </td>
              <td>
                <input
                  defaultValue={s.score}
                  onChange={(e) => updateScore(i, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;