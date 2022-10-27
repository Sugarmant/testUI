import {defineComponent,h} from 'vue'

const prefixCls = 't-icon';
export default defineComponent({
    name: 'Icon',
    props: {
        size:{
            validator(val:number | string){
                return typeof val === 'number' || typeof val === 'string'
            },
            default:16
        },
        icon:{
            type:String,
            default:''
        },
    },
    render () {
        
        return (
            <i style={`font-size:${this.size}${typeof this.size === 'number'?'px':''}`} class={[
                `${prefixCls}`
            ]}>{decode(this.$props.icon)}</i>
        )
    }
})

function decode( str ){
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.innerHTML;
}