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
        },
        align:{
            validator(val:string){
                return oneOf(val,['start','end','center','space-around','space-between','stretch',''])
            },
            default:''
        },
        nativeClass:String
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        for(const slot of slots){
            if(slot.type.name === 'Col' && this.space>0) {
                // if(!slot.props) slot.props = {}
                slot.props['space'] = this.space
            }
        }
        
        return (
            <div 
                class={[ 
                    prefixCls,
                    this.nativeClass
                ]}
            >
                <div 
                    class={[
                        `${prefixCls}-inner`,
                        this.justify!==''?`${prefixCls}-justify-${this.justify}`:'',
                        this.align!==''?`${prefixCls}-align-${this.align}`:''
                    ]}
                    style={[
                        this.space>0?`margin-left:-${this.space/2}px;margin-right:-${this.space/2}px;`:'',
                    ]}
                >{slots}</div>
            </div>
        )
    }
})
