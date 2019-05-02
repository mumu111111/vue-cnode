function formatDate(str) {
    let obj;
    if (typeof str === 'string') {
        obj = new Date(str);
    } else if (typeof str === 'object') {
        obj = str;
    }
    let year = obj.getFullYear();
    let month = obj.getMonth() + 1;
    let date = obj.getDate();
    let now = new Date().getTime();
    let space = now - obj.getTime();
    let des = '';
    if (space < 60 * 1000) {
        des = ' 刚刚';
    } else if (space < 60 * 60 * 1000) {
        des = Math.floor(space / 60000) + ' 分钟前';
    } else if (space < 24 * 60 * 60 * 1000) {
        des = Math.floor(space / (60 * 60 * 1000)) + ' 小时前';
    } else {
        des = Math.floor(space / (24 * 60 * 60 * 1000)) + ' 天前';
    }
    return { des, year, month, date };
}

export default {
    install(Vue, options) {
        Vue.prototype.$formatDate = formatDate;
    }
} 