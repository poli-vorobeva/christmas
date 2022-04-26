import Control from '../../../common/controll'
export class Favorite extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div')
    const favorite = new Control(this.node, 'input')
    favorite.node.setAttribute('type', 'checkbox')
    favorite.node.id = 'favorite'
    const favoriteLabel = new Control(this.node, 'label')
    favoriteLabel.node.setAttribute('for', 'favorite')
  }
}