import Control from "../common/controll";
import './StartPage.css'
import { SnowFlake } from './snowFlake'
//import { generateSnowFlake } from "../Tree/canvasSection/snowFlakes";

export class StartPage extends Control {
  //private wrapper: Control<HTMLElement>;
  private canvas: Control<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private snowFlakes: HTMLImageElement;
  private snowArray: SnowFlake[];
  private backgoundImage: HTMLImageElement;
  private startPageContainer: Control<HTMLElement>;
  private startTitle: Control<HTMLElement>;
  private startButton: Control<HTMLElement>;
  public changePage: (page: string) => void
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'startPage');
    this.canvas = new Control(this.node, 'canvas', 'startPageCanvas')
    this.canvas.node.width = window.innerWidth
    this.canvas.node.height = window.innerHeight
    this.ctx = this.canvas.node.getContext('2d')
    this.backgoundImage = new Image()
    this.backgoundImage.src = './public/assets/bgStartPage.jpg'
    this.startPageContainer = new Control(this.node, 'div', 'startPageContainer')
    this.startTitle = new StartButton(this.startPageContainer.node, 'startTitle', 'Игра "Наряди елку"')
    this.startButton = new StartButton(this.startPageContainer.node, 'startButton', 'Начать игру')
    this.startButton.node.onclick = () => {
      this.changePage('tree')
      this.destroy()
    }
    this.snowArray = []
    for (let i = 0; i < 100; i++) {
      this.snowArray.push(new SnowFlake(this.canvas.node))
    }
    this.snowFlakes = new Image()
    this.snowFlakes.src = './public/assets/snowFlakes.png'
    setInterval(() => this.handleSnowFlakes(this.snowFlakes)
      , 1000 / 50)
  }

  handleSnowFlakes(flakes: HTMLImageElement) {
    this.clear()
    this.ctx.drawImage(this.backgoundImage, 0, 0, this.canvas.node.width, this.canvas.node.height)
    for (let i = 0; i < this.snowArray.length; i++) {
      this.snowArray[i].update()
      this.snowArray[i].draw(flakes)
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.node.width, this.canvas.node.height)
  }
}
class StartButton extends Control {
  constructor(parentNode: HTMLElement, className: string, text: string) {
    super(parentNode, 'div', className)
    const textEl = new Control(this.node, 'p', '', text)
  }
}