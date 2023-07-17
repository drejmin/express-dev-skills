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
    getAll:function(){
        return skills;
    }
  };