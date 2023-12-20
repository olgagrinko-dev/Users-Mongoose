const express = require('express');
const { getAllSkill, getSkillById, createSkill, upSkill, deleteSkillById } = require('../service/skill.service');
const routeSkill = express.Router();

routeSkill.get('/', async (req, res) => {
    try {
        const data = await getAllSkill();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeSkill.get('/:_id', async (req, res) => {
    try {
        const data = await getSkillById(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeSkill.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeSkill.put('/:_id', async (req, res) => {
    try {
        const data = await upSkill(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

routeSkill.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteSkillById(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = routeSkill;