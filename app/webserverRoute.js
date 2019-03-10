let prefix = '/webserver';
let Route = {
    register: prefix+"/user/register",
    login: prefix+"/user/login",
    isLogin: prefix+"/user/isLogin",
    exitLogin: prefix+"/user/exitLogin",
    addEssay: prefix+"/essay/addEssay",
    viewEssay: prefix+"/essay/viewEssay",
    collectEssay: prefix+"/essay/collectEssay",
    getComment: prefix+"/comment/getComment",
    addComment: prefix+"/comment/addComment",
    upComment: prefix+"/comment/upComment"
};

module.exports = Route;