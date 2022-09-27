<template>
    <ButtonGroup>
        <Button @click="changeSize('default')">default</Button>
        <Button @click="changeSize('small')">small</Button>
        <Button @click="changeSize('large')">large</Button>
        &nbsp;
        &nbsp;
        <Button @click="changeTransparent('default')">默认</Button>
        <Button @click="changeTransparent('full')">全透明</Button>
        <Button @click="changeTransparent('half')">半透明</Button>
        &nbsp;
        &nbsp;
        <Button @click="changeShapre('default')">默认</Button>
        <Button @click="changeShapre('circle')">圆形</Button>
        <Button @click="changeShapre('square')">方形</Button>
    </ButtonGroup>
    <br/>
    
    <!-- <ButtonGroup> -->
        <Button :shape="shape" :transparent="transparent" :size="size">Default</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="primary">Primary</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="dashed">Dashed</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="info">Info</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="success">Success</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="warning">Warning</Button>
        <Button :shape="shape" :transparent="transparent" :size="size" type="error">Error</Button>
    <!-- </ButtonGroup> -->
</template>

<script>
import {Button} from '../../src/index'

import {ref} from 'vue'
export default {
    components:{
        Button
    },
    setup() {
        const size = ref('default')
        const transparent = ref('default')
        const shape = ref('default')

        const changeSize = e=> size.value = e
        const changeTransparent = e=> transparent.value = e
        const changeShapre = e=>shape.value = e
        return {
            size,
            transparent,
            shape,

            changeSize,
            changeTransparent,
            changeShapre
        }
    },
}
</script>
