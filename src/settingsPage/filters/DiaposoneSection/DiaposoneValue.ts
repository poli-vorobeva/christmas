import Control from '../../../common/controll'
import { IDiaposoneData } from '../../../interfaces'
import DiaposoneElement from "./DiaposoeElement"
export interface IDiaposoneProps { 
  values: number[]; 
  titleText: string; 
  containerClass: string; 
  startClass: string; 
  limitClass: string; 
  valueName:string
}
export default class DiaposoneValue extends Control {
  onDiaposoneSectionSpanValue: (data: IDiaposoneData) => void
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'decorationCount')
    const countData:IDiaposoneProps = {
      values: [1, 12],
      titleText: 'количество экземпляров',
      containerClass: 'diaposoneCountContainer',
      startClass: 'decorationCount-startValue',
      limitClass: 'decorationCount-limitValue',
      valueName:'count'
    }
    const countDiaposone = new DiaposoneElement(this.node,countData)
   countDiaposone.onDiaposoneSectionSpanValue=(data)=>{
     this.onDiaposoneSectionSpanValue(data)
   }
  }
}