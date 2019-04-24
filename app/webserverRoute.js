let prefix = '/webserver';
let Route = {
    register: prefix+"/user/register",
    login: prefix+"/user/login",
    isLogin: prefix+"/user/isLogin",
    exitLogin: prefix+"/user/exitLogin",
    getUserCollect: prefix+"/essay/getUserCollect",
    getUserCreate: prefix+"/essay/getUserCreate",
    addEssay: prefix+"/essay/addEssay",
    viewEssay: prefix+"/essay/viewEssay",
    collectEssay: prefix+"/essay/collectEssay",
    lastEssay:prefix+"/essay/lastEssay",
    hotEssay:prefix+"/essay/hotEssay",
    searchEssay:prefix+"/essay/searchEssay",
    intelligentEssay:prefix+"/essay/intelligentEssay",
    appendAction:prefix+"/essay/appendAction",
    getComment: prefix+"/comment/getComment",
    addComment: prefix+"/comment/addComment",
    upComment: prefix+"/comment/upComment"
};

module.exports = Route;