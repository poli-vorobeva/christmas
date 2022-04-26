import './FiltersContainer.css'
import Control from "../../common/controll";
import { ValueSection } from "./ValueSecton/ValueSection";
import { DiaposoneSection } from "./DiaposoneSection/DianosoneSection";
import { SortSection } from "./SortSection/SortSection";
import { IDiaposoneData } from "../../interfaces";

export class FilterContainer extends Control {
  public onChooseColor: (color: string) => void
  public onChooseShape: (shape: string) => void;
  public onChooseSize: (size: string) => void
  public setDiaposoneData: (data: IDiaposoneData) => void
  public setSortOrder: (order: string) => void

  constructor(parentNode: HTMLElement) {
    super(parentNode,'div', 'filtersContainer');
    const valueSection = new ValueSection(this.node)
    valueSection.onChooseColor = (color) => {
      this.onChooseColor(color)
    }
    valueSection.onChooseShape = (shape) => {
      this.onChooseShape(shape)
    }
    valueSection.onChooseSize = (size: string) => {
      this.onChooseSize(size)
    }
    const byDaiposoneSection = new DiaposoneSection(this.node)
    byDaiposoneSection.diaposoneSectionSpanValue = (data) => {
      this.setDiaposoneData(data)
    }
    const bySortSection = new SortSection(this.node)
    bySortSection.sortOrder = (order) => {
      this.setSortOrder(order)
    }
  }
}