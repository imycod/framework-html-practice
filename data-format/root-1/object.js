function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}

const data1 = {
    "types": [
        "SINGLE",
        "MULTI",
        "TF"
    ],
    "levels": [
        2,
        4
    ],
    "keyWord": "asd",
    "searchType": 1
}

function formatParams1(form) {
    // 后端需要的数据params
    const params = deepClone(form);
    const keyWordType = ['name', 'optionName']; // 后端需要的数据格式
    params.complexity = params.levels.toString();
    params[keyWordType[params.searchType]] = params.keyWord;
    params.type = params.types.toString();
    ['searchType', 'levels', 'types', 'keyWord'].forEach(key => delete params[key]);
    return params
}

console.log(formatParams1(data1));

