# 🚀 Todo Task Management Application

A full-stack todo application with Docker support, following microservices architecture principles.

## 🌟 Features
- ✅ Create tasks with title and description
- 📋 Display latest 5 active tasks
- 🗑️ Mark tasks as completed
- 🐳 Dockerized development environment
- 📱 Responsive Bootstrap UI
- 🔄 Real-time updates

## 📦 Prerequisites
- Docker 20.10+
- Docker Compose 2.12+
- Node.js 14+ (optional for local development)

## 🛠️ Installation
```bash
# Clone repository
git clone https://github.com/yourusername/todo-app.git
cd todo-app

# Start all services
docker-compose up --build

# Access application at http://localhost:3000

graph TD
    A[Frontend: React] -->|HTTP Requests| B[Backend: Node.js]
    B -->|SQL Queries| C[Database: MySQL]


todo-app/
├── backend/
│   ├── Dockerfile
│   ├── init.sql
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   └── src/
│       ├── App.js
│       └── index.js
├── docker-compose.yml
└── README.md

🚪 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get latest 5 active tasks
POST	/tasks	Create new task
PATCH	/tasks/{id}	Mark task as completed

⚙️ Configuration

MYSQL_HOST=mysql
MYSQL_USER=todo_user
MYSQL_PASSWORD=todo_password
MYSQL_DB=todo_app

# Run backend tests
docker exec todo-backend npm test

# Run frontend tests
docker exec todo-frontend npm test


📜 Database Schema
CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

📬 Contact-chathushadayawansha1346@gmail.com

Happy Tasking! 🎯
