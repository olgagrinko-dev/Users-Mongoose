const { getAllSkillDB, getSkillByIdDB } = require('../repository/skill.repository')

async function getAllSkill() {
    const data = await getAllSkillDB();
    return data;
}

async function getSkillById(_id) {
    const data = await getSkillByIdDB(_id);
    return data;
}

module.exports = { getAllSkill, getSkillById }