import Control from "../../../common/controll"
export class ByColorFilter extends Control {
  onChooseColor: (color: string) => void
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'byColor')
    const colors = [
      { color: 'желтый', rgb: 'rgb(250,250,0)' },
      { color: 'белый', rgb: 'rgb(255,255,255)' },
      { color: 'красный', rgb: 'rgb(255,0,0)' },
      { color: 'синий', rgb: 'rgb(0,0,255)' },
      { color: 'зелёный', rgb: 'rgb(0,255,0)' }
    ]
    const byColorText = new Control(this.node, 'span', 'byColorText', 'По цвету: ')
    const colorCellsWrapper = new Control(this.node, 'div', 'colorCellsWrapper')
    colors.forEach(color => {
      const colorCell = new Control(colorCellsWrapper.node, 'div', 'colorCell')
      colorCell.node.style.background = color.rgb
      colorCell.node.onclick = () => {
        colorCell.node.classList.toggle("colorCell-active")
        this.onChooseColor(color.color)
      }
    })

  }
}