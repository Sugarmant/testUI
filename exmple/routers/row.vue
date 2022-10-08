<template>
    <h2>概览</h2>
    <Row>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="5"><div>span="5"</div></Col>
        <Col span="7"><div>span="7"</div></Col>
    </Row>
    <h2>space间隔</h2>
    <Row :space="15">
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="4"><div>span="4"</div></Col>
        <Col span="5"><div>span="5"</div></Col>
        <Col span="7"><div>span="7"</div></Col>
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
</template>


<style lang="less">
    .t-row{background-color:#f0f0f0;
        .t-col div{width:100%;padding:10px 0;text-align:center;color:#fff;background-color:rgba(0,153,229,50%);}
        .t-col:nth-child(2n) div{background-color:rgba(0,153,229,90%);}
    }
</style>