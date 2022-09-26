import { default as TButton } from './components/button';
import { default as TInput } from './components/input';
import { default as TTabs } from './components/tabs';
import { default as TTree } from './components/tree';
import { default as TStep} from './components/step';
import { default as TSteps} from './components/steps'

export {
    TButton,
    TInput,
    TTabs,
    TTree,
    TStep,
    TSteps
}

const components = [
    TButton,
    TInput,
    TTabs,
    TTree,
    TStep,
    TSteps
]

export default function(vue){
    components.forEach((component) => {
        vue.component(component.name, component)
    })
}