const express = require('express');
const { getAllSkill, getSkillById } = require('../service/skill.service');
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
module.exports = routeSkill;