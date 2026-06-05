# 🎓 Öğrenci Takip Sistemi

Spring Boot, React ve PostgreSQL ile geliştirilmiş tam yığın (full-stack) öğrenci takip uygulaması. MVC mimarisi, Hibernate/JPA ve REST API kullanılmıştır.

---

## 🛠 Kullanılan Teknolojiler

**Backend**
- Java 21
- Spring Boot 3.5
- Spring Data JPA / Hibernate
- PostgreSQL 17

**Frontend**
- React 18
- Axios

---

## 📁 Proje Yapısı

```
studentapp/
├── src/
│   └── main/
│       ├── java/com/erkan/studentapp/
│       │   ├── model/           → Veritabanı entity sınıfları (Hibernate)
│       │   ├── repository/      → JPA repository arayüzleri
│       │   ├── service/         → İş mantığı katmanı
│       │   └── controller/      → REST API endpoint'leri
│       └── resources/
│           └── application.properties  → Uygulama ayarları
├── student-ui/                  → React frontend
│   └── src/
│       ├── api/                 → Axios API fonksiyonları
│       ├── components/          → React bileşenleri
│       └── App.js               → Ana uygulama bileşeni
└── pom.xml                      → Maven bağımlılıkları
```

### Katmanlar

| Katman | Açıklama |
|---|---|
| `model` | Veritabanı tablosunu temsil eden Entity sınıfı. Hibernate bu sınıfı okuyarak tabloyu otomatik oluşturur. |
| `repository` | `JpaRepository` extend edilerek SQL yazmadan CRUD işlemleri yapılır. |
| `service` | Controller ile Repository arasındaki iş mantığı katmanı. |
| `controller` | React'tan gelen HTTP isteklerini karşılayan REST API katmanı. |

---

## ⚙️ Kurulum

### Gereksinimler

- Java 21+
- Node.js 18+
- PostgreSQL 17
- Maven

### 1. PostgreSQL Veritabanı

```sql
CREATE DATABASE springdemo;
```

### 2. Backend Kurulumu

```bash
# Projeyi klonla
git clone https://github.com/cengerkan/studentapp.git
cd studentapp

# application.properties dosyasını düzenle
# src/main/resources/application.properties
spring.datasource.username=KULLANICI_ADIN
spring.datasource.password=SIFREN

# Uygulamayı başlat
./mvnw spring-boot:run
```

Backend `http://localhost:8080` adresinde çalışır.

### 3. Frontend Kurulumu

```bash
cd student-ui
npm install
npm start
```

Frontend `http://localhost:3000` adresinde çalışır.

---

## 🔌 API Endpoint Listesi

Base URL: `http://localhost:8080/api/students`

| Method | URL | Açıklama |
|---|---|---|
| `GET` | `/api/students` | Tüm öğrencileri listele |
| `GET` | `/api/students/{id}` | ID'ye göre öğrenci getir |
| `POST` | `/api/students` | Yeni öğrenci ekle |
| `PUT` | `/api/students/{id}` | Öğrenci bilgilerini güncelle |
| `DELETE` | `/api/students/{id}` | Öğrenci sil |

---

## 📌 Özellikler

- Öğrenci ekleme, listeleme, güncelleme ve silme (CRUD)
- Frontend doğrulama (boş alan ve öğrenci no kontrolü)
- API hata yönetimi
- Anlık arama ve filtreleme
- Hibernate ile otomatik tablo oluşturma

---

## 👤 Geliştirici

**Erkan Deveci**
- GitHub: [@cengerkan](https://github.com/cengerkan)
- Web: [bilgisayargormesi.net](http://bilgisayargormesi.net)
