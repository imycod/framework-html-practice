function surplusTime(time) {
    var now = new Date().getTime()
    var diffTime = parseInt(time) - now
    var result = '';
    // 定义变量 d,h,m保存倒计时的时间
    var d, h, m;
    if (diffTime > 0) {
        d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
        h = Math.floor(diffTime / 1000 / 60 / 60 % 24);
        m = Math.floor(diffTime / 1000 / 60 % 60);
    }
    if (d > 0) {
        result += d + '天';
    }
    if (h > 0) {
        result += h + '小时';
    }
    if (d === 0 && m > 0) { // 有天的时候不展示分
        result += m + '分钟';
    }
    return result;
}



console.log(surplusTime('1673258700000'))