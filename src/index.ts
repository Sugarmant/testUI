import { default as Button } from './components/button';
import { default as ButtonGroup} from './components/button-group'
import { default as Input } from './components/input';
import { default as Tabs } from './components/tabs';
import { default as Tree } from './components/tree';
import { default as Step} from './components/step';
import { default as Steps} from './components/steps'
import { default as Progress} from './components/steps'
import { default as Select} from './components/steps'
import { default as Icon} from './components/icon'
import { default as Space} from './components/Space'

export {
    Button,
    ButtonGroup,
    Input,
    Tabs,
    Tree,
    Step,
    Steps,
    Progress,
    Select,
    Icon,
    Space
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
    Select,
    Icon,
    Space
]

export default function(vue){
    components.forEach((component) => {
        vue.component(component.name, component)
    })
}