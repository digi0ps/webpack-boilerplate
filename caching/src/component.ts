import { sortedUniq } from 'lodash'

interface Component {
    element: string
    id: string
    classes: string
    node: HTMLElement
}

class Component {
    constructor(element: string, id: string, classes: string) {
        this.element = element || 'div'
        this.id = id || ''
        this.classes = classes || ''
        this.node = this.createNode()
        this.addClasses()
    }

    private createNode(): HTMLElement {
        const node = document.createElement(this.element)
        node.id = this.id
        return node
    }

    private addClasses() {
        const _classes = this.classes.split(' ')
        const sorted_classes = sortedUniq(_classes)
        for (const _class of sorted_classes) {
            this.node.classList.add(_class)
        }
    }

    render(): null {
        if (!this.node) {
            return null
        }
        document.body.append(this.node)
    }
}

export default Component
