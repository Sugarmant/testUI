import {defineComponent,h} from 'vue'

const prefixCls = 't-row';
export default defineComponent({
    name: 'Row',
    props: {
        space:{
            type:Number,
            default:0
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        console.log(this.space>0?`margin-left:-${this.space};margin-right:-${this.space}`:'')
        return (
            <div 
                class={[
                    prefixCls
                ]}
                style={[
                    this.space>0?`margin-left:-${this.space}px;margin-right:-${this.space}px;`:'',
                ]}
            >
                {slots}
            </div>
        )
    }
})
