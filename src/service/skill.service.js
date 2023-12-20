const { getAllSkillDB, getSkillByIdDB, createSkillDB, upSkillDB, deleteSkillByIdDB } = require('../repository/skill.repository');

async function getAllSkill() {
    const data = await getAllSkillDB();
    return data;
}

async function getSkillById(_id) {
    const data = await getSkillByIdDB(_id);
    return data;
}

async function createSkill(skills) {
    const data = await createSkillDB(skills);
    return data;
}

async function upSkill(_id, skills) {
    const data = await upSkillDB(_id, skills);
    return data;
}

async function deleteSkillById(_id) {
    console.log(_id);
    const data = await deleteSkillByIdDB(_id);
    return data;
}

module.exports = { getAllSkill, getSkillById, createSkill, upSkill, deleteSkillById };