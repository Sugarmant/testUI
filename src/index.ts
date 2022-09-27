import { default as Button } from './components/button';
import { default as ButtonGroup} from './components/button-group'
import { default as Input } from './components/input';
import { default as Tabs } from './components/tabs';
import { default as Tree } from './components/tree';
import { default as Step} from './components/step';
import { default as Steps} from './components/steps'
import { default as Progress} from './components/steps'
import { default as Select} from './components/steps'

export {
    Button,
    ButtonGroup,
    Input,
    Tabs,
    Tree,
    Step,
    Steps,
    Progress,
    Select
}


const components = [
    Button,
    ButtonGroup,
    Input,
    Tabs,
    Tree,
    Step,
    Steps,
    Progress,
    Select
]

export default function(vue){
    components.forEach((component) => {
        vue.component(component.name, component)
    })
}