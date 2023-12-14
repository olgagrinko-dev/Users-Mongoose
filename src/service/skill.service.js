const { getAllSkillDB } = require('../repository/skill.repository')

async function getAllSkill() {
    const data = await getAllSkillDB();
    return data;
}

module.exports = { getAllSkill }