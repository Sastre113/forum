const express = require('express')
const Usuario = require('../models/usuario')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/usuarios', async (req, res) => {
    const usuario = new Usuario(req.body)

    try {
        await usuario.save()
        const token = await usuario.generateAuthToken()
        res.status(201).send({ usuario, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/usuarios/login', async (req, res) => {
    try {
        const usuario = await Usuario.findUsuarioByCredentials(req.body.email, req.body.password)
        const token = await usuario.generateAuthToken()
        res.send({ usuario, token })
    } catch (error) {
        res.status(400).send()
    }
})

router.post('/usuarios/logout', auth, async (req, res) => {
    try {
        req.usuario.tokens = req.usuario.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.usuario.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/usuarios/logoutAll', auth, async (req, res) => {
    try {
        req.usuario.tokens = []
        await req.usuario.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/usuarios/me', auth, async (req, res) => {
    res.send(req.usuario)
})

router.patch('/usuarios/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['paciente','nombre','apellido','fechaNacimiento', 'email','enfermedad','anonimo','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.usuario[update] = req.body[update])
        await req.usuario.save()
        res.send(req.usuario)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/usuarios/me', auth, async (req, res) => {
    try {
        await req.usuario.remove()
        res.send(req.usuario)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router