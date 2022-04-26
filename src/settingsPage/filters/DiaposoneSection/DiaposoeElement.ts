import Control from '../../../common/controll'
import { IDiaposoneProps } from './DiaposoneValue'
import { DiaposoneRange } from './DiaposonRange'
export default class DiaposoneElement extends Control {
  onDiaposoneSectionSpanValue:(data:{name:string,direction:string,value:string})=>void
  constructor(parentNode: HTMLElement, data: IDiaposoneProps) {
    super(parentNode)
    const diaposoneTitle = new Control(this.node, 'h6', '', data.titleText)
    const diaposoneContainer = new Control(this.node, 'div', data.containerClass)
    const start = new Control(diaposoneContainer.node, 'span',
      data.startClass, ''+data.values[0])
    const diaposoneRange = new DiaposoneRange(diaposoneContainer.node, data.values)
    const limit = new Control(diaposoneContainer.node, 'span',
      data.limitClass, ''+data.values[1])
      
      diaposoneRange.startSpanValue = (value) => {
        start.node.innerText = value
        this.onDiaposoneSectionSpanValue({
          name: data.valueName,
          direction: 'from',
          value
        })
      }
      diaposoneRange.finishSpanValue = (value) => {
        limit.node.innerText = value
        this.onDiaposoneSectionSpanValue({
          name: data.valueName,
          direction: 'to',
          value
        })
  
      }
  }
}