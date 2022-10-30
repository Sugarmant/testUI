

import { default as Input } from './components/input';
import { default as Tabs } from './components/tabs';
import { default as Tree } from './components/tree';
import { default as Step } from './components/step';
import { default as Steps } from './components/steps'
import { default as Progress } from './components/progress'
import { default as Select } from './components/select'
import { default as Header } from './components/Header'
import { default as Layout } from './components/Layout'
import { default as Menu } from './components/Menu'
import { default as MenuGroup } from './components/MenuGroup'
import { default as Submenu } from './components/Submenu'
import { default as Main } from './components/Main'
import { default as Sider } from './components/Sider'


/* 布局组件 */
import { default as Row } from './components/Row'
import { default as Col } from './components/Col'
import { default as Card } from './components/Card'
import { default as Divider } from './components/Divider'

/* 基础组件 */
import { default as ButtonGroup } from './components/button-group'
import { default as Button } from './components/button';
import { default as Icon } from './components/icon'
import { default as Space } from './components/Space'


/* 表单 */
import { default as RadioGroup } from './components/RadioGroup'
import { default as Radio } from './components/Radio'
import { default as Table } from './components/table'

/* 排版 */
import { default as Typo } from './components/Typograpy'
import { default as Title } from './components/Typograpy/title'
import { default as Paragraph } from './components/Typograpy/pragraph'
import { default as Blockquote } from './components/Typograpy/blockquote'
import { default as Text } from './components/Typograpy/text'
import { default as Link } from './components/Typograpy/link'

const components = [
    Input,
    Tabs,
    Tree,
    Step,
    Steps,
    Progress,
    Select,

    Header,
    Layout,
    Menu,
    MenuGroup,
    Submenu,
    Main,
    Sider,

    Row, Col, Card, Divider,

    ButtonGroup, Button, Icon, Space,

    RadioGroup, Radio, Table,

    Typo, Title, Paragraph, Blockquote, Text, Link
]

export {
    Input,
    Tabs,
    Tree,
    Step,
    Steps,
    Progress,
    Select,

    Header,
    Layout,
    Menu,
    MenuGroup,
    Submenu,
    Main,
    Sider,

    Row, Col, Card, Divider,

    ButtonGroup, Button, Icon, Space,

    RadioGroup, Radio, Table,

    Typo, Title, Paragraph, Blockquote, Text, Link
}

export default function (vue) {
    components.forEach((component) => {
        vue.component(component.name, component)
    })
}