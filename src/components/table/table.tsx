import {defineComponent,h} from 'vue'

const prefix = 't-table'
import TableCell from './cell'
export default defineComponent({
    name: 'Table',
    props: {
        columns:Array,
        data:Array,
        stripe:Boolean,
        height:Number
    },
    render () {
        const thead = (
            <thead class={`${prefix}-thead`}>
                <tr class={`${prefix}-thead-tr`}>
                    {this.columns.map(v=>{
                        return <th class={`${prefix}-thead-td`}>
                            <TableCell value={v.title}></TableCell>
                        </th>
                    })}
                </tr>
            </thead>
        )

        const tbody = (
            <tbody class={`${prefix}-tbody`} style={`height:${this.height-48}px`}>
                {this.data.map(v=>{
                    return (
                        <tr class={`${prefix}-tbody-tr`}>
                            {Object.keys(v).map((val,k)=>{
                                if(k<this.columns.length) return <td class={`${prefix}-tbody-td`}>
                                    <TableCell value={v[val]}></TableCell>
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )

        return (
            <table cellspacing="0" cellpadding="0" border="0" style={`height:${this.height}px`} class={{
                [prefix]:true,
                [`${prefix}-stripe`]:this.stripe
            }}>
                {this.columns && this.columns.length>0?thead:null}
                {this.data && this.data.length>0?tbody:null}
            </table>
        )
    }
})
