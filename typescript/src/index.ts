import Component from './component'
import ImageComponent from './image-component'

const div = new Component('div', 'idy', 'element')
div.render()

const img = new ImageComponent('img1', 'img-class')
img.render()
