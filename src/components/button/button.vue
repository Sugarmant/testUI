<script>
    import { h } from 'vue';

    export default {
        name: 'TButton',
        emits: ['click'],
        props: {
            
        },
        methods: {
            handleClickLink (event) {
                this.$emit('click', event);
            }
        },
        render () {
            return h("button", {
                onClick: this.handleClickLink,
            },'123');
        }
    };
</script>
