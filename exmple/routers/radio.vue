<template>
    <h2>基础</h2>
    <Space>
        <!-- <Button @click="onChangeChe">改变</Button> -->
        <Radio label="标签" v-model="che" />
        <Radio label="标签" v-model="che" />
    </Space>

    <h2>RadioGroup</h2>
    <RadioGroup>
        <Radio label="标签"/>
        <Radio label="标签"/>
    </RadioGroup>
</template>


<script>
import { ref } from 'vue'
export default {
    setup() {
        const che = ref(false)
        
        const onChangeChe = ()=>che.value = !che.value
        return {
            che,
            onChangeChe
        }
    }
}
</script>
