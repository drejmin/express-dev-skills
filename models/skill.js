const skills = [
    {skill: 'javascript', progress: true},
    {skill: 'css', progress: true},
    {skill: 'html', progress: true},
    {skill: 'iteration', progress: true},
    {skill: 'functions', progress: true},
    {skill: 'arrays', progress: true},
    {skill: 'mongodb', progress: true},
    {skill: 'mongoose', progress: true},
    {skill: 'oauth', progress: true},
  ];

  module.exports = {
    getAll,
    create,
    update,
    deleteOne,
  };


function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  function getAll(){
    return skills;
}