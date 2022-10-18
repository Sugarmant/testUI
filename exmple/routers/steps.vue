<template>
    <div>
      <Steps :current="index">
        <Step title="开始"></Step>
        <Step title="中间"></Step>
        <Step title="结束"></Step>
      </Steps>
      <Button @click="change">change</Button>
      <div style="margin:30px">
        <h2>
          <a href="https://github.com/iview/iview/issues/6078">#6078</a>
        </h2>
        <br><br>
      </div>
      <br><br><br><br>
      <hr>
    </div>
</template>

<script setup>
import {Step} from "../../src";
import {Steps} from "../../src";
import {onMounted, reactive, ref} from "vue"
  const total = ref(512)
  const current = ref(0)
  const index = ref(0)
  const activitiList = ref([
    {
      approveUserName:'123',
      tooltip:'测试标题',
      startTime:'1'
    },{
      approveUserName:'123',
      tooltip:'测试标题2',
      startTime:'2'
    }
  ])
  const statusList = ref([
    {
      tooltip:'测试标题',
    },{
      tooltip:'测试标题2',
    }
  ])
  const changeList = ref([
    {
      approveUserName:'456',
      startTime:'1'
    },{
      approveUserName:'456',
      startTime:'2'
    },{
      approveUserName:'456',
      startTime:'3'
    },{
      approveUserName:'456',
      startTime:'4'
    },{
      approveUserName:'456',
      startTime:'5'
    }
  ])

  const next = () => {
    if (current.value === 3) {
      current.value = 0
    }
  }

  const change = () => {
    activitiList.value = activitiList.value.concat(changeList.value)
  }

  onMounted(() => {
    change()
  })
</script>

<style>
.demo-status{
  display: block;
  color: #fff;
}
.demo-step-tip .ivu-steps-status-finish .ivu-icon{
  color: #2d8cf0
}
.demo-step-tip .ivu-steps-status-error .ivu-icon{
  color: #ed4014
}
</style>
