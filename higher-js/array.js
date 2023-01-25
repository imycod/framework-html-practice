// 把数组倒数第二项分割
const baseColumns=[
    {
        title: '姓名',
        key: 'userName',
        align: 'center'
    },
    {
        title: '正确率',
        key: 'correctRate',
        align: 'center'
    },
    {
        title: '得分率',
        key: 'scoreRete',
        align: 'center'
    }
]

const testResultColumns = [
    baseColumns[0],
    {
        title: '交卷时间',
        key: 'submitTimeFormat',
        align: 'center'
    },
    {
        title: '用时',
        key: 'spentTimeFormat',
        align: 'center'
    },
    {
        title: '成绩',
        key: 'stuScore',
        align: 'center'
    },
    ...baseColumns.slice(-2)
]

const examOrTestColumns = [
    baseColumns[0],
    {
        title: '交卷时间',
        key: 'submitTime',
        align: 'center'
    },
    {
        title: '用时',
        key: 'spentTime',
        align: 'center'
    },
    {
        title: '成绩',
        key: 'score',
        align: 'center'
    },
    ...baseColumns.slice(-2)
]


// 区分columnsKey
export default {
    test: testResultColumns, // 学生班课table列表
    exam: examOrTestColumns, // 测试和考试table列表
}
