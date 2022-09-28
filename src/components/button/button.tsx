import {defineComponent,h} from 'vue'

const prefixCls = 't-btn';

import Icon from '../icon/index'
import {oneOf} from '../../utils/nurse'

export default defineComponent({
    name: 'Button',
    emits: ['click'],
    props: {
        type:{
            validator (value:string) {
                return oneOf(value, ['default', 'primary', 'dashed', 'info', 'success', 'warning', 'error']);
            },
            default:'default'
        },
        size:{
            validator(value:string){
                return oneOf(value,['default','large','small'])
            },
            default:'default'
        },
        transparent:{
            validator(value:string){
                return oneOf(value,['default','full','half'])
            },
            default:'default'
        },
        shape:{
            validator(value:string){
                return oneOf(value,['default','circle','square'])
            },
            default:'default'
        },
        disabled:{
            validator(value:boolean | string){
                return oneOf(value,[true,false,''])
            },
            default:false
        },
        nativeType:{
            type:String
        },
        focus:{
            validator(value:boolean){
                return oneOf(value,[true,false])
            }
        },
        long:{
            validator(value:boolean){
                return oneOf(value,[true,false,''])
            }
        },
        icon:{
            type:String
        }
    },
    render () {
        const handleClickLink = e=>{
            this.$emit('click',e)
        }

        const slots = this.$slots.default && this.$slots.default()
        console.log(this)
        const icc = this.icon?(<Icon size="small" icon={this.icon}></Icon>):''

        return (
            <button 
                class={[
                    prefixCls,
                    this.type!='default'?`${prefixCls}-${this.type}`:'',
                    this.size!='default'?`${prefixCls}-${this.size}`:'',
                    this.transparent!='default'?`${prefixCls}-${this.transparent}`:'',
                    this.shape!='default'?`${prefixCls}-${this.shape}`:'',
                    this.disabled || this.disabled === ''?`${prefixCls}-disabled`:'',
                    this.focus===false?`${prefixCls}-focus-disabled`:'',
                    this.long || this.long===''?`${prefixCls}-long`:'',
                    icc && slots?`${prefixCls}-icon`:'',
                    icc && !slots?`${prefixCls}-icon-only`:''
                ]} 
                disabled={this.disabled || this.disabled === ''} 
                type={this.nativeType?this.nativeType:''}
                onClick={handleClickLink}
            >
                {icc?icc:null}
                <span>{slots && slots.length?slots:null}</span>
            </button>
        )
    }
})
