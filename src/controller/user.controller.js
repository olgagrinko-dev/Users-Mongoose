const express = require('express');
const {getAllUser, getUserById, createUser, upUser, deleteUserById} = require('../service/user.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.get('/:id', async (req, res) => {
    try {
        const data = await getUserById(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const data = await upUser(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = route;