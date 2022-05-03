import Control from "../../common/controll";
import { ICanvasImageObject, IToyData } from "../../interfaces";
import { ToyImage } from "../ToyImage";
import { MaskCanvas } from "./MaskCanvas";
import { CreateGarland } from "./createGirland";
import { canvasS, canvTree } from "../../garlandCanvas";
import {TreeOnCanvas} from "./TreeOnCanvas";


export class CanvasSection extends Control {
  private canvasSection: Control<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private canvasBackground: ICanvasImageObject;
  private prevPosX: number;
  private prevPosY: number;
  private mouseDownHandlerBinded: () => void;
  private moveHandlerBinded: () => void;
  private parentNode: HTMLElement;
  private canvasWidth: number;
  private canvasHeight: number;
  private createGarland: CreateGarland;
  public garlandCoordinates: { y: number; x: number[] }[];
  private isTurnGirland: boolean;
  private coordsForGirland: { y: number; x: number[] }[];
   onDroppedToy:(toyIndex:string)=>void
  private treeOnCanvas: TreeOnCanvas;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.parentNode = parentNode

    this.isTurnGirland=false
    this.node.classList.add('canvasSection')
    this.canvasSection = new Control(this.node, 'canvas', 'canvas')
    this.canvasSection.node.width = this.canvasWidth = 350//this.canvasSection.node.getBoundingClientRect().width
    this.canvasSection.node.height = this.canvasHeight = 500 //this.canvasSection.node.getBoundingClientRect().height
    this.canvasSection.node.onclick = (e) => {
   //   console.log(e.offsetX, e.offsetY)
    }
    this.prevPosX
    this.prevPosX
    //console.log(this.node,'##')
    this.treeOnCanvas=new TreeOnCanvas(this.node,this.canvasWidth,this.canvasHeight)
    this.treeOnCanvas.onDroppedToy=(toyIndex)=>{
      this.onDroppedToy(toyIndex)
    }
    this.mouseDownHandlerBinded = this.mouseDownHandler.bind(this)
    this.moveHandlerBinded = this.moveHandler.bind(this)
    this.setCanvasBackground('1')
    this.canvasSection.node.addEventListener('mousedown', this.mouseDownHandlerBinded)
    this.ctx = this.canvasSection.node.getContext('2d')
     this.canvasBackground = null
    this.node.ondragover = (e) => {
      e.preventDefault()
    }
    //todo drawtoys by their sizes
    this.node.ondrop = (e) => {
      const { x, y } = this.getCursorPosition(e, this.canvasSection.node)
      const eventData=e.dataTransfer.getData('el')
      this.treeOnCanvas.dropOverCanvas(x,y,eventData,this.node,this.ctx)
      console.log(this.node,'XY---',x,y)
    }
  //this.drawScene()
  }

  mouseDownHandler(e: MouseEvent) {
    this.prevPosX = this.getCursorPosition(e, this.node).x
    this.prevPosY = this.getCursorPosition(e, this.node).y
    this.canvasSection.node.addEventListener('mousemove', this.moveHandlerBinded)
  }

  moveHandler(e: MouseEvent) {
   const { x, y } = this.getCursorPosition(e, this.canvasSection.node)
    const currentToy: ToyImage = this.getCurrentToy(x,y)
    currentToy && (currentToy.startX = x-25);
    currentToy && (currentToy.startY = y-25);

    this.prevPosX = x
    this.prevPosY = y
    this.drawScene()
    this.canvasSection.node.onmouseup = (e) => {
      this.treeOnCanvas.mouseUpCanvas(x,y,currentToy)
         //TODO даляются все одинаковые элементы
           //попадают элнменты в диапозоне
      this.canvasSection.node.removeEventListener('mousemove', this.moveHandlerBinded)
    }
  }

  smallFoo() {
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
      this.treeOnCanvas.redrawToysOnTree(this.ctx)
    })
  }
  drawScene() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.smallFoo()
  }

  deleteToy(delToy: ToyImage) {
    this.treeOnCanvas.deleteToyFromTree(delToy)
    // console.log(delToy,'@@')
    // this.toysOnTree = this.toysOnTree.filter(toy => toy.id !== delToy.id)
    this.drawScene()
  }

  getCurrentToy(x:number,y:number): ToyImage {
   // const { x, y } = this.getCursorPosition(e, this.node)
    const current=this.treeOnCanvas.getCurrentToy(x,y)
    return current[current.length-1]
  }

  public getCursorPosition(event: MouseEvent, node: HTMLElement) {
//    console.log()
    const rect = node.getBoundingClientRect()
  //  console.log(rect)
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x, y }
  }

  public setCanvasBackground(bgImageIndex: string) {
    this.createImage(`./public/assets/bg/${bgImageIndex}.jpg`,
      this.canvasWidth, this.canvasHeight,
        this.bgOnload.bind(this))
  };

  public setCanvasTree(treeImageIndex: string) {
    this.treeOnCanvas.setCanvasTree(treeImageIndex)
  }
  createImage(url: string, width: number, height: number, callback: (img: HTMLImageElement) => void) {
    const image = new Image()
    image.src = url
    image.width = width
    image.height = height
  //  console.log('image',width,height)
    image.onload = () => {
   //   console.log(image)
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
   // console.log(this.canvasBackground)
    this.drawScene()
  }
  // treeOnload(treeImage: HTMLImageElement) {
  //   console.log(treeImage,'$$')
  //   this.treeOnCanvas.treeOnLoad(treeImage)
  //   this.drawScene()
  // }
  drawBackground() {
    //console.log('drawBG')
    this.canvasBackground.image
      && this.ctx.drawImage(this.canvasBackground.image, 0, 0,
        this.canvasBackground.width, this.canvasBackground.height)
  }

  drawTree() {
   // console.log('drawTree')
    this.ctx.globalCompositeOperation = 'source-over'
    this.treeOnCanvas.drawTree(this.ctx)
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

