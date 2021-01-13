const express = require('express')
const router = new express.Router()
const FrasesSalut = require('../models/frasesSalut')

router.post('/frases', async (req, res) => {
    const frase = new FrasesSalut(req.body)

    try {
        await frase.save()
        res.status(201).send(frase)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/frases', async (req, res) => {
    try {
        const frases = await FrasesSalut.find({})
        res.send(frases)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/frases/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const frase = await FrasesSalut.findById(_id)

        if (!frase) {
            return res.status(404).send()
        }

        res.send(frase)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/frases/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['frase', 'autor']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const frase = await FrasesSalut.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!frase) {
            return res.status(404).send()
        }

        res.send(frase)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/frases/:id', async (req, res) => {
    try {
        const frase = await FrasesSalut.findByIdAndDelete(req.params.id)

        if (!frase) {
            res.status(404).send()
        }

        res.send(frase)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router