import { default as TButton } from './components/button';
import { default as TInput } from './components/input';

export {
    TButton,
    TInput
}

const components = [
    TButton,
    TInput
]

export default function(vue){
    components.forEach((component) => {
        console.log(component)
        vue.component(component.name, component)
    })
}