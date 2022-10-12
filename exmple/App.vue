<template>
    <Layout>
        <Header class="header">
            <MenuGroup>
                <Menu name="1">菜单一号</Menu>
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
        <router-view></router-view>
    </Layout>
</template>

<script>
    
    export default {
        components:{
            // TButton
        },
        setup(){
           
            return {
               
            }
        }
    }
</script>


<style scoped lang="less">
    
</style>