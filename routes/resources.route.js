const { Router } = require('express')
const Resources = require('../models/resources')
const resourcesRouter = Router()

resourcesRouter.get('/get/:value', async (req, res) => {
    try {
        const { value } = req.params
        const data = await Resources.find({ type: value })
        return res.send(data);
    } catch (e) {
        return res.send({ status: 'error' })
    }
})

// resourcesRouter.post('/add', async (req, res) => {
//     try {
//         const data = Resources(req.body)
//         data.save()
//         return res.send({ status: 'Added', body: req.body })
//     } catch (e) {
//         return res.send({ status: 'error' })
//     }
// })

// resourcesRouter.patch('/edit', async (req, res) => {
//     try {
//         await Resources.updateMany({ type: "people & culture" }, { ...req.body })
//         return res.send({status: 'Edited'})
//     } catch (e) {
//         return res.send({ status: 'error' })
//     }
// })

module.exports = resourcesRouter;