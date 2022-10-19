<template>
    <Typo>
        <Title h1>Button 按钮</Title>
        <Title h2>示例</Title>
        <Card>
            <Space vertical>
                <Space>
                    <Button>default</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="primary">primary</Button>
                    <Button type="info">info</Button>
                    <Button type="success">success</Button>
                    <Button type="warning">warning</Button>
                    <Button type="error">error</Button>
                </Space>

                <Space>
                    <Button style="visibility:hidden" transparent="half">default</Button>
                    <Button style="visibility:hidden" transparent="half" type="dashed">dashed</Button>
                    <Button transparent="half" type="primary">primary</Button>
                    <Button transparent="half" type="info">info</Button>
                    <Button transparent="half" type="success">success</Button>
                    <Button transparent="half" type="warning">warning</Button>
                    <Button transparent="half" type="error">error</Button>
                </Space>

                <Space>
                    <Button style="visibility:hidden" transparent="full">default</Button>
                    <Button style="visibility:hidden" transparent="full" type="dashed">dashed</Button>
                    <Button transparent="full" type="primary">primary</Button>
                    <Button transparent="full" type="info">info</Button>
                    <Button transparent="full" type="success">success</Button>
                    <Button transparent="full" type="warning">warning</Button>
                    <Button transparent="full" type="error">error</Button>
                </Space>
            </Space>

            <Divider>类型</Divider>
            <Paragraph>
                通过设置<Text code>type</Text>来改变按钮的类型：<Text code>default</Text>、<Text code>primary</Text>、<Text code>info</Text>、<Text code>success</Text>、<Text code>warning</Text>、<Text code>error</Text>
            </Paragraph>
            <Paragraph>
                通过设置<Text code>transparent</Text>来控制透明度：<Text code>default</Text>、<Text code>half</Text>、<Text code>full</Text>
            </Paragraph>
        </Card>

        <Divider hide />

        <Card>
            <Space vertical>
                <Space>
                    <Button type="primary" icon="&#xe7f4;"></Button>
                    <Button type="primary" icon="&#xe7f4;">带图标</Button>
                    <Button type="primary">Default</Button>
                    <Button type="primary" shape="circle">circle</Button>
                    <Button type="primary" shape="square">square</Button>
                </Space>
                <Space>
                    <Button icon="&#xe7f4;"></Button>
                    <Button icon="&#xe7f4;">带图标</Button>
                    <Button>Default</Button>
                    <Button shape="circle">circle</Button>
                    <Button shape="square">square</Button>
                </Space>
            </Space>
            <Divider>图标&形状</Divider>
            <Paragraph>
                通过设置属性<Text code>icon</Text>嵌入一个图标组件
            </Paragraph>
            <Paragraph>
                通过设置<Text code>shape</Text>来改变形状: <Text code>default</Text>、<Text code>circle</Text>、<Text code>square</Text>
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Card>
            <Space vertical>
                <Space>
                    <Button type="primary" size="small">small</Button>
                    <Button type="primary">default</Button>
                    <Button type="primary" size="large">large</Button>
                </Space>
                <Space>
                    <Button size="large">large</Button>
                    <Button>default</Button>
                    <Button size="small">small</Button>
                </Space>
            </Space>
            <Divider>尺寸</Divider>
            <Paragraph>
                通过设置<Text code>size</Text>来改变尺寸：<Text code>small</Text>、<Text code>default</Text>、<Text code>large</Text>
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Card>
            <Button style="margin-bottom:15px" type="primary" long>长按钮</Button>
            <Button long>长按钮</Button>
            <Divider>长按钮</Divider>
            <Paragraph>
                通过设置<Text code>long</Text>来改变设置按钮为长按钮
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Card>
            <Space vertical>
                <Space>
                    <Button type="primary">small</Button>
                    <Button>default</Button>
                    <Button type="dashed">large</Button>
                </Space>
                <Space>
                    <Button disabled>large</Button>
                    <Button disabled>default</Button>
                    <Button disabled>small</Button>
                </Space>
            </Space>
            <Divider>禁用状态</Divider>
            <Paragraph>
                通过设置<Text code>disabled</Text>来禁用按钮
            </Paragraph>
        </Card>
        
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
