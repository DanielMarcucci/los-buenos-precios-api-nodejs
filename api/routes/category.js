const express = require('express')
// const Category = require('../models/category')
const router = express.Router()

router.get('/', (req, res) => {
    res.json([
        { name: "james" }
      ])
    // Category.find()
    //     .exec()
    //     .then(x => res.status(200).send(x))
    //     .catch(err => res.status(500).send({ message: `Error al obtener categorias ${err}` }))
})

// router.get('/:id', (req, res) => {
//     Category.findById(req.params.id)
//         .exec()
//         .then(x => res.status(200).send(x))
//         .catch(err => res.status(500).send({ message: `Error al obtener categoria ${err}` }))
// })

// router.post('/', (req, res) => {
//     Category.create(req.body)
//         .then(x => res.status(200).send(x))
//         .catch(err => res.status(500).send({ message: `Error al salvar categoria ${err}` }))
// })

// router.put('/:id', (req, res) => {
//     Category.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.status(200).send({ message: 'Categoria actualizada' }))
//         .catch(err => res.status(500).send({ message: `Error al actualizar categoria ${err}` }))
// })

// router.delete('/:id', (req, res) => {
//     Category.findByIdAndRemove(req.params.id)
//         .then(() => res.status(200).send({ message: 'Categoria eliminada' }))
//         .catch(err => res.status(500).send({ message: `Error al eliminar categoria ${err}` }))
// })

module.exports = router