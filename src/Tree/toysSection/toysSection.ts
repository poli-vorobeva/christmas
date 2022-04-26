import Control from "../../common/controll";
import {FiltersModel} from "../../settingsPage/filters/FiltersModel";

export class ToysSection extends Control {
  private toysSection: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, filtersModel: FiltersModel) {
    super(parentNode);
    this.node.classList.add('toysSection')
//    filtersModel.getFavorites().forEach(toy => {
 //     const toyItem = new Control(this.node, 'div', 'toySectionItem')
   //  toyItem.node.style.backgroundImage = `url(./public/assets/toys/${toy.num}.png)`
 //     const image=new Image()
 //     image.src=`./public/assets/toys/${toy.num}.png`;
 //     image.style.width='60%'
 //     image.style.height='60%'
 //     image.draggable=true
 //     image.ondragstart=(e)=>{
 //       e.dataTransfer.setData('el',toy.num)
       // console.log("JUYJUJUYJ",e.dataTransfer)
 //     }
  //    toyItem.node.appendChild(image)
  //    const toyCount = new Control(toyItem.node, 'span', 'toyCount', toy.count)
  //  })
  }
}