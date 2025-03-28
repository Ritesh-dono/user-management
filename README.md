# React User Management App

## 🚀 Overview
This is a **React-based User Management System** that allows users to:
- **Log in** using a simple authentication system.
- **View a paginated list of users** fetched from the Reqres API.
- **Edit user details** and update them in real time.
- **Delete users** from the list.
- **Search and filter users** by name.

## 🛠️ Technologies Used
- **React** (Frontend Framework)
- **React Router** (For Navigation)
- **Context API** (For Authentication Management)
- **Axios** (For API Requests)
- **Reqres API** (Mock API for User Data)
- **CSS** (Custom Styling for a Professional Look)

---
## 📂 Folder Structure
```
react-user-management-app/
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── UserList.js
│   │   ├── UserEdit.js
│   │   ├── ProtectedRoute.js
│   ├── context/
│   │   ├── AuthContext.js
│   ├── styles/
│   │   ├── styles.css
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

---
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/react-user-management-app.git
cd react-user-management-app
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Start the Development Server
```sh
npm start
```
The app will run at `http://localhost:3000/`

---
## 🔐 Authentication
- Users must log in before accessing the dashboard.
- Upon login, they are redirected to the user list.
- If they try accessing a protected route without logging in, they will be redirected to the login page.

**Demo Credentials:**
```
Email: eve.holt@reqres.in
Password: password123
```

---
## 🛠 Features
✅ **Login Authentication**  
✅ **View User List** (Horizontally Scrollable)  
✅ **Edit User Details**  
✅ **Delete Users**  
✅ **Search & Filter Users**  
✅ **Protected Routes**  
✅ **Modern UI with Professional Styling**  

---
nstall gh-pages --save-dev



---
## 🤝 Contributing
Feel free to contribute by forking the repo, making improvements, and submitting a pull request.

---
## 📝 License
This project is **MIT Licensed**.

---
### 🚀 Happy Coding! 😃

