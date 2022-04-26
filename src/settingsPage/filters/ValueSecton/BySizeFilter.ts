import Control from "../../../common/controll"
export class BySizeFilter extends Control {
  onChooseSize: (size: string) => void
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'bySize')
    const sizes = ['малый', 'средний', 'большой']
    const bySizeText = new Control(this.node, 'span', 'bySizeText', 'По размеру: ')
    const sizesWrapper = new Control(this.node, 'div', 'sizesWrapper')
    sizes.forEach((_size, ind) => {
      const size = new Control(sizesWrapper.node, 'div', 'sizeCell')
      size.node.style.backgroundImage = 'url(./public/assets/svg/ball.svg)'
      size.node.style.transform = `scale(${ind === 1 ? 1.2 : ind === 2 ? 1.4 : 1})`
      size.node.onclick = () => {
        size.node.classList.toggle('shapeCell-active')
        this.onChooseSize(_size)
      }
    })
  }
}