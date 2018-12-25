class Util{
    static phoneNumIsFormat(phonenum){
        return (/^1([34578])\d{9}$/.test(phonenum));
    }
}

export default Util;