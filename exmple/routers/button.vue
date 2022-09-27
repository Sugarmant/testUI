<template>
    <ButtonGroup>
        <Button @click="changeSize('default')">default</Button>
        <Button @click="changeSize('small')">small</Button>
        <Button @click="changeSize('large')">large</Button>
    </ButtonGroup>
    &nbsp;
    &nbsp;
    <ButtonGroup>
        <Button @click="changeTransparent('default')">默认</Button>
        <Button @click="changeTransparent('full')">全透明</Button>
        <Button @click="changeTransparent('half')">半透明</Button>
    </ButtonGroup>
    &nbsp;
    &nbsp;
    <ButtonGroup>
        <Button @click="changeShapre('default')">默认</Button>
        <Button @click="changeShapre('circle')">圆形</Button>
        <Button @click="changeShapre('square')">方形</Button>
    </ButtonGroup>
    &nbsp;
    &nbsp;
    <ButtonGroup>
        <Button @click="changeDisabled(false)">取消禁用</Button>
        <Button @click="changeDisabled(true)">禁用</Button>
    </ButtonGroup>
    <br/>
    <br/>
    
    <!-- <ButtonGroup> -->
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size">Default</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="primary">Primary</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="dashed">Dashed</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="info">Info</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="success">Success</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="warning">Warning</Button>
        <Button :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="error">Error</Button>
    <!-- </ButtonGroup> -->
        <br/>
        <br/>
        <Button native-type="submit" disabled :shape="shape" :transparent="transparent" :size="size">Default</Button>
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
        const disabled = ref(false)

        const changeSize = e=> size.value = e
        const changeTransparent = e=> transparent.value = e
        const changeShapre = e=>shape.value = e
        const changeDisabled = e=>disabled.value = e
        return {
            size,
            transparent,
            shape,
            disabled,

            changeSize,
            changeTransparent,
            changeShapre,
            changeDisabled
        }
    },
}
</script>
