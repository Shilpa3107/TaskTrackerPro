# 📝 Kanban Board Application  

This is a Kanban board built with **ReactJS** that allows users to manage tasks across different stages: **To Do**, **In Progress**, **Peer Review**, and **Done**. The board supports drag-and-drop functionality and includes a search feature to filter tasks by title.  

---

## 🚀 Features  

### ✅ Four columns representing task stages:  
- To Do  
- In Progress  
- Peer Review  
- Done  

### ✅ Drag and Drop:  
- Tasks can be dragged and dropped between columns.  
- Tasks maintain their order after being moved.  

### ✅ Search:  
- A search bar at the top allows filtering tasks by title.  
- Matching tasks are shown while others are hidden.  

### ✅ Add New Task:  
- Floating button to create a new task.  
- New tasks are added to the "To Do" column.  


## 🏗️ Project Structure  

```plaintext
📂 src  
├── 📂 components  
│   ├── TaskCard.tsx  
│   ├── Column.tsx  
│   ├── AddTaskModal.tsx  
├── 📂 hooks  
├── 📂 styles  
├── 📂 utils  
├── App.tsx  
├── index.tsx  
├── vite.config.ts  
├── server  
│   ├── index.ts  
│   └── routes.ts  
└── shared  
    ├── schema.ts


##  🛠️ Tech Stack
Frontend: React, TypeScript
State Management: Redux
Styling: MUI (Material UI)
Backend: Express.js
Bundler: Vite
Build Tool: Esbuild

##  💻 Setup Instructions
1️⃣ Clone the Repository

git clone <your-repo-url>
cd TaskTrackerPro
2️⃣ Install Dependencies
npm install
3️⃣ Build the Project
npm run build
4️⃣ Start the Server
bash
Copy
Edit
npm run start
http://localhost:5000
## 🚨 Environment Variables
Create a .env file in the root directory and add:

VITE_API_URL=http://localhost:5000/api

##  ✅ How to Use
Create Task – Click the floating button to create a new task.
Drag and Drop – Move tasks between columns.
Search – Use the search bar to filter tasks.
🌟 Future Improvements
Add user authentication.
Persist data using local storage or a database.
Add task priority and due dates.
🤝 Contributing
Feel free to fork the repository, create a new branch, and submit a pull request!

