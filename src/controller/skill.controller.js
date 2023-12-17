const express = require('express');
const { getAllSkill, getSkillById, createSkill, upSkill } = require('../service/skill.service');
const routeSkill = express.Router();

routeSkill.get('/', async (req, res) => {
    try {
        const data = await getAllSkill()
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

routeSkill.get('/:id', async (req, res) => {
    try {
        const data = await getSkillById(req.params._id);
        res.send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

routeSkill.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

routeSkill.put('/:id', async (req, res) => {
    try {
        const data = await upSkill(req.params._id, req.body)
        res.send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})
module.exports = routeSkill;