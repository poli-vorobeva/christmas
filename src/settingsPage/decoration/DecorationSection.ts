import Control from "../../common/controll";
import './DecorationSection.css'
import { IToyData } from "../../interfaces";
import { ToyItem } from "./ToyItem/ToyItem";
import { toyItemData } from "../../index";

export class DecorationSection extends Control {
  public addFavorite: (toyData: IToyData) => void
  constructor(parentNode: HTMLElement, toyData: toyItemData[]) {
    super(parentNode, 'div', 'decorationSection');
    this.drawSection(toyData)
  }

  public drawSection(toyData: IToyData[]) {
    console.log('toyData',toyData)
    this.node.innerHTML = ''
    toyData.forEach(d => {
      const toy = new ToyItem(this.node, d)
      toy.addFavorite = (toyData) => {
        this.addFavorite(toyData)
      }
    })
  }

}