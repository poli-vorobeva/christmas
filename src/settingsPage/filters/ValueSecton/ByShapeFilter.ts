import Control from "../../../common/controll"
export class ByShapeFilter extends Control {
  onChooseShape:(shape:string)=>void
  constructor(parentNode: HTMLElement) {
    super(parentNode,'div', 'byShape')
    const shapes = [
      { shape: 'шар', src: './public/assets/svg/ball.svg' },
      { shape: 'колокольчик', src: './public/assets/svg/bell.svg' },
      { shape: 'шишка', src: './public/assets/svg/cone.svg' },
      { shape: 'снежинка', src: './public/assets/svg/snowflake.svg' },
      { shape: 'фигурка', src: './public/assets/svg/toy.svg' }
    ]
    const byShapeText = new Control(this.node, 'span', 'byFormText', 'По форме: ')
    const shapesWrapper = new Control(this.node, 'div', 'shapesWrapper')
    shapes.forEach(_shape => {
      const shape = new Control(shapesWrapper.node, 'div', 'shapeCell')
      shape.node.style.backgroundImage = `url(${_shape.src})`
      shape.node.onclick = () => {
        shape.node.classList.toggle('shapeCell-active')
        this.onChooseShape(_shape.shape)
      }
    })
  }
}