<template>
    <pre class="codetemp" v-html="html"></pre>
</template>

<script>

import hljs from 'highlight.js'
export default {
    props:{
        html:String
    },
    setup(e) {
        const html = hljs.highlightAuto(e.html).value
        return {
            html
        }
    },
}
</script>


<style lang="less">

    .codetemp{background-color:#f6f8fa;padding:15px;box-sizing:border-box;border-radius:5px;margin:0;font-size:14px;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;line-height:20px;margin-top:15px;
        .hljs-name, .hljs-quote, .hljs-selector-pseudo, .hljs-selector-tag{color:#3e76f6}
        .hljs-attr, .hljs-attribute{color:#e96900}
        .hljs-meta .hljs-string, .hljs-regexp, .hljs-string{color:#42b983}
    }
    
</style>