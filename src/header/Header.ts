import Control from "../common/controll";
import './Header.css'

export class Header extends Control{
 private settingsButton: Control<HTMLButtonElement>;
  private treeButton: Control<HTMLButtonElement>;
  public changePage:(pageName:string)=>void

  constructor(parentNode:HTMLElement) {
    super(parentNode,'header','header');
    this.settingsButton=new Control(this.node,'button','headerNav','Настройки')
    this.settingsButton.node.onclick=()=>{
      this.toggleDisable(this.settingsButton.node,this.treeButton.node)    
      this.changePage('settings')
    }
    this.treeButton=new Control(this.node,'button','headerNav','Елка')
    this.treeButton.node.onclick=()=>{
      this.toggleDisable(this.treeButton.node,this.settingsButton.node)
      this.changePage('tree')
    }
  }
  toggleDisable(currentButton:HTMLButtonElement,anotherButton:HTMLButtonElement){
    currentButton.setAttribute('disabled','true')
    if(anotherButton.getAttribute('disabled')==='true'){
      anotherButton.removeAttribute('disabled')
    }
  }
}