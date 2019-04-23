import Component from './component'
const styles = require('./styles.css')

class ImageComponent extends Component {
    constructor(id: string, classes: string) {
        super('img', id, classes + ' ' + styles.image)
        // this.node.setAttribute('src', image)
    }
}

export default ImageComponent
