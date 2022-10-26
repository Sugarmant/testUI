<template>
    <Typo>
        <Title h1>Button 按钮</Title>
        <Title h3>按钮类型</Title>
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

            <Divider/>
            <Paragraph>
                通过设置<Text code>type</Text>来改变按钮的类型：<Text code>default</Text>、<Text code>primary</Text>、<Text code>info</Text>、<Text code>success</Text>、<Text code>warning</Text>、<Text code>error</Text>
            </Paragraph>
            <Paragraph>
                通过设置<Text code>transparent</Text>来控制透明度：<Text code>default</Text>、<Text code>half</Text>、<Text code>full</Text>
            </Paragraph>
        </Card>

        <Divider hide />
        <Title h3>图标和形状</Title>
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
            <Divider/>
            <Paragraph>
                通过设置属性<Text code>icon</Text>嵌入一个图标组件
            </Paragraph>
            <Paragraph>
                通过设置<Text code>shape</Text>来改变形状: <Text code>default</Text>、<Text code>circle</Text>、<Text code>square</Text>
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Title h3>按钮尺寸</Title>
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
            <Divider/>
            <Paragraph>
                通过设置<Text code>size</Text>来改变尺寸：<Text code>small</Text>、<Text code>default</Text>、<Text code>large</Text>
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Title h3>长按钮</Title>
        <Card>
            <Button style="margin-bottom:15px" type="primary" long>长按钮</Button>
            <Button long>长按钮</Button>
            <Divider/>
            <Paragraph>
                通过设置<Text code>long</Text>来改变设置按钮为长按钮
            </Paragraph>
        </Card>

        <Divider hide></Divider>

        <Title h3>禁用状态</Title>
        <Card>
            <Space vertical>
                <Space>
                    <Button type="primary">primary</Button>
                    <Button>default</Button>
                    <Button type="dashed">dashed</Button>
                </Space>
                <Space>
                    <Button disabled>primary</Button>
                    <Button disabled>default</Button>
                    <Button disabled>dashed</Button>
                </Space>
            </Space>
            <Divider/>
            <Paragraph>
                通过设置<Text code>disabled</Text>来禁用按钮
            </Paragraph>
        </Card>

        <Divider hide />
        
        <Title h3>加载中状态</Title>
        <Card>
            <Space vertical>
                <Space>
                    <Button type="primary" loading>loading...</Button>
                    <Button loading>loading...</Button>
                    <Button type="dashed" loading>loading...</Button>
                    <Button type="warning" loading>loading...</Button>
                    <Button type="error" loading>loading...</Button>
                    <Button icon="" loading />
                </Space>
            </Space>
            <Divider/>
            <Paragraph>
                通过设置<Text code>loading</Text>来使按钮处于加载中
            </Paragraph>
        </Card>

        <Divider hide />
        
        <Title h3>组合按钮</Title>
        <Card>
            <Space vertical>
                <Space>
                    <ButtonGroup>
                        <Button>default</Button>
                        <Button type="dashed">dashed</Button>
                        <Button type="primary">primary</Button>
                        <Button type="info">info</Button>
                        <Button type="success">success</Button>
                        <Button type="warning">warning</Button>
                        <Button type="error">error</Button>
                    </ButtonGroup>
                </Space>
                <Space>
                    <ButtonGroup>
                        <Button type="primary" transparent="half">primary</Button>
                        <Button type="primary" transparent="half">primary</Button>
                        <Button type="primary" transparent="half">primary</Button>
                    </ButtonGroup>
                </Space>
            </Space>
            <Divider/>
            <Paragraph>
                通过组件<Text code>ButtonGroup</Text>来使按钮组合起来
            </Paragraph>
        </Card>

        <Divider hide />

        <Title h3>取消focus阴影</Title>
        <Card>
            <Space vertical>
                <Space>
                    <Button :focus="false">default</Button>
                    <Button :focus="false" type="dashed">dashed</Button>
                    <Button :focus="false" type="primary">primary</Button>
                    <Button :focus="false" type="info">info</Button>
                    <Button :focus="false" type="success">success</Button>
                    <Button :focus="false" type="warning">warning</Button>
                    <Button :focus="false" type="error">error</Button>
                </Space>
            </Space>
            <Divider/>
            <Paragraph>
                通过设置<Text code>focus</Text>为false来使关闭阴影
            </Paragraph>
        </Card>

        <Divider hide/> 
        <Title h3>API</Title>

        <Table border :columns="columns" :data="data"></Table>
    </Typo>
        
</template>

<script>
import {ref} from 'vue'
export default {

    setup() {
        const columns = [
            {title:'属性',key:'prop'},
            {title:'说明',key:'description',type:'html'},
            {title:'类型',key:'type'},
            {title:'默认值',key:'default'}
        ]

        const data = [
            {prop:'type',type:'String',default:'default',description:"按钮类型，可选值 <code>default</code>、<code>dashed</code>、<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置"},
            {prop:'transparent',type:'String',default:'default',description:"按钮透明度，可选值 <code>default</code>、<code>half</code>、<code>full</code>或者不设置"},
            {prop:'shape',type:'String',default:'default',description:"按钮形状，可选值 <code>default</code>、<code>circle</code>、<code>square</code>或者不设置"},
            {prop:'native-type',type:'String',default:'false',description:"设置button原生的type，可选值 <code>button</code>、<code>submit</code>、<code>rest</code>"},
            {prop:'icon',type:'String',default:'-',description:"设置按钮的图标"},
            {prop:'long',type:'Boolean',default:'-',description:"开启后，按钮的长度为 100%"},
            {prop:'disabled',type:'Boolean',default:'false',description:"设置按钮为禁用状态"},
            {prop:'loading',type:'Boolean',default:'false',description:"设置按钮为加载中状态"},
            
        ]

        return {
            columns,
            data
        }
    },
}
</script>
