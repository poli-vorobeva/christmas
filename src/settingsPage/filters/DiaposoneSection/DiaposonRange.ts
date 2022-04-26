import Control from "../../../common/controll";
import './DiaposoneRange.css'

export class DiaposoneRange extends Control {
  private inputWidth: number;
  private stepPercent: number;
  private debounce: boolean;
  public finishSpanValue: (value: string) => void
  public startSpanValue: (value: string) => void
  secondThumb: Control<HTMLElement>;
  secondInputWrapper: Control<HTMLElement>;
  firstInputWrapper: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, values: number[]) {
    super(parentNode, 'div', 'inputWrapper')
    this.inputWidth = 150
    this.stepPercent = 100 / (values[1] - values[0])
    //this.inputWrapper = new Control(parentNode, )
    this.node.style.width = this.inputWidth + "px"
    const underLayer = new Control(this.node, 'div', 'underLayer')
    const insideUnderLayer = new Control(this.node, 'div', 'insideDiv')
    this.secondInputWrapper = new Control(this.node, 'div', 'secondInputWrapper')
    const inputSecond: Control<HTMLInputElement> = new Control(this.secondInputWrapper.node, 'input', 'secondInput')

    this.rangeAttributes(inputSecond.node, values[0], values[1], values[1])

    this.firstInputWrapper = new Control(this.node, 'div', 'firstInputWrapper')
    const inputFirst: Control<HTMLInputElement> = new Control(this.firstInputWrapper.node, 'input', 'firstInput')
    this.rangeAttributes(inputFirst.node, values[0], values[1], values[0])

    this.debounce = false
    this.secondThumb = new Control(this.node, 'div', 'secondThrumd')
    this.secondThumb.node.style.left = this.inputWidth - 20 + 'px'

    this.secondThumb.node.onmouseover = () => {
      // if (!this.debounce) {
      this.secondThumbToggle(true)
      this.debounce = true
      // }
    }
    this.secondThumb.node.onmouseleave = () => {
      this.secondThumbToggle(false)
      this.debounce = true
    }
    this.secondInputWrapper.node.oninput = (e) => {
      this.finishSpanValue((e.target as HTMLInputElement).value);
      const rightMove = (values[1] - +(e.target as HTMLInputElement).value) * this.stepPercent
      this.secondThumb.node.style.left = (this.inputWidth - 20) - (this.inputWidth - 20) * rightMove / 100 + "px"
      insideUnderLayer.node.style.right = this.inputWidth * rightMove / 100 + "px"
    }
    this.secondInputWrapper.node.onchange = (e) => {
      setTimeout(() => {
        this.debounce = false
      }, 300)
      this.secondThumbToggle(false)
      // this.secondThumb.node.style.left = (this.inputWidth - 20) * (+(e.target as HTMLInputElement).value / 100) + "px";
      // (this.secondThumb.node as HTMLInputElement).value = (e.target as HTMLInputElement).value
      inputSecond.node.value = (e.target as HTMLInputElement).value
    }
    this.firstInputWrapper.node.oninput = (e) => {
      this.startSpanValue((e.target as HTMLInputElement).value);
      const leftMove = (this.inputWidth - 20) * ((+(e.target as HTMLInputElement).value - values[0]) * this.stepPercent) / 100 + 'px';
      insideUnderLayer.node.style.left = leftMove
    }
  }
  secondThumbToggle(toggle: boolean) {
    this.secondThumb.node.style.display = toggle ? 'none' : 'block'
    this.secondInputWrapper.node.style.zIndex = toggle ? '5' : '1'
    this.firstInputWrapper.node.style.zIndex = toggle ? '1' : '5'
  }
  rangeAttributes(el: HTMLInputElement, val1: number, val2: number, val3: number) {
    el.type = 'range'
    el.min = '' + val1
    el.max = '' + val2
    el.value = '' + val3
  }
}