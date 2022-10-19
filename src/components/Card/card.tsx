import { defineComponent,h } from "vue";

const prefix = 't-card'
export default defineComponent({
    name:"Card",

    render(){
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={{
                [prefix]:true
            }}>
                <div class={{
                    [`${prefix}-body`]:true
                }}>{slots}</div>
            </div>
        )
    }
})