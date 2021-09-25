const mongoose = require("mongoose")
const adminScehma = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    admin_role: {
        type: String,
        default: 'admin'
    },
    mobile: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const admin = mongoose.model("admin", adminScehma);

module.exports = admin;