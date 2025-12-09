# Backend Assignment 

This project is a simple backend server built with **Node.js** and **Express**, following the requirements from the assignment.  
It provides API endpoints to navigate through a list of items (topics), moving forward, backward, or accessing a specific item by index.

---

## 📁 Project Structure

backend/
│
├── data/
│ └── items.js # Array of objects (title, desc, img)
│
├── server.js # Main Express server
├── package.json # Dependencies & scripts
└── .gitignore

## 📦 Installation

1. Open a terminal inside the `backend` folder.
2. Install dependencies: npm install
3. Optional: Install nodemon globally (if needed):npm install -g nodemon

## ▶️ Running the Server

To start the backend: npm run dev

or: npm start

The server will run at:
http://localhost:3000
## 📌 API Endpoints

### **GET /item**
Returns the current item.

Moves to the next item (wraps around at the end).

GET /item/prev

Moves to the previous item (wraps to the last item when at index 0).

GET /item/:id

Returns the item at the given index.

Data Format

Items are stored in data/items.js as an array of objects:

{
  title: "Example Topic",
  desc: "Short description...",
  img: "https://example.com/photo.jpg"
}

Thibault Pilat
