import {defineComponent,h} from 'vue'

const prefixCls = 't-col';
export default defineComponent({
    name: 'Col',
    props: {
        span:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=-1 && val<=24?true:false
            },
            default:-1
        },
        space:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=0 && val<=24?true:false
            },
            default:0
        },
        order:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return !isNaN(val)
            }
        },
        offset:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=-1 && val<=24?true:false
            },
            default:0
        },
        flex:String
    },
    render(){
        const slots = this.$slots.default && this.$slots.default()
        const flex = (()=>{
            if(!this.flex) return ''
            if(!isNaN(Number(this.flex))){
                return this.flex
            }
            if(this.flex.indexOf(' ')===-1 && this.flex.indexOf('px')>-1){
                return `0 0 ${this.flex}`
            }
            
            return this.flex
        })();
        console.log(flex)
        // this.flex && (this.flex.indexOf(' ')>-1 || this.flex==="auto")?this.flex:`0 0 ${this.flex}`
        // console.log(this.flex.split(' '))
        // console.log(this.flex,'-',this.flex && (this.flex.indexOf(' ')>-1 || this.flex==="auto" || this.flex==='none')?this.flex:`0 0 ${this.flex}`)
        return (
            <div 
                class={[
                    prefixCls,
                    this.span>-1?`${prefixCls}-span-${this.span}`:'',
                    this.offset>0?`${prefixCls}-offset-${this.offset}`:''
                ]}
                style={[
                    this.span==0?'display:none':'',
                    this.space>0?`padding-left:${this.space/2}px;padding-right:${this.space/2}px`:'',
                    !isNaN(this.order)?`order:${this.order}`:'',
                    this.flex?`flex:${flex}`:''
                ]}
            
            >{slots?slots:null}</div>
        )
    }
})