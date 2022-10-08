import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse';

const prefixCls = 't-row';
export default defineComponent({
    name: 'Row',
    props: {
        space:{
            type:Number,
            default:0
        },
        justify:{
            validator(val:string){
                return oneOf(val,['start','end','center','space-around','space-between',''])
            },
            default:''
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        console.log(this.space)
        for(const slot of slots){
            if(slot.type.name === 'Col' && this.space>0) {
                // if(!slot.props) slot.props = {}
                slot.props['space'] = this.space
            }
        }
        
        return (
            <div 
                class={[ prefixCls ]}
            >
                <div 
                    class={[
                        `${prefixCls}-inner`,
                        this.justify!==''?`${prefixCls}-inner-${this.justify}`:''
                    ]}
                    style={[
                        this.space>0?`margin-left:-${this.space}px;margin-right:-${this.space}px;`:'',
                    ]}
                >{slots}</div>
            </div>
        )
    }
})
