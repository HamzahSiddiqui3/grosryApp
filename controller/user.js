const user = require("./../database/model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.saveUser = async(req, res, next) => {
    try {
        const { u_name, u_email, u_mobile, u_password, u_address, u_orders } = req.body;
        const encpass = await bcrypt.hash(u_password, 10);
        const saveUser = new user({
            u_name: u_name,
            u_email: u_email,
            u_mobile: u_mobile,
            u_address: u_address,
            u_orders: u_orders,
            u_password: encpass
        });
        const users = await saveUser.save();

        res.status(201).json({
            message: 'success',
            body: users
        })
    } catch (error) {
        console.log(error)
    }
}



exports.userLogin = async(req, res, next) => {
    try {

        const users = await user.findOne({ u_email: req.body.u_email });
        console.log(users, "xdsfdsfsfsddfs");
        if (!users) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        const check = await bcrypt.compare(req.body.u_password, users.u_password);
        console.log(check);
        if (!check) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }

        const token = jwt.sign({ u_email: users.u_email, userId: users._id }, "12345", {
            expiresIn: "1h"
        })

        return res.status(200).json({
            token: token,
            expiresIn: 3600,
            userid: users._id
        })
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Authentication Credentials!",
            error: error
        })
    }
}