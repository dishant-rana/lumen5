const { Router } = require('express')
const User = require('../models/user')
const userRouter = Router()
const crypto = require('crypto')

userRouter.post('/tokenCheck', async (req, res) => {
    try {
        const data = await User.find(req.body)
        if (data.length > 0) {
            return res.send({ status: 'ok', body: data[0]})
        }
        else {
            return res.send({status: 'usr not found'})
        }
    } catch (e) {
        return res.send({ status: 'user not found' })
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await User.find({ $and: [{ email: email }, { password: password }] })
        //await will wait your pointer at line 9 until the line 9 is executed
        if (data.length > 0) {
            const n = crypto.randomInt(0, 1000000)
            await User.updateOne({ _id: data[0]._id }, { $set: { token: n.toString() } })
            return res.send({ status: 'logged in', token: n.toString() })
        }
        else {
            return res.send({ status: 'user not found' })
        }
    } catch (e) {
        return res.send({ status: 'error' })
    }
})

userRouter.post('/logout', async (req, res) => {
    try {
        await User.updateOne(req.body, { $set: { token: '' } })
        return res.send({ status: 'logged out' })
    } catch (e) {
        return res.send({ status: 'error' })
    }
})

userRouter.post('/add', async (req, res) => {
    try {
        const data = User(req.body)
        data.save()
        return res.send({ status: 'Added', body: req.body })
    } catch (e) {
        return res.send({ status: 'error' })
    }
})

module.exports = userRouter
