import Control from "../../../common/controll";
import './ValueSection.css'
import { ByColorFilter } from "./ByColorFilter"
import { ByShapeFilter } from "./ByShapeFilter"
import { BySizeFilter } from "./BySizeFilter"
import { Favorite } from './Favorite'
export class ValueSection extends Control {
  public onChooseColor: (color: string) => void
  public onChooseShape: (shape: string) => void
  public onChooseSize: (size: string) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'valueSection');
    const title = new Control(this.node, 'h5', 'valueSection-title', 'фильтры по значению')

    const byShape = new ByShapeFilter(this.node)
    byShape.onChooseShape = (shape) => this.onChooseShape(shape)

    const byColor = new ByColorFilter(this.node)
    byColor.onChooseColor = (color) => this.onChooseColor(color)

    const bySize = new BySizeFilter(this.node)
    bySize.onChooseSize = (size) => this.onChooseSize(size)

    const favorite = new Favorite(this.node)
  }
}