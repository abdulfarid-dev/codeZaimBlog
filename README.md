# 📝 MERN Stack Blog Application

A full-stack blog application built with the MERN (MongoDB, Express, React, Node.js) stack. Users can register, login, create posts, and interact with other users' posts through a like feature.

## ✨ Features

- **User Authentication**
  - User registration with encrypted passwords (bcrypt)
  - Secure user login with JWT tokens
  - Session management

- **Blog Posts**
  - Create and publish blog posts
  - View all published posts
  - Post timestamps for tracking creation time

- **User Management**
  - User profiles with name and email
  - User-specific post creation

- **Responsive UI**
  - Modern React components with React Router
  - Navigation bar for easy access
  - Separate pages for Login, Register, Home, and Posts

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcrypt** - Password encryption
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **JWT Decode** - Token decoding

## 📁 Project Structure

```
MernStackBlog/
├── Backend/
│   ├── app.js                          # Main server file
│   ├── package.json
│   ├── controllers/
│   │   ├── postController.js           # Post creation and retrieval logic
│   │   └── authentication/
│   │       ├── userRegister.js         # User registration logic
│   │       └── userLogin.js            # User login logic
│   ├── middleware/
│   │   └── auth.js                     # JWT authentication middleware
│   ├── models/
│   │   ├── userModel.js                # User schema
│   │   └── postModel.js                # Post schema
│   └── routes/
│       └── userRoutes.js               # API routes
│
└── Frontend/
    ├── src/
    │   ├── App.jsx                     # Main App component
    │   ├── api.js                      # API configuration
    │   ├── main.jsx                    # Entry point
    │   ├── App.css
    │   ├── index.css
    │   ├── componenet/
    │   │   ├── Home.jsx                # Home page
    │   │   ├── Navbar.jsx              # Navigation component
    │   │   ├── Posts.jsx               # Posts listing page
    │   │   └── auth/
    │   │       ├── Login.jsx           # Login page
    │   │       ├── Register.jsx        # Registration page
    │   │       
    │   ├── css/                        # Component stylesheets
    │   └── assets/
    ├── package.json
    ├── vite.config.js
    └── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (running locally on port 27017)

### Backend Setup

1. **Navigate to the Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the Frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/register` | Register a new user |
| POST | `/user/LogIn` | Login user and receive JWT token |

### Post Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/createPost` | Create a new blog post |
| GET | `/user/allpost` | Fetch all blog posts |

## 📊 Database Schema

### User Schema
```javascript
{
  name: String (required),
  email: String (required),
  password: String (required, encrypted),
  timestamps: true
}
```

### Post Schema
```javascript
{
  title: String (required),
  content: String (required),
  user: ObjectId (reference to User),
  likedBy: [ObjectId] (array of user references),
  timestamps: true
}
```

## 🔐 Authentication

- Passwords are encrypted using **bcrypt** before storing in the database
- User sessions are managed using **JWT (JSON Web Tokens)**
- CORS is enabled to allow frontend-backend communication

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- **Frontend URL:** `http://localhost:5173`
- **Credentials:** Enabled

## 📝 Available Scripts

### Backend
```bash
npm start      # Start the server
npm test       # Run tests (not configured yet)
```

### Frontend
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
npm run preview # Preview production build
```

## 🐛 Development Notes

- The project uses ES6 modules (type: "module" in package.json)
- MongoDB is configured to connect to `mongodb://localhost:27017`
- Frontend communicates with backend via axios HTTP client
- JWT tokens are decoded on the frontend using jwt-decode library

## 📦 Dependencies Summary

### Backend Dependencies
- express (^5.1.0)
- mongoose (^8.19.1)
- jsonwebtoken (^9.0.2)
- bcrypt (^6.0.0)
- cors (^2.8.5)
- nodemon (^3.1.10) - Development

### Frontend Dependencies
- react (^19.1.1)
- react-router-dom (^7.9.4)
- axios (^1.12.2)
- jwt-decode (^4.0.0)
- vite (^7.1.7) - Development

## 🚧 Future Enhancements

- Add post editing and deletion functionality
- Add user profile pages
- Implement post comments feature
- Add search and filter functionality
- Implement pagination for posts
- Add email verification for registration
- Add forgot password functionality
- Deploy to production (Heroku, Vercel, etc.)

## 👨‍💻 Author

**Abdul Farid**

## 📄 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Current Issues & Notes

- node_modules directories are not tracked in git (add to .gitignore if needed)
- MongoDB connection uses local instance - update for production
- JWT middleware may need to be integrated into post creation routes
- Error handling should be enhanced for production use

---

**Happy Blogging! 🎉**
