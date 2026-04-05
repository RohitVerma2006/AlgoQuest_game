
View my app in Browser: 

(https://gamify-sl65.vercel.app/)

# 🧠⚔️ AlgoQuest

**Master DSA by Fighting Monsters in an Epic Arena**

---

## 🚀 Overview

**AlgoQuest** is a gamified web application designed to make learning **Data Structures and Algorithms** engaging, interactive, and fun.

Users battle monsters by solving coding problems, progress through levels, and learn concepts via an integrated **Codex (learning hub)**.

---

# 🏗️ Full Project Architecture

```bash id="arch123"
AlgoQuest/
│
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── utils/
│   │
│   └── package.json
│
├── backend/           # Node.js + Express server (scalable)
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
│
└── README.md
```

---

# 🛠️ Tech Stack

## 🎨 Frontend

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🎬 Framer Motion
* 💻 Monaco Editor
* 🔀 React Router

## ⚙️ Backend (Planned & Scalable)

* 🟢 Node.js
* 🚀 Express.js
* 🗄️ Database (future):

  * MongoDB / PostgreSQL

---

# ⚙️ Backend Overview

The backend is currently a **basic Express server (placeholder)** but is designed for future expansion.

---

## 📦 Current Backend Setup

### `backend/package.json`

* Basic Node.js project
* Express dependency

### `backend/server.js`

* Placeholder server file
* Ready for API integration

---

## 🔮 Planned Backend Features

### 🔐 Authentication System

* JWT-based authentication
* Secure login/signup
* Password hashing

---

### 💾 Database Integration

* Store:

  * Users
  * Progress
  * Scores
  * Levels

---

### 🧠 Code Execution Engine

* Integrate APIs like:

  * Judge system (e.g., code runner APIs)
* Support real execution for:

  * C
  * C++
  * Python

---

### 📊 User Progress Tracking

* Level completion
* Points & streaks
* Performance analytics

---

### 🏆 Leaderboard System

* Global rankings
* Score-based competition

---

# 🔌 Example Backend API Structure (Planned)

## Auth Routes

```bash id="api1"
/api/auth/signup
/api/auth/login
```

## User Routes

```bash id="api2"
/api/user/profile
/api/user/progress
```

## Game Routes

```bash id="api3"
/api/game/submit
/api/game/levels
/api/game/questions
```

---

# ⚙️ How Frontend + Backend Will Work

### Current (Without Backend)

* Uses localStorage
* Simulated validation

---

### Future (With Backend)

1. User submits code
2. Request sent to backend
3. Backend executes code
4. Returns result
5. Frontend updates battle

---

# 🎮 Gameplay Flow

1. User logs in
2. Selects level
3. Writes code
4. Code is validated:

   * JS → executed
   * Others → simulated (for now)
5. Battle outcome updates

---

# 🧪 Sample Problem

```js id="code1"
function solve(arr) {
  return Math.max(...arr);
}
```

---

# 🧩 Future Enhancements

* Full backend integration
* Real-time multiplayer battles
* AI-based hints
* Code execution sandbox
* Advanced analytics dashboard

---

# 🤝 Contributing

1. Fork repository
2. Create branch
3. Commit changes
4. Open pull request

---

# 📜 License

MIT License

---

# 👨‍💻 Author

Developed by **Rohit Verma**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share it
