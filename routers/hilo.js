const express = require('express');
const router = new express.Router();
const Hilo = require('../models/hilo');

router.post('/hilos', async (req, res) => {
    const hilo = new Hilo(req.body)

    try {
        await hilo.save()
        res.status(201).send(hilo)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/hilos', async (req, res) => {
    try {
        const hilos = await Hilo.find({})
        res.send(hilos)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/hilos/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const hilo = await Hilo.findById(_id)

        if (!hilo) {
            return res.status(404).send()
        }

        res.send(hilo)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/hilos/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['idThread', 'idAuthor','disease','titleThread','bodyThread']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const hilo = await Hilo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!hilo) {
            return res.status(404).send()
        }

        res.send(hilo)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/hilos/:id', async (req, res) => {
    try {
        const hilo = await Hilo.findByIdAndDelete(req.params.id)

        if (!hilo) {
            res.status(404).send()
        }

        res.send(hilo)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router