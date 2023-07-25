# Simple Authentication System with Node.js and Express

This is a simple authentication system built with Node.js, Express, and bcrypt. The system allows users to register, login, and perform basic authentication. It accepts JSON data for registration and login, and it stores user data in an array of JSON objects. Passwords are securely hashed using bcrypt for enhanced security.

## Getting Started

To get started with this authentication system, follow the steps below:

### Prerequisites

- Node.js (at least version 12.x)
- express js
- bcrypt

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/authentication-system.git
cd authentication-system
```

2. Install dependencies:

```bash
npm install
```

### Running the Server

Run the following command to start the server:

```bash
npm run dev
```

The server will be accessible at `http://127.0.0.1:3000`.

## Endpoints

### Register User

Register a new user by providing their credentials in JSON format.

- **Endpoint:** `POST http://127.0.0.1:3000/user/register`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "secure_password"
  }
  ```
- **Response:** JSON object containing a success message if registration is successful.

### Get All Usernames

Fetch all registered usernames from the user array.

- **Endpoint:** `GET http://127.0.0.1:3000/users`
- **Response:** JSON object containing an array of all usernames.

### User Login

Authenticate a user by matching their provided credentials with the stored data.

- **Endpoint:** `POST http://127.0.0.1:3000/user/login`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "secure_password"
  }
  ```
- **Response:** JSON object containing a success message if login is successful.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.

---
Please customize the information above, such as the repository URL, project description, and acknowledgments, according to your specific project. Additionally, implement the suggested improvements to enhance the security and functionality of the authentication system. If you have any further questions or need more specific details, feel free to ask. Happy coding!
