function StudentList({ students, onEdit, onDelete }) {
    return (
        <div className="table-card">
            <h2>Öğrenci Listesi</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Öğrenci No</th>
                        <th>Bölüm</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.ad}</td>
                            <td>{s.soyad}</td>
                            <td>{s.ogrenciNo}</td>
                            <td>{s.bolum}</td>
                            <td><div className="action-buttons">
                                <button onClick={() => onEdit(s)} className="btn btn-warning">Düzenle</button>
                                <button onClick={() => onDelete(s.id)} className="btn btn-danger">Sil</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;