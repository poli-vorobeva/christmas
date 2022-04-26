import Control from "../../../common/controll";

export class OptionElement extends Control{
  private optionElement: Control<HTMLOptionElement>;
  constructor(parentNode:HTMLElement,title:string,value:string) {
    super(parentNode);
    this.optionElement = new Control(parentNode, 'option','', title);
    this.optionElement.node.value = value
  }
}