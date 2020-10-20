const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel.js');


router.post('/register', async (req, res) => {
    let {username, email, password, rpassword} = req.body;
    let errors = [];

    if(!username || !email || !password || !rpassword) {
        res.status(400).send(['Fill All Fields']);
        return false;
    }

    if(username.length < 6) errors.push('Username Must Be At Least 6 Characters');

    if(email.length < 8 || !email.includes('@')) errors.push('Enter Valid Email');

    if(password.length < 6) errors.push('Password Must Be At Least 6 Characters');

    if(password != rpassword) errors.push('Passwords Doesn\'t Match');

    if(errors.length > 0) {
        res.status(400).json(errors);
        return false;
    }

    let emailExists = await Users.findOne({ email : email });

    if(emailExists) {
        res.status(400).send(['Email Already Existst']);
        return false;
    }

    try {
        let user = await Users.create({
            username : username,
            email : email,
            password : password
        });

        res.cookie('user', user._id)
        res.status(200).send();
    } catch(e) {
        console.log('Error =', e);
        res.status(400).send(['Something Went Wrong']);
    }
})

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    if(!email || !password || email.length < 8 || password.elngth < 6) {
        res.status(400).send();
        return false;
    }

    let user = await Users.findOne({
        email : email,
        password : password
    });

    if(!user) {
        res.status(400).send();
        return false;
    }

    res.status(200).json(user);
})

router.post('/isLoggedIn', async (req, res) => {

    let userId = req.cookies.user;

    if(!userId) {
        res.status(400).send();
        return false;
    }

    let user = await Users.findOne({
        _id : userId
    });

    if(user) res.status(200).send();
    else if(!user) res.status(400).send();
})

module.exports = router;