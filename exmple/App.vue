<template>
    <Layout>
        <Header class="header">
            <MenuGroup @select="onSelect" v-model="currentName">
                <Menu name="1"><Icon icon="&#xe7ec;"/>菜单一号</Menu>
                <Menu name="2">菜单二号</Menu>
                <Submenu name="3">
                    <template #title>
                        上方的
                    </template>
                    <MenuGroup title="一号">
                        <Menu name="3-1">下拉1</Menu>
                        <Menu name="3-1">下拉2</Menu>
                        <Menu name="3-1">下拉3</Menu>
                    </MenuGroup>
                </Submenu>
            </MenuGroup>
        </Header>
        <Layout>
            <Sider class="sider">
                <MenuGroup vertical v-model="currentSide">
                    <Menu name="1"><Icon icon="&#xe7ec;"/>侧边一号</Menu>
                    <Menu name="2">侧边二号</Menu>
                    <Submenu name="3">
                        <template #title>
                            <Icon icon="&#xe824;" />组件
                        </template>
                        <MenuGroup title="一号" vertical>
                            <Submenu name="3-1">
                                <template #title>基础组件</template>
                                <MenuGroup title="一号" vertical>
                                    <Menu to="/button" name="3-1-1"><span>Button <em>按钮</em></span></Menu>
                                    <Menu to="/icon" name="3-1-2"><span>Icon <em>图标</em></span></Menu>
                                    <Menu to="/typography" name="3-1-3"><span>Typo <em>排版</em></span></Menu>
                                    <Menu to="/space" name="3-1-4"><span>Space <em>间距</em></span></Menu>
                                </MenuGroup>
                            </Submenu>
                            <Submenu name="3-2">
                                <template #title>布局组件</template>
                                <MenuGroup title="一号" vertical>
                                    <Menu to="/row" name="3-2-1"><span>Row/Col <em>栅格</em></span></Menu>
                                    <Menu to="/card" name="3-2-2"><span>Card <em>卡片</em></span></Menu>
                                    <Menu to="/divider" name="3-2-3"><span>Divider <em>分割线</em></span></Menu>
                                </MenuGroup>
                            </Submenu>
                            <Submenu name="3-3">
                                <template #title>表单组件</template>
                                <MenuGroup title="一号" vertical>
                                    <Menu to="/radio" name="3-3-1"><span>Radio <em>单选框</em></span></Menu>
                                    <Menu to="/table" name="3-3-2"><span>Table <em>表格</em></span></Menu>
                                </MenuGroup>
                            </Submenu>
                        </MenuGroup>
                    </Submenu>
                </MenuGroup>
            </Sider>
            <Layout>
                <Main>
                    <article class="mainView">
                        <router-view></router-view>
                    </article>
                </Main>
            </Layout>
        </Layout>
        
    </Layout>
</template>

<script>
    import {ref} from 'vue'
    export default {
        components:{
            // TButton
        },
        setup(){
            const currentName = ref('1')
            const currentSide = ref('1')
            const onSelect = val=>{
                console.log(val)
            }

            return {
               currentName,
               currentSide,

               
               onSelect
            }
        }
    }
</script>


<style lang="less">
    body{margin:0}
    .sider{
        em{color:inherit;display:block;font-size:12px;font-style:normal;opacity:.5;}
    }
    .mainView{background-color:#fff;padding:30px;border-radius:4px;}
</style>