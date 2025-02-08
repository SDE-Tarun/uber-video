## Backend API Documentation (User)

## Endpoint: /users/register

## HTTPMethod: POST

## Description:
This endpoint allows users to register by providing their full name, email, and password. The server validates the input and returns an authentication token upon successful registration.

## Request Body Format (JSON)

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}

## Required Fields:

fullname.firstname (string, min 3 characters) - User's first name (mandatory)

fullname.lastname (string, min 3 characters) - User's last name (mandatory)

email (string, valid email format) - User's email (mandatory)

password (string, min 6 characters) - User's password (mandatory)

## Response Examples

## Success Response (201 Created)

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65d4f87a8c21a245c0a78b12",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

## Error Responses

400 Bad Request (Validation Errors)

{
  "errors": [
    { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname" },
    { "msg": "Invalid Email", "param": "email" }
  ]
}

## 500 Internal Server Error (Unexpected Issues)

{
  "error": "Something went wrong, please try again later."
}

## How to Use

Send a POST request to /users/register with the required JSON data.

Ensure the request body meets validation criteria.

On success, receive an authentication token and user details.

On failure, handle validation errors accordingly.

## Notes

Passwords are hashed before storing in the database.

A JWT authentication token is returned upon successful registration.

Ensure Content-Type: application/json is set in request headers.