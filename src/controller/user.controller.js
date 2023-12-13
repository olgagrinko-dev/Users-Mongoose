const express = require('express');
const { getAllUser, getUserById, createUser, upUser, deleteUserById } = require('../service/user.service');
const routeUser = express.Router();

routeUser.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeUser.get('/:_id', async (req, res) => {
    try {
        const data = await getUserById(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

routeUser.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeUser.put('/:_id', async (req, res) => {
    try {
        const data = await upUser(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeUser.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = routeUser;