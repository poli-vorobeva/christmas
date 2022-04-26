import Control from '../../../common/controll'
import { IDiaposoneData } from '../../../interfaces';
import DiaposoneElement from './DiaposoeElement';
import { IDiaposoneProps } from './DiaposoneValue';
import { DiaposoneRange } from './DiaposonRange'

export default class DiaposoneYear extends Control{
  onDiaposoneSectionSpanValue:(data:IDiaposoneData)=>void

  constructor(parentNode:HTMLElement){
    super(parentNode,'div', 'decorationYear')
    const yearData:IDiaposoneProps = {
      values: [1940, 2020],
      titleText: 'Год покупки',
      containerClass: 'diaposoneYearContainer',
      startClass: 'decorationYear-startValue',
      limitClass: 'decorationYear-limitValue',
      valueName:'year',
    }
    const yearDiaposone = new DiaposoneElement(this.node,yearData)
   yearDiaposone.onDiaposoneSectionSpanValue=(data)=>{
     this.onDiaposoneSectionSpanValue(data)
   }    
  }
}