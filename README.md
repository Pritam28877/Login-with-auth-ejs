# Dragon Smoothies - Node.js Login/Logout with JWT Authentication and Bcrypt

Dragon Smoothies is a web application that provides a login and logout functionality using JWT authentication and Bcrypt encryption. This application allows users to sign in securely and access exclusive features related to smoothies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before setting up the Dragon Smoothies application, make sure you have the following software installed on your system:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, usually included with Node.js)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Dragon-Smoothies
```

2. Install the dependencies:

```bash
npm install
```

3. Set up the environment variables:

Create a `.env` file in the root directory of the project and configure the following variables:

```plaintext
PORT=5000
DB_CONNECTION_STRING=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret Key>
```

## Usage

To start the Dragon Smoothies application, run the following command:

```bash
npm start
```

The application will be running on http://localhost:5000 by default (unless you changed the `PORT` variable in the `.env` file).

## API Endpoints

The Dragon Smoothies application exposes the following API endpoints:

- **POST /api/signup**: Create a new user account.
  - Request body:
    ```json
    {
      "username": "draon1@gmail.com",
      "password": "123456"
    }
    ```
  - Response:
    ```json
    {
      "message": "User created successfully."
    }
    ```

- **POST /api/login**: Log in with an existing user account and receive a JWT token.
  - Request body:
    ```json
    {
      "username": "exampleuser",
      "password": "secretpassword"
    }
    ```
  - Response:
    ```json
    {
      "token": "<Your JWT Token>"
    }
    ```

- **GET /api/logout**: Log out the currently logged-in user (requires authentication).

Please note that the `Authorization` header with the `Bearer` token is required for authentication for the `/api/logout` endpoint.

## Technologies Used

- Node.js: Server-side JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user information.
- JWT (JSON Web Token): Used for user authentication and authorization.
- Bcrypt: Library for hashing and salting passwords securely.

## Contributing

Contributions to Dragon Smoothies are always welcome. If you find any issues or have ideas for improvements, feel free to submit a pull request or open an issue.

## License

Dragon Smoothies is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
