import { useState, useEffect } from "react";
import { getAll, create, update, remove } from "./api/studentApi";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [apiError, setApiError] = useState("");
  const [search, setSearch] = useState("");

  const fetchStudents = () => {
    getAll()
      .then((res) => {
        setStudents(res.data);
        setApiError("");
      })
      .catch(() => setApiError("Öğrenciler yüklenirken bir hata oluştu."));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSave = (student) => {
    if (editingStudent) {
      update(editingStudent.id, student)
        .then(() => { setEditingStudent(null); fetchStudents(); })
        .catch(() => setApiError("Güncelleme sırasında bir hata oluştu."));
    } else {
      create(student)
        .then(() => fetchStudents())
        .catch(() => setApiError("Öğrenci eklenirken bir hata oluştu."));
    }
  };

  const handleDelete = (id) => {
    remove(id)
      .then(() => fetchStudents())
      .catch(() => setApiError("Silme işlemi sırasında bir hata oluştu."));
  };

  return (
    <div>
      <h1>Öğrenci Takip Sistemi</h1>
      {apiError && <p style={{ color: "red", textAlign: "center", marginBottom: "16px" }}>{apiError}</p>}
      <input
        placeholder="Ad, soyad veya bölüm ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ddd", marginBottom: "20px", fontSize: "0.95rem" }}
      />
      <StudentForm
        onSave={handleSave}
        editingStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />
      <StudentList
        students={students.filter((s) =>
          s.ad.toLowerCase().includes(search.toLowerCase()) ||
          s.soyad.toLowerCase().includes(search.toLowerCase()) ||
          s.bolum.toLowerCase().includes(search.toLowerCase())
        )}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;