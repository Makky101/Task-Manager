# Task Manager

A simple and efficient web application for managing tasks and deadlines. Built with a clean, responsive frontend and a robust REST API backend.

## 🚀 Features

- ✅ Add tasks with descriptions and due dates
- 📋 View all tasks in a clean list
- 🗑️ Delete individual tasks or clear all at once
- 💾 Persistent storage using PostgreSQL database
- 🌐 RESTful API for seamless data management
- 📱 Fully responsive design for all devices

## 🛠 Tech Stack

### Frontend
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- PostgreSQL (via pg library)
- CORS for cross-origin requests

### Hosting
- Frontend: GitHub Pages
- Backend: Render
- Database: Render PostgreSQL

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- Git

### Clone the Repository
```bash
git clone https://github.com/Makky101/Task-Manager.git
cd Task-Manager
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd BACKEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the BACKEND directory with your PostgreSQL credentials:
   ```
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_DATABASE=your_db_name
   DB_PORT=5432
   PORT=3000
   ```

4. Set up the database schema:
   ```sql
   CREATE TABLE task (
       id SERIAL PRIMARY KEY,
       duty VARCHAR(255) NOT NULL,
       datetime DATE NOT NULL
   );
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
The frontend is static and requires no additional setup. Simply open `index.html` in your browser or serve it via a local server.

To run locally with a development server (optional):
```bash
# Using Python (if available)
python -m http.server 8000

# Or using Node.js
npx serve .
```

Then visit `http://localhost:8000` in your browser.

## 🌍 Live Demo

- **Frontend**: [https://makky101.github.io/Task-Manager/](https://makky101.github.io/Task-Manager/)
- **Backend API**: [https://task-manager-u0t5.onrender.com](https://task-manager-u0t5.onrender.com)

## 📡 API Endpoints

All endpoints are prefixed with the backend URL (e.g., `https://task-manager-u0t5.onrender.com`).

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/load`        | Retrieve all tasks   |
| POST   | `/send`        | Add a new task       |
| DELETE | `/delete/:id`  | Delete a specific task |
| DELETE | `/delete`      | Delete all tasks     |

### API Request Examples

#### Add a Task
```bash
curl -X POST https://task-manager-u0t5.onrender.com/send \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete project", "date": "2023-12-31"}'
```

#### Get All Tasks
```bash
curl https://task-manager-u0t5.onrender.com/load
```

#### Delete a Task
```bash
curl -X DELETE https://task-manager-u0t5.onrender.com/delete/1
```

## 🗄 Database Schema

```sql
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    duty VARCHAR(255) NOT NULL,
    datetime DATE NOT NULL
);
```

## 📁 Project Structure

```
Task-Manager/
├── index.html          # Frontend entry point
├── script.js           # Frontend JavaScript logic
├── package-lock.json   # Frontend dependencies (none)
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
└── BACKEND/
    ├── server.js       # Express server
    ├── package.json    # Backend dependencies
    └── .env            # Environment variables (create this)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [package.json](BACKEND/package.json) file for details.

## 📧 Contact

- GitHub: [@Makky101](https://github.com/Makky101)
- Project Link: [https://github.com/Makky101/Task-Manager](https://github.com/Makky101/Task-Manager)
