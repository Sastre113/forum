const express = require('express')
const router = new express.Router()
const Respuesta = require('../models/respuesta')

router.post('/respuestas', async (req, res) => {
    const respuesta = new Respuesta(req.body)

    try {
        await respuesta.save()
        res.status(201).send(respuesta)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/respuestas', async (req, res) => {
    try {
        const respuestas = await Respuesta.find({})
        res.send(respuestas)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/respuestas/:idThread', async (req, res) => {
    const idHilo = req.params.idThread

    try {
        const respuesta = await Respuesta.find({idThread:`${idHilo}`})

        if (!respuesta) {
            return res.status(404).send()
        }

        res.send(respuesta)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/respuestas/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['idThread', 'idAuthor', 'titleReply', 'bodyReply']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const respuesta = await Respuesta.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!respuesta) {
            return res.status(404).send()
        }

        res.send(respuesta)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/respuestas/:id', async (req, res) => {
    try {
        const respuesta = await Respuesta.findByIdAndDelete(req.params.id)

        if (!respuesta) {
            res.status(404).send()
        }

        res.send(respuesta)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router