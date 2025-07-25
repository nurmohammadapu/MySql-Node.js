# MySQL + Node.js (Test Practice)

This project is a simple test-based practice setup to learn how to connect **Node.js** with **MySQL** using the `mysql2` package and manage environment variables securely with `dotenv`.

---

## 🔧 Technologies Used

- **Node.js**
- **MySQL**
- **mysql2 (promise based)**
- **dotenv** – for managing `.env` variables
- **express** – optional, for server setup (future use)
- **nodemon** – for development reloading

---

## 📁 Project Structure

```

mysql/
├── app.js          # Main application logic (DB connection, CRUD, etc.)
├── .env            # Environment variables (not pushed to GitHub)
├── package.json    # Project configuration and dependencies
└── .gitignore      # Files/folders ignored by Git

````

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/nurmohammadapu/MySql-Node.js.git
cd MySql-Node.js
````

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file:**

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=mysql_db
```

> ⚠️ Never share your `.env` file publicly.

4. **Run the app:**

```bash
node app.js
```

> You can also use `nodemon app.js` during development.

---

## 🧪 What does this project do?

* Connects Node.js with MySQL using promises
* Creates a MySQL database and a table
* Inserts multiple users into the table
* Reads and displays users from the database
* Performs basic CRUD operations

---

## 🚧 Status

This is a **learning/test project**, not a production-ready application.
Built for experimenting with MySQL–Node.js integration.

---

## 📬 Feedback or Issues

If you find a bug or want to give feedback, please open an issue:
[👉 GitHub Issues](https://github.com/nurmohammadapu/MySql-Node.js/issues)

---

## 🧑‍💻 Author

Nur Mohammad Apu
[GitHub Profile »](https://github.com/nurmohammadapu)
