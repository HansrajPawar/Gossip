# Gossip: A Chatting Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Live Demo: [Gossip - A Chatting App](https://gossip-pdln.onrender.com/login)

## 📖 Overview

Gossip is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. This app allows users to engage in seamless, real-time conversations, complete with a simple and user-friendly interface. Gossip is designed to provide a responsive chat experience across different devices.

## 🛠️ Features

- **Real-time Messaging**: Engage in instant conversations using WebSocket with Socket.io.
- **User Authentication**: Secure login and registration with user sessions.
- **User-Friendly UI**: Built with React.js and styled with Tailwind CSS for a clean interface.
- **Scalable Backend**: Node.js and Express.js for API handling, with MongoDB for persistent data storage.

## 🚀 Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB
- **Version Control**: Git & GitHub

## 📂 Project Structure

Gossip---A-Chatting-App/ ├── client/ # React.js client-side code ├── server/ # Node.js server-side code ├── config/ # Environment configurations ├── models/ # MongoDB schema models ├── controllers/ # Request handlers for API endpoints └── README.md # Project documentation

## 🔧 Installation

1. **Clone the repository**:
<<<<<<< HEAD

   ````bash
   git clone https://github.com/HansrajPawar/Gossip.git ```

   cd Gossip
   ````
=======
   ```bash
   https://github.com/HansrajPawar/Gossip.git
   ```
>>>>>>> 900c980e6b63f8908f21078760e52bd1c8ce78ea

2. **Install Dependencies**:
   **For Backend**

```bash
cd server
npm install
```

**For Frontend**

```bash
cd ../client
npm install
```

3. **Environment Variables: Set up your .env file in the server directory with the following:**

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. **Run the Application**
   **For Backend**

```
    cd ../server
   npm start
```

**For Frontend**

```
cd ../client
npm start
```

5.**Access the App: Open http://localhost:3000 in your browser to access the app.**

## 💻 Usage

**Register an account or log in with existing credentials.**
**Start a conversation by selecting a chat or creating a new one.**
**Engage in real-time chat with friends.**

