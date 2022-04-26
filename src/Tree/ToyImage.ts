import Control from "../common/controll";
import {IToyOnTree} from "../interfaces";

export class ToyImage extends Control {
  public startX: number;
  public startY: number;
  private size: number;
  public index: number;
  private toyImage: HTMLImageElement;
  public id: number;

  constructor(parentNode: HTMLElement, toyData: IToyOnTree) {
    super(parentNode)
    this.startX = toyData.x,
      this.startY = toyData.y,
      this.size = toyData.size,
      this.index = toyData.num
    this.toyImage = new Image()
    this.id=+new Date()
    this.toyImage.src = `./public/assets/toys/${this.index}.png`
  }

  render(context: CanvasRenderingContext2D) {
    context.globalCompositeOperation = 'source-over'
    context.drawImage(this.toyImage, this.startX, this.startY,
      this.size, this.size);

  }
}