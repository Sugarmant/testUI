import {defineComponent,h,nextTick,onMounted,ref} from 'vue'

const prefix = 't-table'
import TableCell from './cell'
export default defineComponent({
    name: 'Table',
    props: {
        columns:{
            type:Array,
            default:[]
        },
        data:{
            type:Array,
            default:[]
        },
        stripe:Boolean,
        border:Boolean,
        height:Number
    },
    render () {

        const $theadBody = ref()
        const $tbodyBody = ref()
        const $wrapper = ref()
        const $scrollbarHolder = ref()

        let allSettledWidth = 0
        let settledLength = 0
        const colgroupCol = (
            this.columns.map(v=>{
                if(v.width){
                    allSettledWidth+=v.width
                    settledLength++
                    return <col width={`${v.width}`} />
                }
                return <col/>
            })
        )

        const thead = (
            <table ref={$theadBody} class={{
                [`${prefix}`]:true,
                [`${prefix}-border`]:this.border
            }} cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                    {colgroupCol}
                    {this.height?<col ref={$scrollbarHolder} />:null}
                </colgroup>
                <thead class={`${prefix}-thead`}>
                    <tr class={`${prefix}-thead-tr`}>
                        {this.columns.map(v=>{
                            return <th class={`${prefix}-thead-td`}>
                                <TableCell value={v.title}></TableCell>
                            </th>
                        })}
                        {this.height?<th class={`${prefix}-thead-td`}></th>:null}
                    </tr>
                </thead>
            </table>
        )

        const tbody = (
            <div ref={$tbodyBody} class={{
                [`${prefix}-auto`]:true,
                [`${prefix}-stripe`]:this.stripe,
            }} style={`height:${this.height-48}px`}>
                <table class={{
                    [`${prefix}`]:true,
                    [`${prefix}-border`]:this.border
                }} cellspacing="0" cellpadding="0" border="0">
                    <colgroup>
                        {colgroupCol}
                    </colgroup>
                    <tbody class={`${prefix}-tbody`}>
                        {this.data.map(item=>{
                            return <tr class={`${prefix}-tbody-tr`}>
                                {this.columns.map(head=>{
                                    return <td class={`${prefix}-tbody-td`}>
                                        {head.type === 'html'?<TableCell html={item[head.key]}></TableCell>:null}
                                        {head.type === undefined?<TableCell value={item[head.key]}></TableCell>:null}
                                    </td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )

        
        nextTick(()=>{
            if($wrapper.value && $scrollbarHolder.value){
                const holderWidth = ($wrapper.value.offsetWidth - $wrapper.value.clientWidth)
                $theadBody.value.width = $theadBody.value.offsetWidth+'px'
                for(const col of $theadBody.value.querySelector('colgroup').childNodes){
                    if(col instanceof HTMLTableColElement){
                        col.setAttribute('width',(($theadBody.value.offsetWidth-holderWidth)/this.columns.length)+'')
                    }
                }
                $scrollbarHolder.value.width = holderWidth
            }

            const avarageWidth = ($wrapper.value.clientWidth-allSettledWidth)/(this.columns.length-settledLength)
            console.log($tbodyBody.value.querySelector('colgroup').childNodes)
            for(const col of $theadBody.value.querySelector('colgroup').childNodes){
                if(col instanceof HTMLTableColElement && !col.getAttribute('width')) col.setAttribute('width',avarageWidth+'')
            }
            for(const col of $tbodyBody.value.querySelector('colgroup').childNodes){
                if(col instanceof HTMLTableColElement && !col.getAttribute('width'))  col.setAttribute('width',avarageWidth+'')
            }
        })

        return (
            <div ref={$wrapper} class={{
                [`${prefix}-wrapper`]:true,
            }}>
                {this.columns && this.columns.length>0?thead:null}
                {this.data && this.data.length>0?tbody:null}
            </div>
        )
    }
})
