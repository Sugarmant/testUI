<template>
    <Typo>
        <Title h1>Table 表格</Title>
        <Title h3>基础使用</Title>
        <Card>
            <Table :columns="columns" :data="data"></Table>
        </Card>

        <Divider />

        <Title h3>表格间隔 <Text code>stripe</Text></Title>
        <Card>
            <Table stripe :columns="columns" :data="data"></Table>
            <Divider>
                设置属性<Text code>stripe</Text>来设置表格间隔显示不同颜色
            </Divider>
        </Card>

        <Title h3>表格边框 <Text code>border</Text></Title>
        <Card>
            <Table border :columns="columns" :data="data"></Table>
            <Divider>
                设置属性<Text code>border</Text>来设置表格边框
            </Divider>
        </Card>

        <Title h3>固定表头 <Text code>height</Text></Title>
        <Card>
            <Table stripe :columns="columns" :data="data.concat(data)" :height="200"></Table>
            <Divider>
                设置属性<Text code>height</Text>来固定表格高度，表头会自动固定。
            </Divider>
        </Card>
    </Typo>
    
</template>

<script>

export default {
    data(){
        return {
            columns: [
                {title: 'Name',key: 'name'},
                {title: 'Age',key: 'age'},
                {title: 'Address',key: 'address',type:'html'}
            ],
            data: [
                { name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park<strong>123</strong>', date: '2016-10-03' },
                { name: 'Jim Green', age: 24, address: 'London No. 1 Lake Park', date: '2016-10-01' },
                { name: 'Joe Black', age: 30, address: 'Sydney No. 1 Lake Park', date: '2016-10-02' },
                { name: 'Jon Snow', age: 26, address: 'Ottawa No. 2 Lake Park', date: '2016-10-04' }
            ]
        }
    },
    setup() {
        
    },
}
</script>
