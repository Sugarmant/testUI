<template>
    <h2>基础</h2>
    <Space>
        <Button @click="onChangeChe">改变</Button>
        <Radio value="标签" v-model="che" />
        <Radio value="标签" v-model="che" />
    </Space>

    <h2>RadioGroup</h2>
    <RadioGroup v-model="gruopParam">
        <Radio value="v1">选项1</Radio>
        <Radio value="v2">选项2</Radio>
        <Radio disabled value="v3">禁用项</Radio>
    </RadioGroup>
    
    <h2>Button样式</h2>
    <RadioGroup type="button" v-model="gruopParam">
        <Radio value="v1">选项1</Radio>
        <Radio value="v2">选项2</Radio>
        <Radio value="v3">选项3</Radio>
    </RadioGroup>
</template>


<script>
import { ref } from 'vue'
export default {
    setup() {
        const che = ref(false)
        
        const gruopParam = ref('v2')
        
        const onChangeChe = ()=>{
            che.value = !che.value
        }
        return {
            che,
            gruopParam,

            onChangeChe
        }
    }
}
</script>
