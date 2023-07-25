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
git clone https://github.com/sraveshnandan/-SIMPLE-AUTH-SERVER.git
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
- 


 ## Upcoming Version - Enhanced Authentication System

For the next version of this authentication system, I am planning to make significant improvements to enhance security, user experience, and scalability. Here's a glimpse of what to expect in the upcoming version:

### MongoDB Integration

In the upcoming version, I will integrate MongoDB as the database to store user information securely. MongoDB's flexibility and scalability will allow us to efficiently manage user data and perform complex queries.

### Token-Based Authentication with JWT

To improve security and eliminate the need to store session information on the server, I will implement token-based authentication using JSON Web Tokens (JWT). With JWT, users will receive a signed token upon successful login, which they can include in subsequent requests for authentication.

### Client-Side Validation with Joi

To ensure that users submit valid and properly formatted data, I will implement client-side validation using the Joi library. This will provide real-time feedback to users while filling out registration and login forms, reducing the chances of incorrect submissions.

### Joi Password Complexity

To enforce strong password policies, I will use the Joi Password Complexity plugin. This will allow us to define password complexity rules, such as minimum length, uppercase, lowercase, numbers, and special characters.

### Login and Register Forms

In the upcoming version, I will create user-friendly login and register forms using React. These forms will have proper client-side validation, displaying error messages if the user enters incorrect or incomplete information.

### Dashboard Page

To provide users with a personalized experience, I will develop a dashboard page in React. Once users log in, they will have access to their personalized dashboard, which may display user-specific information or actions.

### Enhanced Error Handling

To handle errors more effectively and provide meaningful feedback to users, I will improve error handling across the application. This will ensure a smoother user experience and better error reporting.

### Deployment and Production-Ready Setup

In addition to implementing new features, I will focus on optimizing the application for production. This includes setting up a production-ready configuration, applying security best practices, and preparing the application for deployment.

I am excited about these upcoming enhancements, as they will significantly improve the security, user experience, and functionality of the authentication system.

---
Please note that the above section is just a summary of the upcoming version of the authentication system. When implementing these improvements, make sure to thoroughly test the application to ensure its robustness and security. Good luck with your project! If you need any further assistance or have more queries, feel free to reach out.
## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.

---
Please customize the information above, such as the repository URL, project description, and acknowledgments, according to your specific project. Additionally, implement the suggested improvements to enhance the security and functionality of the authentication system. If you have any further questions or need more specific details, feel free to ask. Happy coding!
