module.exports = (app) => {
    const user = require('../api/user.api');

    // Create a new New User
    app.post('/api/user/createUser', user.createUser);

    // Retrieve all User
    app.get('/api/user/getAllUser', user.findAllUser);

    // Retrieve a single user with userId
    app.get('/api/user/getUserById/:userId', user.findUserById);

    // Update a User with UserId
    app.put('/api/user/updateUser', user.updateUser);

    // Delete a user by userId
    app.delete('/api/user/deleteUser/:userId', user.deleteUser);

    // Delete a user by userId
    app.delete('/api/user/deleteAllUser', user.deleteAllUser);

    //login user with userName and Password
    app.post('/api/user/login', user.loginUser)
}