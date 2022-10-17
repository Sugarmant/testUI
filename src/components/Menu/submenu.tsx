import {defineComponent,h,ref} from 'vue'

const prefix = 't-submenu'
import CollapseTransition from '../CollapseTransition'
import Icon from '../icon'
export default defineComponent({
    name: 'Submenu',
    props: {
        
    },
    data() {
        return {
            showSubmenu:true
        }
    },
    inject:['vertical'],
    render () {
        const title = this.$slots.title && this.$slots.title()
        const slots = this.$slots.default && this.$slots.default()

        const aniTrigger = ()=> {
            this.showSubmenu = !this.showSubmenu
        }
        return (
            <div class={[prefix]}>
                {title?
                    <div onClick={aniTrigger} class={{
                        [`${prefix}-title`]:true,
                        [`${prefix}-title-active`]:this.showSubmenu,
                    }}>
                        <span>{title}</span>
                        <Icon icon="&#xe846;" size={12} />
                    </div>
                :null}
                
                {this.vertical?<CollapseTransition>
                    {this.showSubmenu?<div>{slots}</div>:null}
                </CollapseTransition>:null}
                
                
            </div>
        )
    }
})
