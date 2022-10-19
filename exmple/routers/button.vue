<template>
    <Typo>
        <Title h1>Button 按钮</Title>
        <Title h2>示例</Title>
    </Typo>
    <Row>
        <Col>
            <Space vertical>
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="dashed" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="primary" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="info" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="success" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="warning" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="error" />
                <Button loading icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="info">带文字的loading</Button>
                <Button :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="warning" >warning</Button>
                <Button icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="primary" />
                <Button icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" type="error">文字</Button>
                <Button icon="&#xe7f4;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size" />
                <Button icon="&#xe916;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size">文字</Button>
            </Space>
            <br>
            <Button icon="&#xe916;" :long="long" :focus="focus" :disabled="disabled" :shape="shape" :transparent="transparent" :size="size">长按钮测试</Button>
        </Col>
        <Col>
            <Space vertical>
                <RadioGroup type="border" v-model="size">
                    <Radio value="default" />
                    <Radio value="small" />
                    <Radio value="large" />
                </RadioGroup>

                <RadioGroup type="border" v-model="transparent">
                    <Radio value="default">默认 default</Radio>
                    <Radio value="full">全透明 full</Radio>
                    <Radio value="half">半透明 half</Radio>
                </RadioGroup>
                
                <RadioGroup type="border" v-model="shape">
                    <Radio value="default">默认 default</Radio>
                    <Radio value="circle">圆形 full</Radio>
                    <Radio value="square">方形 half</Radio>
                </RadioGroup>

                <RadioGroup type="border" v-model="disabled">
                    <Radio :value="false">非禁用</Radio>
                    <Radio :value="true">禁用</Radio>
                </RadioGroup>

                <RadioGroup type="border" v-model="focus">
                    <Radio :value="true">默认</Radio>
                    <Radio :value="false">取消focus</Radio>
                </RadioGroup>
                
                <RadioGroup type="border" v-model="long">
                    <Radio :value="false">默认</Radio>
                    <Radio :value="true">长按钮</Radio>
                </RadioGroup>
            </Space>
        </Col>
    </Row>
        
</template>

<script>
// import {Button} from '../../src/index'

import {ref} from 'vue'
export default {
    components:{
        // Button
    },
    setup() {
        const size = ref('default')
        const transparent = ref('default')
        const shape = ref('default')
        const disabled = ref(false)
        const focus = ref(true)
        const long = ref(false)
        return {
            size,
            transparent,
            shape,
            disabled,
            focus,
            long
        }
    },
}
</script>
