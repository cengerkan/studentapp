import { useState, useEffect } from "react";

function StudentForm({ onSave, editingStudent, onCancel }) {
    const [form, setForm] = useState({
        ad: "",
        soyad: "",
        ogrenciNo: "",
        bolum: "",
    });

    useEffect(() => {
        if (editingStudent) {
            setForm(editingStudent);
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.ad || !form.soyad || !form.ogrenciNo || !form.bolum) {
            setError("Tüm alanları doldurunuz.");
            return;
        }
        if (!/^\d+$/.test(form.ogrenciNo)) {
            setError("Öğrenci No sadece rakamlardan oluşmalıdır.");
            return;
        }
        setError("");
        onSave(form);
        setForm({ ad: "", soyad: "", ogrenciNo: "", bolum: "" });
    };

    return (

        <div className="form-card">
            <h2>{editingStudent ? "Öğrenci Güncelle" : "Yeni Öğrenci Ekle"}</h2>
            <form onSubmit={handleSubmit}>
                {error && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                        {error}
                    </p>
                )}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <input name="ad" placeholder="Ad" value={form.ad} onChange={handleChange} required />
                    <input name="soyad" placeholder="Soyad" value={form.soyad} onChange={handleChange} required />
                    <input name="ogrenciNo" placeholder="Öğrenci No" value={form.ogrenciNo} onChange={handleChange} required />
                    <input name="bolum" placeholder="Bölüm" value={form.bolum} onChange={handleChange} required />
                    <button type="submit" className="btn btn-primary">{editingStudent ? "Güncelle" : "Ekle"}</button>

                    {editingStudent && <button type="button" onClick={onCancel} className="btn btn-secondary">İptal</button>}
                </div>

            </form >
        </div >
    );
}

export default StudentForm;