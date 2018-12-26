let prefix = '/webserver';
let Route = {
    register: prefix+"/user/register",
    login: prefix+"/user/login",
    isLogin: prefix+"/user/isLogin",
    exitLogin: prefix+"/user/exitLogin",
    addEssay: prefix+"/essay/addEssay",
    viewEssay: prefix+"/essay/viewEssay"
};

module.exports = Route;