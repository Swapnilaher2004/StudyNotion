# 🎓 StudyNotion — MERN EdTech Platform

🚀 **Live Project:** https://studynotion-2-pmgl.onrender.com

StudyNotion is a full-stack EdTech web application built using the **MERN Stack**.
It allows students to explore courses, instructors to create learning content, and admins to manage the platform — all in a modern, responsive UI.

---

## 🌐 Live Links

* 🔗 **Frontend:** https://studynotion-2-pmgl.onrender.com
* ⚙️ **Backend API:** https://studynotion-x3r1.onrender.com

---

## ✨ Features

### 👨‍🎓 Student

* User authentication (Signup/Login)
* Browse course catalog
* Purchase and enroll in courses
* Track learning progress
* Update profile

### 🧑‍🏫 Instructor

* Create and manage courses
* Upload videos & content
* View analytics and enrolled students

### 👑 Admin

* Platform management
* User and course moderation

---

## 🛠️ Tech Stack

### 🔵 Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Axios

### 🟢 Backend

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT Authentication
* Cloudinary (Media Uploads)
* Razorpay (Payments)

### ☁️ Deployment

* Frontend: Render Static Site
* Backend: Render Web Service
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
StudyNotion/
 ├── Server/        # Express backend
 ├── src/           # React frontend
 ├── public/
 ├── package.json
```

---

## ⚙️ Environment Variables

### 🔐 Backend (`Server/.env`)

```
PORT=4000
MONGODB_URL=your_mongodb_uri
JWT_SECRET=your_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
```

### 🌍 Frontend (`.env.production`)

```
REACT_APP_BASE_URL=https://studynotion-x3r1.onrender.com/api/v1
```

---

## 💻 Run Locally

### 1️⃣ Clone Repo

```
git clone https://github.com/Swapnilaher2004/StudyNotion.git
cd StudyNotion
```

### 2️⃣ Install Dependencies

Frontend:

```
npm install
```

Backend:

```
cd Server
npm install
```

### 3️⃣ Start Project

Backend:

```
npm run dev
```

Frontend:

```
npm start
```

---

## 🚀 Deployment Notes

* Backend deployed on Render Web Service.
* Frontend deployed as Render Static Site.
* CORS configured to allow both:

  * `http://localhost:3000`
  * `https://studynotion-2-pmgl.onrender.com`

---

## 🧠 Learning Goals

This project demonstrates:

* Full MERN architecture
* Authentication & authorization
* REST API design
* Payment integration
* Cloud media handling
* Production deployment workflow

---

## 📸 Screenshots

(Add your screenshots here for UI preview.)

---

## 👨‍💻 Author

**Swapnil Aher**
GitHub: https://github.com/Swapnilaher2004

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
