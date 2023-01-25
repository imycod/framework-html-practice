
const data1 = [
    {
        "knowledgeId": "42",
        "name": "设报科", // knowledgeName
        "knowledgeCrumbs": "pariatur voluptate",
        "cnt": 1 // knowledgeCnt
    },
    {
        "knowledgeId": "15",
        "name": "已公实音图",
        "knowledgeCrumbs": "in Duis aliqua aliquip",
        "cnt": 4
    },
    {
        "knowledgeId": "88",
        "name": "置出照在把今每",
        "knowledgeCrumbs": "enim",
        "cnt": 52
    },
    {
        "knowledgeId": "17",
        "name": "标照团",
        "knowledgeCrumbs": "dolore ipsum enim laborum",
        "cnt": 23
    }
]

function formatParams1(data) {
    const handler = (item) => {
        let targetResult = Object.assign(item, { knowledgeName: item.name, knowledgeCnt: item.cnt })
        delete targetResult['name']
        delete targetResult['cnt']
        return targetResult
    }
    return data.map(item => handler(item))
}

console.log(formatParams1(data1));

