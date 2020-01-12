# NodeTask
RESTful API in NodeJS using MongoDB
Create a RESTful API in NodeJS using MongoDB database for a Phonebook where a user manages his/her contacts.

API calls:
    1. Register user
    2. Login user

    CRUD calls for Contact resource
    3. Create contact under loggedIn User
    4. Update contact with ID under loggedIn User
    5. Get all contacts (should support pagination)

Use Token based authentication mechanism for all the API calls except 'Register'

Libraries to be used: ExpressJS, avoid using Passport for bonus points

Points to be considered
1. Input validation
2. Serializing response
3. Proper error messages
4. Pagination
