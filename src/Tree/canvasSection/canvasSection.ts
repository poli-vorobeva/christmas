import Control from "../../common/controll";
import { ICanvasImageObject, IToyData } from "../../interfaces";
import { ToyImage } from "../ToyImage";
import { MaskCanvas } from "./MaskCanvas";
import { CreateGarland } from "./createGirland";
import { canvasS, canvTree } from "../../garlandCanvas";


export class CanvasSection extends Control {
  private canvasSection: Control<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private canvasBackground: ICanvasImageObject;
  private canvasTree: ICanvasImageObject;
  toysOnTree: ToyImage[]
  private prevPosX: number;
  private prevPosY: number;
  private mouseDownHandlerBinded: () => void;
  private moveHandlerBinded: () => void;
  private parentNode: HTMLElement;
  private maskCanvas: MaskCanvas;
  private canvasWidth: number;
  private canvasHeight: number;
  private offsetTreeCanvasWidth: number;
  private offsetTreeCanvasHeight: number;
  private createGarland: CreateGarland;
  public garlandCoordinates: { y: number; x: number[] }[];
  private isTurnGirland: boolean;
  private coordsForGirland: { y: number; x: number[] }[];
  onDroppedToy:(toyIndex:string)=>void
  private treeCanvasWidth: number;
  private treeCanvasHeight: number;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.parentNode = parentNode
    this.toysOnTree = []
    this.isTurnGirland=false
    this.node.classList.add('canvasSection')
    this.canvasSection = new Control(this.node, 'canvas', 'canvas')
    this.canvasSection.node.width = this.canvasWidth = 350//this.canvasSection.node.getBoundingClientRect().width
    this.canvasSection.node.height = this.canvasHeight = 500 //this.canvasSection.node.getBoundingClientRect().height
    console.log("mainCanvas w",this.canvasSection.node.width,'h',this.canvasSection.node.height)
    this.canvasSection.node.onclick = (e) => {
      console.log(e.offsetX, e.offsetY)
    }
    this.prevPosX
    this.prevPosX
    this.treeCanvasWidth=this.canvasWidth*0.7
    this.treeCanvasHeight=this.canvasHeight*0.7
    this.offsetTreeCanvasWidth = this.canvasWidth * 0.3 / 2
    this.offsetTreeCanvasHeight = this.canvasHeight * 0.3 / 2
    this.mouseDownHandlerBinded = this.mouseDownHandler.bind(this)
    this.moveHandlerBinded = this.moveHandler.bind(this)
    this.setCanvasBackground('1')
    this.setCanvasTree('1')
    this.canvasSection.node.addEventListener('mousedown', this.mouseDownHandlerBinded)
    this.ctx = this.canvasSection.node.getContext('2d')
    this.canvasBackground = null
    this.canvasTree = null
    this.maskCanvas = null
    this.node.ondragover = (e) => {
      e.preventDefault()
    }
    //todo drawtoys by their sizes
    this.node.ondrop = (e) => {
      const { x, y } = this.getCursorPosition(e, this.canvasSection.node)
      console.log('$$',x,y)
      console.log(this.canvasTree)
      if (!this.isOverCanvas(x - this.canvasTree.startX, y - this.canvasTree.startY)) return
      else {
        console.log('overCanvas')
        if (this.maskCanvas.checkPixel(x - this.canvasTree.startX, y - this.canvasTree.startY)) {
          console.log("underTreeMask",e.dataTransfer.getData('el'))
          this.onDroppedToy(e.dataTransfer.getData('el'))
          console.log("TOYcoords",x - 25,y - 25)
          const toy = new ToyImage(this.node, {
            x: x - 25, y: y - 25,
            num: +e.dataTransfer.getData('el'), size: 50
          })
          toy.render(this.ctx)
         console.log('drap')
          this.toysOnTree.push(toy)
        }
      }
    }
  }

  mouseDownHandler(e: MouseEvent) {
    this.prevPosX = this.getCursorPosition(e, this.node).x
    this.prevPosY = this.getCursorPosition(e, this.node).y
    console.log("TOYonDown",this.toysOnTree)
    this.canvasSection.node.addEventListener('mousemove', this.moveHandlerBinded)
  }

  moveHandler(e: MouseEvent) {
    const currentToy: ToyImage = this.getCurrentToy(e)
    const { x, y } = this.getCursorPosition(e, this.node)
    currentToy && (currentToy.startX = currentToy.startX + x - this.prevPosX);
    currentToy && (currentToy.startY = currentToy.startY + y - this.prevPosY);
    this.prevPosX = x
    this.prevPosY = y
    this.drawScene()
    this.canvasSection.node.onmouseup = (e) => {
      const { x, y } = this.getCursorPosition(e, this.canvasSection.node)
      console.log('coords----------',x,y)
      if (this.isOverCanvas(x - 50, y - 50)) {
        console.log('overCanvas')
        const canvasX = x - this.canvasTree.startX
        const canvasY = y - this.canvasTree.startY
       if (!this.maskCanvas.checkPixel(canvasX, canvasY)) {
          console.log(e)
          console.log(this.getCurrentToy(e))
          this.deleteToy(this.getCurrentToy(e))
          //TODO даляются все одинаковые элементы
          //попадают элнменты в диапозоне
        }
      }
      this.canvasSection.node.removeEventListener('mousemove', this.moveHandlerBinded)
    }
  }

  isOverCanvas(x: number, y: number) {
    // console.log(this.canvasTree.startX,this.canvasTree.startX + this.canvasTree.width,'^',this.canvasTree.startY,this.canvasTree.startY + this.canvasTree.height)
    // console.log(x,y)
    return (x >= this.canvasTree.startX
      && x <= this.canvasTree.startX + this.canvasTree.width
      && y >= this.canvasTree.startY
      && y <= this.canvasTree.startY + this.canvasTree.height)
  }

  smallFoo() {

  //  const garCanvas = this.createGarland.newCanvas
  //  this.ctx.clearRect(0, 0, garCanvas.width, garCanvas.height)

    if(this.isTurnGirland){

      const garCanvas = this.createGarland.newCanvas
      this.ctx.clearRect(0, 0, garCanvas.width, garCanvas.height)
      this.drawBackground()
      this.drawTree()
      this.ctx.drawImage(garCanvas, 0, 0)
    }else{
      this.drawBackground()
      this.drawTree()
    }
   // this.ctx.drawImage(garCanvas, 0, 0)

    requestAnimationFrame(() => {
      this.drawBackground()
      this.drawTree()
      this.smallFoo()
      this.toysOnTree.forEach(toy => {
        toy.render(this.ctx)
      })
    })
  }
  drawScene() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.smallFoo()
  }

  deleteToy(delToy: ToyImage) {
    console.log(delToy,'@@')
    this.toysOnTree = this.toysOnTree.filter(toy => toy.id !== delToy.id)
    this.drawScene()
  }

  getCurrentToy(e: MouseEvent): ToyImage {
    const { x, y } = this.getCursorPosition(e, this.node)
    const toy = this.toysOnTree.filter(toy => {
      if (x > toy.startX && x < toy.startX + 50
        && y > toy.startY && y < toy.startY + 50) {
        return true
      }
      else {
        return false
      }
    })
    return toy[toy.length - 1]
  }

  public getCursorPosition(event: MouseEvent, node: HTMLElement) {
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x, y }
  }

  public setCanvasBackground(bgImageIndex: string) {
    this.createImage(`./public/assets/bg/${bgImageIndex}.jpg`,
      this.canvasWidth, this.canvasHeight, this.bgOnload.bind(this))
  };

  public setCanvasTree(treeImageIndex: string) {
    console.log('tree---')
    this.createImage(`./public/assets/tree/${treeImageIndex}.png`,
      this.treeCanvasWidth, this.treeCanvasHeight,
        this.treeOnload.bind(this))
  }
  createImage(url: string, width: number, height: number, callback: (img: HTMLImageElement) => void) {
    const image = new Image()
    image.src = url
    image.width = width
    image.height = height
    console.log('image',width,height)
    image.onload = () => {
      callback(image)
    }
  }
  bgOnload(canvasImage: HTMLImageElement) {
    this.canvasBackground = {
      image: canvasImage,
      startX: 0,
      startY: 0,
      width: this.canvasWidth,
      height: this.canvasHeight,
    }
  }
  treeOnload(treeImage: HTMLImageElement) {
    // this.maskCanvas = new MaskCanvas(this.node, treeImage,
    //     this.canvasWidth * 0.7, this.canvasHeight * 0.7)
    console.log('maskCanvas---',this.treeCanvasWidth,this.treeCanvasHeight)
     this.maskCanvas = new MaskCanvas(this.node, treeImage,
         this.treeCanvasWidth, this.treeCanvasHeight)
    const arr = this.maskCanvas.getGarlandCoords()
    const newCoords = arr.map((el) => {
      el.y = el.y + Math.floor(this.offsetTreeCanvasHeight)
      el.x[0] = el.x[0] + Math.floor(this.offsetTreeCanvasWidth)
      el.x[1] = el.x[1] + Math.floor(this.offsetTreeCanvasWidth)
      return el
    })
    this.coordsForGirland = newCoords
    this.canvasTree = {
      startX: this.offsetTreeCanvasWidth, startY: this.offsetTreeCanvasHeight, image: treeImage,
      width: this.treeCanvasWidth, height: this.treeCanvasHeight
    }
    this.drawScene()
  }
  drawBackground() {
    this.canvasBackground.image
      && this.ctx.drawImage(this.canvasBackground.image, 0, 0,
        this.canvasBackground.width, this.canvasBackground.height)
  }

  drawTree() {
    this.ctx.globalCompositeOperation = 'source-over'
    this.canvasTree && this.ctx.drawImage(this.canvasTree.image, this.canvasTree.startX, this.canvasTree.startY,
      this.canvasTree.width, this.canvasTree.height)
  }

  turnOnGirland(color: string) {
    this.isTurnGirland=true
    this.createGarland = new CreateGarland(this.canvasSection.node.width,
        this.canvasSection.node.height,color)
    this.createGarland.setCoords(this.coordsForGirland)
  }

  offGirland() {
    this.createGarland=null
    this.isTurnGirland=false
  }
}

