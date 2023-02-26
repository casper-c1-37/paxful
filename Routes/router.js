const express = require("express")
const User = require("../models/User")
const router = express.Router()

router.get('/adminlogin', (req, res) => {
    res.render('adminlogin')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get("/getUsers", (req, res) => {
    User.find({ }, (err, user) => {
        if (err) {
            res.json({
                msg: "Error",
                err
            })
        } else {
            res.status(200).json({
                msg: "Success",
                user
            })
        }
    })
})

router.post("/createUser", (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) {
            res.json({
                msg: "Error",
                err
            })
        } else {
            res.status(200).json({
                msg: "Success",
                user
            })
        }
    })
})

module.exports = router
