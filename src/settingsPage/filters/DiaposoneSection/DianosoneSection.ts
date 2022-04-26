import Control from "../../../common/controll";
import { DiaposoneRange } from "./DiaposonRange";
import { IDiaposoneData } from "../../../interfaces";
import DiaposoneValue from './DiaposoneValue'
import DiaposoneYear from './DiaposoneYear'

export class DiaposoneSection extends Control {
  private title: Control<HTMLElement>;
  public diaposoneSectionSpanValue: (data: IDiaposoneData) => void
 
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'diaposoneSection');

    this.title = new Control(this.node, 'h5', 'diaposoneSection-title',
      'фильтры по диапазону')
    const diaposoneValue = new DiaposoneValue(this.node)
    diaposoneValue.onDiaposoneSectionSpanValue = (data) => { 
      this.diaposoneSectionSpanValue(data)
    }
    const diaposoneYear = new DiaposoneYear(this.node)
    diaposoneYear.onDiaposoneSectionSpanValue = (data) => {
      this.diaposoneSectionSpanValue(data)
    }
  }
}