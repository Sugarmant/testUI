import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse';

const prefix = 't-btn-group';

export default defineComponent({
    name: 'ButtonGroup',
    props: {
        shape:{
            validator(value:string){
                return oneOf(value,['default','circle','square'])
            },
            default:'default'
        },
        size:{
            validator(value:string){
                return oneOf(value,['default','large','small'])
            },
            default:'default'
        },
        vertical:Boolean
    },
    render () {

        const slots = this.$slots.default && this.$slots.default()
        if(this.size!=='default'){
            for(const button of slots){
                if(button.type.name === 'Button'){
                    if(!button['props']) button['props'] = {}
                    button['props']['size'] = this.size
                }
            }
        }

        return (
            <div class={{
                [prefix]:true,
                [`${prefix}-${this.shape}`]:this.shape!=='default',
                [`${prefix}-vertical`]:this.vertical
            }}>{slots && slots.length?slots:null}</div>
        )
    }
})
