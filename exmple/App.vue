<template>
    <Layout>
        <Header class="header">
            <MenuGroup @select="onSelect" v-model="currentName">
                <Menu name="1"><Icon icon="&#xe7ec;"/>菜单一号</Menu>
                <Menu name="2">菜单二号</Menu>
                <Submenu name="3">
                    <template #title>
                        带下拉的菜单
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
            <Sider>
                <MenuGroup vertical>
                    <Menu name="1"><Icon icon="&#xe7ec;"/>侧边一号</Menu>
                    <Menu name="2">侧边二号</Menu>
                    <Submenu name="3">
                        <template #title>
                            <Icon icon="&#xe7b4;" />带下拉的菜单
                        </template>
                        <MenuGroup title="一号" vertical>
                            <Menu name="3-1">下拉1</Menu>
                            <Menu name="3-1">下拉2</Menu>
                            <Menu name="3-1">下拉3</Menu>
                        </MenuGroup>
                    </Submenu>
                </MenuGroup>
            </Sider>
            <Layout>
                <Main>
                    <router-view></router-view>
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
            const onSelect = val=>{
                console.log(val)
            }

            return {
               currentName,
               onSelect
            }
        }
    }
</script>


<style lang="less">
    body{margin:0}
</style>