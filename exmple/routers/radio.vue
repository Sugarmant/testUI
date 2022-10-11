<template>
    <Row>
        <Col>
            <RadioGroup :vertical="vertical" :type="type" v-model="test">
                <Radio :disabled="disabled" value="1">选项1</Radio>
                <Radio :disabled="disabled" value="2">选项2</Radio>
                <Radio :disabled="disabled" value="3">选项3</Radio>
                <Radio :disabled="disabled" value="4">
                    <Icon icon="&#xe7f4;"></Icon>
                    选项4
                </Radio>
            </RadioGroup>
        </Col>
        <Col>
            <Space vertical>
                <div>
                    <div>样式 type</div>
                    <RadioGroup v-model="type">
                        <Radio value="default" />
                        <Radio value="button" />
                        <Radio value="border" />
                    </RadioGroup>
                </div>

                <div>
                    <div>是否禁用 disabled</div>
                    <RadioGroup v-model="disabled">
                        <Radio :value="true">true</Radio>
                        <Radio :value="false">false</Radio>
                    </RadioGroup>
                </div>
                
                <div>
                    <div>是否竖排 vertical</div>
                    <RadioGroup v-model="vertical">
                        <Radio :value="true">true</Radio>
                        <Radio :value="false">false</Radio>
                    </RadioGroup>
                </div>
            </Space>
        </Col>
    </Row>
</template>


<script>
import { ref } from 'vue'
export default {
    setup() {

        const test = ref('1')

        const type = ref('default')
        const disabled = ref(false)
        const vertical = ref(false)
        return {
            test,

            type,
            disabled,
            vertical
        }
    }
}
</script>
