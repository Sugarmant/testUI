import { defineComponent,h,Transition } from "vue"

export default defineComponent({

    

    render(){
        const slots = this.$slots.default && this.$slots.default()

        const ani = {
            onBeforeEnter(el) {
                el.style.transition = ".2s"

                el.style.height = '0';
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            },

            onEnter(el) {
                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
            },

            onAfterEnter(el) {
                el.style.height = '';
            },

            onBeforeLeave(el) {
                el.style.transition = ".2s"
                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
            },

            onLeave(el) {
                if (el.scrollHeight !== 0) {
                    el.style.height = 0;
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                }
            },

            onAfterLeave(el) {
                el.style.height = '';
            }
        }

        return <Transition {...ani}>{slots}</Transition>
    }
})