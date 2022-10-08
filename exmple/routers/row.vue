<template>
    <h2>概览</h2>
    <Row>
        <Col><div>span="4"</div></Col>
        <Col><div>span="4"</div></Col>
        <Col><div>span="4"</div></Col>
        <Col><div>span="2"</div></Col>
        <Col><div>span="10"</div></Col>
    </Row>
    <hr>
    <Row>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="2"><div>span="2"</div></Col>
        <Col span="10"><div>span="10"</div></Col>
    </Row>
    <h2>space间隔</h2>
    <Row :space="15">
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="2"><div>span="2"</div></Col>
        <Col span="10"><div>span="7"</div></Col>
    </Row>
    <h2>order排序</h2>
    <Row>
        <Col order="4"><div>order 4</div></Col>
        <Col order="3"><div>order 3</div></Col>
        <Col order="2"><div>order 2</div></Col>
        <Col order="1"><div>order 1</div></Col>
        <Col order="0"><div>order 0</div></Col>
    </Row>

    <h2>offset偏移</h2>
    <Row>
        <Col span="4" offset="4"><div>offset 4</div></Col>
        <Col span="4" offset="2"><div>offset 2</div></Col>
        <Col span="4" offset="6"><div>offset 6</div></Col>
    </Row>
    
    <h2>justify对齐</h2>
    <Space>
        <Button @click="changeJustify('start')">start</Button>
        <Button @click="changeJustify('center')">center</Button>
        <Button @click="changeJustify('end')">end</Button>
        <Button @click="changeJustify('space-between')">space-between</Button>
        <Button @click="changeJustify('space-around')">space-around</Button>
    </Space>
    <hr>
    <Row :justify="justify">
        <Col span="4"><div>normal</div></Col>
        <Col span="4"><div>normal</div></Col>
        <Col span="4"><div>normal</div></Col>
    </Row>

    <h2>align对齐</h2>
    <Space>
        <Button @click="changeAlign('start')">start</Button>
        <Button @click="changeAlign('center')">center</Button>
        <Button @click="changeAlign('end')">end</Button>
        <Button @click="changeAlign('space-between')">space-between</Button>
        <Button @click="changeAlign('space-around')">space-around</Button>
        <Button @click="changeAlign('stretch')">stretch</Button>
    </Space>
    <hr>
    <Row :align="align" native-class="setHeight">
        <Col span="12"><div>normal</div></Col>
        <Col span="13"><div>normal</div></Col>
        <Col span="21"><div>normal</div></Col>
    </Row>

    <h2>flex布局</h2>
    <Row>
        <Col flex="100px"><div>flex="100px"</div></Col>
        <Col flex="auto"><div>flex="auto"</div></Col>
    </Row>
    <hr>
    <Row>
        <Col flex="2"><div>flex="2"</div></Col>
        <Col flex="5"><div>flex="5"</div></Col>
    </Row>
    <hr>
    <Row>
        <Col flex="none"><div>flex="none"</div></Col>
        <Col flex="auto"><div>flex="auto"</div></Col>
    </Row>
    <hr>
    <Row>
        <Col flex="1 0 50%"><div>flex="1 0 50%"</div></Col>
        <Col flex="1"><div>flex="1"</div></Col>
    </Row>
</template>

<script>

import {ref} from 'vue'
export default {
    setup() {
        const justify = ref('')
        const align = ref('')
        const changeJustify = e => justify.value = e

        const changeAlign = e => align.value = e
        return {
            justify,
            align,

            changeJustify,
            changeAlign
        }
    }
}
</script>


<style lang="less">
    .t-row{background-color:#f0f0f0;
        .t-col div{width:100%;height:100%;box-sizing:border-box;padding:10px 0;text-align:center;color:#fff;background-color:rgba(0,153,229,50%);}
        .t-col:nth-child(2n) div{background-color:rgba(0,153,229,90%);}
    }

    .setHeight{height:170px}
</style>