const express = require('express');
const {getAllSkill} = require('../service/user.service');
const routeSkill = express.Router();

routeSkill.get('/', async (req, res) => {
    try {
        const data = await getAllSkill()
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})