# Donation Matching Platform

## Overview
The Donation Matching Platform is a web application that connects donors with organizations in need of donations. This platform allows users to make donations and helps organizations manage their donation requests efficiently.

## Project Structure
```
donation-platform-backend
├── src
│   ├── server.js          # Entry point of the application
│   ├── controllers        # Contains business logic for routes
│   │   └── index.js
│   ├── models             # Defines Mongoose models for MongoDB
│   │   └── index.js
│   ├── routes             # Maps HTTP requests to controller functions
│   │   └── index.js
│   └── middleware         # Contains middleware functions for request processing
│       └── index.js
├── .env                   # Environment variables
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd donation-platform-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
1. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

## Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

## API Endpoints
- `GET /` - Check if the API is running.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.