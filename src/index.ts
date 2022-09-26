import { default as TButton } from './components/button';
import { default as TInput } from './components/input';
import { default as TTabs } from './components/tabs';
import { default as TTree } from './components/tree';

export {
    TButton,
    TInput,
    TTabs,
    TTree
}

const components = [
    TButton,
    TInput,
    TTabs,
    TTree
]

export default function(vue){
    components.forEach((component) => {
        vue.component(component.name, component)
    })
}