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

        <Divider hide />

        <Title center h3>所有图标</Title>
        
        <div class="iconList">
            <div @click="showIcon(item)" :class="`iconItem ${currentIcon.name === item.name?'active':''}`" v-for="(item,key) in iconList" :key="key">
                <div class="icon">
                    <Icon :size="36" :icon="item.code"></Icon>
                </div>
            </div>
        </div>
    </Typo>


    <div class="fixedTip" v-if="currentIcon.name">
        <div class="name">{{currentIcon.name}}</div>
        <div class="content">
            <div style="color:#bec7d5;font-size:14px;margin-bottom:4px;">{{copyMsg}}</div>
            <Space>
                <div @click="copyWhole" class="code">
                    &lt;<span class="labelName">Icon</span><span class="labelProp"> icon</span>=<span class="labelPropValue">"{{currentIcon.code}}"</span>>&lt;/<span class="labelName">Icon</span>>
                </div>
                <Button @click="copyCode" :focus="false" type="warning" transparent="full" icon="&#xe7dd;"/>
            </Space>
        </div>
        
    </div>

</template>

<script>

import Code from '../components/code.vue'
import iconCode,{iconList} from '../codes/icon'
import {onUnmounted, ref} from 'vue'
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

        const currentIcon = ref({})
        const copyMsg = ref('')

        const showIcon = item=>{
            setTimeout(()=>{
                copyMsg.value = ""
                currentIcon.value = item
            })
        }

        function bind(e){
            const current = currentIcon.value
            setTimeout(()=>{
                if(document.querySelector('.fixedTip') && document.querySelector('.fixedTip').contains(e.target)) return
                if(current.name === currentIcon.value.name) {
                    currentIcon.value = {}
                    copyMsg.value = ""
                }
            },50)
        }

        const copy = val=>{
            let copyInput = document.createElement('input');
            document.body.appendChild(copyInput);
            copyInput.setAttribute('value', val);
            copyInput.select();
            document.execCommand("Copy");
            copyInput.remove();
        }

        const copyWhole = ()=>{
            copy('<Icon icon="'+currentIcon.value.code+'"></Icon>')
            copyMsg.value = "已复制整段代码"
        }

        const copyCode = ()=>{
            copy(currentIcon.value.code)
            copyMsg.value = "已复制Icon Code"
        }


        document.addEventListener('click',bind,true)

        onUnmounted(()=>{
            document.removeEventListener('click',bind,true)
        })
        return {
            IconProps,
            iconList,
            currentIcon,
            copyMsg,

            showIcon,
            copy,
            copyWhole,
            copyCode
        }
    },
}
</script>

<style scoped lang="less">
    .iconList{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;
        .iconItem{width:70px;height:70px;transition:.1s;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:8px;user-select:none;
            &:hover:not(.active){box-shadow:0px 3px 6px 0px rgb(0 0 0 / 10%), 0px 1px 3px 0px rgb(0 0 0 / 8%)}
            &.active{background-color:#ecf0f6;cursor:default;}
        }
    }

    .fixedTip{width:600px;left:calc(50% + 100px);transform:translate(-50%,0);position:fixed;background-color:#272a2f;height:80px;padding:0 20px 0 30px;border-radius:15px;bottom:15px;box-shadow:0px 16px 32px 0px rgb(0 0 0 / 10%), 0px 8px 16px 0px rgb(0 0 0 / 8%);display:flex;justify-content:space-between;align-items:center;
        .name{color:#fff;}
        .code{background-color:#363e49;color:#97a1b6;line-height:32px;font-size:16px;padding:0 15px;border-radius:4px;
            .labelName{color:#ffc866}
            .labelProp{color:#e48d26}
            .labelPropValue{color:#a4dd5b}
        }
    }
</style>
