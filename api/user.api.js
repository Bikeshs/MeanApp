const user = require('../model/user.model');
const userResponse = require('../model/response.model');

//#region create and save user 
exports.createUser = (req, res) => {
    // Validate uEmailId
    if (!req.body.uEmailId) {
        //API return type (response format)
        var userResponse = {
            message: "uEmailId can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    // Validate uPassword
    if (!req.body.uPassword) {
        //API return type (response format)
        var userResponse = {
            message: "uPassword can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }

    //prepare and set model from request body to save in DB 
    const userModel = new user({
        userId: req.body.userId,
        uFirstName: req.body.uFirstName,
        uLastName: req.body.uLastName,
        uEmailId: req.body.uEmailId,
        uMobileNo: req.body.uMobileNo,
        uAddress: req.body.uAddress,
        uPassword: req.body.uPassword,
    });

    // Save user details in the database
    userModel.save()
        .then(result => {
            if (result != undefined && result != null && result != '') {
                //API return type (response format)          
                var userResponse = {
                    message: "success",
                    userId: result.userId,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
            else {
                //API return type (response format)            
                var userResponse = {
                    message: "warning",
                    userId: 0,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion region create and save user 

//#region Retrieve and return all user from the database.
exports.findAllUser = (req, res) => {
    user.find()
        .then(result => {
            //API return type (response format)
            var userResponse = {
                message: "success",
                userId: 0,
                statusCode: 200,
                userData: result
            }
            return res.status(200).send({ userResponse });
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion

//#region get user by UserId from database
exports.findUserById = (req, res) => {
    user.find({ userId: req.params.userId })
        .then(result => {
            if (result != undefined && result != null && result != '') {
                //API return type (response format)         
                var userResponse = {
                    message: "success",
                    userId: req.params.userId,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
            else {
                //API return type (response format)            
                var userResponse = {
                    message: "warning",
                    userId: req.params.userId,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse })
        });
};
//#endregion

//#region Update user in database
exports.updateUser = (req, res) => {
    // Find user and update it with the request body
    user.findOneAndUpdate({ userId: req.body.userId }, {
        uFirstName: req.body.uFirstName,
        uLastName: req.body.uLastName,
        uEmailId: req.body.uEmailId,
        uMobileNo: req.body.uMobileNo,
        uAddress: req.body.uAddress,
        uPassword: req.body.uPassword,
    }, )
        .then(result => {
            //API return type (response format)          
            var userResponse = {
                message: "success",
                userId: 0,
                statusCode: 200,
                userData: result
            }
            return res.status(200).send({ userResponse });
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion

//#region Delete a user from database by userId
exports.deleteUser = (req, res) => {
    user.findOneAndRemove({ userId: req.params.userId })
        .then(result => {
            //API return type (response format)
            var userResponse = {
                message: "success",
                userId: 0,
                statusCode: 200,
                userData: result
            }
            return res.status(200).send({ userResponse });
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion

//#region Delete All user from database
exports.deleteAllUser = (req, res) => {
    user.remove()
        .then(result => {
            //API return type (response format)
            var userResponse = {
                message: "success",
                userId: 0,
                statusCode: 200,
                userData: result
            }
            return res.status(200).send({ userResponse });
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion

//#region login user by userName Password
exports.loginUser = (req, res) => {
    // Validate request 
    if (!req.body.uEmailId) {
        //API return type (response format)
        var userResponse = {
            message: "uEmailId can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    if (!req.body.uPassword) {
        //API return type (response format)
        var userResponse = {
            message: "uPassword can not be empty",
            userId: 0,
            statusCode: 200,
            userData: null
        }
        return res.status(200).send({ userResponse });
    }
    user.findOne({ uEmailId: req.body.uEmailId, uPassword: req.body.uPassword })
        .then(result => {
            if (result != undefined && result != null && result != '') {
                //API return type (response format)              
                var userResponse = {
                    message: "success",
                    userId: 0,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
            else {
                //API return type (response format)
                var userResponse = {
                    message: "warning",
                    userId: 0,
                    statusCode: 200,
                    userData: result
                }
                return res.status(200).send({ userResponse });
            }
        }).catch(err => {
            //API return type (response format)
            var userResponse = {
                message: "error",
                userId: 0,
                statusCode: 500,
                userData: null
            }
            return res.status(500).send({ userResponse });
        });
};
//#endregion
