<template>
    <Typo>
        <Title h1>Icon 图标</Title>
        <Title h3>基础使用</Title>

        <Card>
            <Space>
                <Icon icon="&#xe7c2;"></Icon>
                <Icon :size="24" icon="&#xe915;"></Icon>
                <Icon :size="28" icon="&#xe7c3;"></Icon>
                <Icon :size="32" icon="&#xe916;"></Icon>
                <Icon size="1rem" icon="&#xe7c4;"></Icon>
                <Icon size="1.25rem" icon="&#xe7c5;"></Icon>
                <Icon size="2rem" icon="&#xe7c6;"></Icon>
            </Space>
            
            <Divider :length="15" />

            <Row justify="end">
                <div class="iconMenu"><Space>
                    <div class="iconBtn"><Icon :size="20" icon="&#xe7dd;" /></div>
                    <div @click="showCode1=!showCode1" class="iconBtn"><Icon :size="20" icon="&#xe7ae;" /></div>
                </Space></div>
            </Row>
            <Code v-if="showCode1" :html="iconCode[0]" />
        </Card>

        <Title h3>API</Title>
        <Title h4>Icon Props</Title>
        <Table border :columns="IconProps.columns" :data="IconProps.data"></Table>
    </Typo>

</template>

<script>

import Code from '../components/code.vue'
import iconCode from '../codes/icon'
export default {
    components:{
        Code
    },
    data(){
        return {
            showCode1:false,
            iconCode
        }
    },
    setup() {
        const IconProps = {
            columns:[
                {title:'属性',key:'prop',width:140},
                {title:'说明',key:'description',type:'html'},
                {title:'类型',key:'type',width:160},
                {title:'默认值',key:'default',width:100}
            ],
            data:[
                {prop:'icon',type:'String',default:'-',description:"图标名称"},
                {prop:'size',type:'Number | String',default:'16',description:"图标大小，Number类型为px，String类型可自定义em,rem或其他"},
            ]
        }
        return {
            IconProps
        }
    },
}
</script>
