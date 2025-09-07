# 🌍 Donation Matching Platform

A full-stack MERN web application designed to connect **donors** with **recipients in need**.  
The platform ensures seamless donation requests, donor matching, and transparent tracking.

## 🚀 Features

- 👤 **User Authentication** – Register & Login with role-based access (Donor / Recipient).
- 📦 **Donation Management** – Donors can offer items, recipients can request them.
- 📝 **Request Page** – Create and track donation requests with details (urgency, location, reason, item).
- 🔐 **Secure Passwords** – Encrypted using **bcrypt.js**.
- 🔑 **JWT Authentication** – Secured APIs with token-based login.
- 📊 **Role-based Dashboard** – Different views for donors and recipients.
- ⚡ **MongoDB Integration** – Stores user data, donations, and requests.

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React.js  
- 🎨 CSS  
- 📦 Axios (API calls)

### **Backend**
- 🟢 Node.js  
- ⚡ Express.js  
- 🔑 JWT & bcrypt.js for authentication  
- 🌐 CORS & body-parser middleware  

### **Database**
- 🗄️ MongoDB

Donation-Matching-Platform/
│
├── donation-platform-backend/ # Backend code
│ ├── src/
│ │ ├── config/ # DB connection
│ │ ├── controllers/ # Business logic
│ │ ├── middleware/ # Auth middlewares
│ │ ├── models/ # MongoDB models
│ │ ├── routes/ # API routes
│ │ └── server.js # App entry point
│
├── donation-platform-frontend/ # Frontend code
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page-level components
│ │ ├── utils/ # Helper functions
│ │ ├── App.js # Main app component
│ │ └── App.css # Styling
│
└── package-lock.json

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SnehaGoswami28/Donation-Matching-Platform.git
   cd Donation-Matching-Platform
   
2. ## Backend Setup

cd donation-platform-backend
npm install
npm start

3. ## Frontend Setup

cd donation-platform-frontend
npm install
npm start

4. ## Open the app

Backend runs on: http://localhost:5001
Frontend runs on: http://localhost:3000


🔐 **API Endpoints**

## Auth Routes

POST /api/users/register → Register new user
POST /api/users/login → Login and get JWT token

## Donation Routes

POST /api/donations → Create a donation
GET /api/donations → Get all donations

## Request Routes

POST /api/requests → Create a new request
GET /api/requests → Fetch all requests

🛡️ **Security**

Passwords are hashed with bcrypt.js.
JWT tokens are used for authentication.
Role-based access for different dashboards.

🚀 **Future Enhancements**

📱 Mobile-responsive UI

🔔 Real-time notifications

📍 Location-based donor-recipient matching

📊 Analytics dashboard

# #🤝 Contributing

Contributions are always welcome!
Fork the repo
Create a new branch (feature-xyz)
Commit changes (git commit -m "Added new feature")
Push to branch
Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Sneha Goswami**
📌 Passionate about Full-Stack Development & building impactful apps.
🔗 GitHub

