let url = require("url");

class Util{
    /**
     * 判断手机号是否格式正确函数
     * phonenum 手机号
     */
    static phoneNumIsFormat(phonenum){
        return (/^1([34578])\d{9}$/.test(phonenum));
    }

    /**
     * 从url中获取相应的参数信息
     * url格式必须是如下
     * 域名:端口/参数名称/参数值
     * @param siteUrl 路由值
     * @param names 想要获取参数名称数组，必须按照路由中参数顺序
     */
    static getGetUrlParameters(siteUrl,...names){
        let pathname = url.parse(siteUrl).pathname;
        let patharr = pathname.split("/");
        let parameterRes = {};
        let pathlength = patharr.length;
        let nameCount = 0;
        for(let i = 0;i<pathlength;i++){
            if(patharr[i] === names[nameCount]){
                parameterRes[names[nameCount]]=patharr[i+1];
                i++;
            }
        }
        return parameterRes;
    }

    //格式化时间
    static dateFtt(fmt,date)
    { //author: meizz
        var o = {
            "M+" : date.getMonth()+1,     //月份
            "d+" : date.getDate(),     //日
            "h+" : date.getHours(),     //小时
            "m+" : date.getMinutes(),     //分
            "s+" : date.getSeconds(),     //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S" : date.getMilliseconds()    //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    }

    //生成指定范围随机数
    static getRandomNum(min,max){
        return Math.random()*(max-min)+min;
    }
}

export default Util;