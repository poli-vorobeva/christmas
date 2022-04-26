import Control from "../../../common/controll";
import {IToyData} from "../../../interfaces";
import './ToyItem.css'
export class ToyItem extends Control {
  public addFavorite:(toyData:IToyData)=>void
  constructor(parentNode: HTMLElement, toyData: IToyData) {
    super(parentNode,'div', 'toyCell');
    const title = new Control(this.node, 'h5', '', toyData.name)
    const dataContainer = new Control(this.node, 'div', 'toyCellData')
    const img: Control<HTMLImageElement> = new Control(dataContainer.node, 'img')
    img.node.src = `./public/assets/toys/${+toyData.num + ''}.png`
    const dataContent = new Control(dataContainer.node, 'div', 'toyCellContent')
    const count = new Control(dataContent.node, 'span', '', `Количество: ${toyData.count}`)
    const year = new Control(dataContent.node, 'span', '', `Год: ${toyData.year}`)
    const shape = new Control(dataContent.node, 'span', '', `Форма: ${toyData.shape}`)
    const color = new Control(dataContent.node, 'span', '', `Цвет: ${toyData.color}`)
    const size = new Control(dataContent.node, 'span', '', `Цвет: ${toyData.size}`)
    const favorite = new Control(dataContent.node, 'span', '', `Любимая: ${!toyData.favorite ? 'нет' : 'да'}`)
    const selectFavorite = new Control(dataContent.node, 'button', '', 'Добавить к любимым')
    selectFavorite.node.onclick=()=>{
      this.addFavorite(toyData)
    }
  }
}