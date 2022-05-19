import {ToyImage} from "../ToyImage";
import {MaskCanvas} from "./MaskCanvas";
import {ICanvasImageObject} from "../../interfaces";

export class TreeOnCanvas{
    toysOnTree: ToyImage[]
    onChangeToysCount:(index:string,action:string)=>void
    private offsetTreeCanvasWidth: number;
    private offsetTreeCanvasHeight: number;
    private treeCanvasWidth: number;
    private treeCanvasHeight: number;
    private canvasTree: ICanvasImageObject;
    private maskCanvas: MaskCanvas;
    onGetGarlandCoords:(coords:{ y: number; x: number[] }[])=>void
    onDroppedToy:(toyIndex:string)=>void
    //private coordsForGirland: { y: number; x: number[] }[];
    private parentEl: HTMLElement;
    constructor(parentEl:HTMLElement,parentWidth:number,parentHeight:number) {
        this.toysOnTree = []
        this.parentEl=parentEl
        console.log(this.parentEl)
        this.treeCanvasWidth=parentWidth*0.7
        this.treeCanvasHeight=parentHeight*0.7
        this.offsetTreeCanvasWidth = parentWidth * 0.3 / 2
        this.offsetTreeCanvasHeight = parentHeight * 0.3 / 2
        this.canvasTree = null
        this.maskCanvas = null
        this.setCanvasTree('1')
    }
    redrawToysOnTree(ctx:CanvasRenderingContext2D){
        this.toysOnTree.forEach(toy => {
            toy.render(ctx)
        })
    }
    getCurrentToy(x:number,y:number){
        console.log(this.toysOnTree)
        return this.toysOnTree.filter(toy => {
            if (x > toy.startX && x < toy.startX + 50
                && y > toy.startY && y < toy.startY + 50) {
                 return true
            }
            else {
                return false
            }
        })
    }
    deleteToyFromTree(delToy:ToyImage){
        this.toysOnTree = this.toysOnTree.filter(toy => toy.id !== delToy.id)
          this.onChangeToysCount(''+delToy.index,'inc')
    }
    dropOverCanvas(x:number,y:number,eventData:string,
                   parent:HTMLElement,ctx:CanvasRenderingContext2D){
        if (!this.isOverCanvas(x - this.canvasTree.startX, y - this.canvasTree.startY)) return
        else {
            if (this.maskCanvas.checkPixel(x - this.canvasTree.startX, y - this.canvasTree.startY)) {
                //"underTreeMask",eventData)
                this.onDroppedToy(eventData)
               // console.log("TOYcoords",x - 25,y - 25)
                const toy = new ToyImage(parent, {
                    x: x - 25, y: y - 25,
                    num: +eventData, size: 50
                })
                toy.render(ctx)
              //  console.log('drap')
                this.toysOnTree.push(toy)
            }
        }
    }
    treeOnLoad(treeImage:HTMLImageElement){
        // this.maskCanvas = new MaskCanvas(this.node, treeImage,
        //     this.canvasWidth * 0.7, this.canvasHeight * 0.7)
       // console.log('maskCanvas---',this.treeCanvasWidth,this.treeCanvasHeight)
        this.maskCanvas = new MaskCanvas(this.parentEl, treeImage,
            this.treeCanvasWidth, this.treeCanvasHeight)
        const arr = this.maskCanvas.getGarlandCoords()
        const newCoords = arr.map((el) => {
            el.y = el.y + Math.floor(this.offsetTreeCanvasHeight)
            el.x[0] = el.x[0] + Math.floor(this.offsetTreeCanvasWidth)
            el.x[1] = el.x[1] + Math.floor(this.offsetTreeCanvasWidth)
            return el
        })
        //todo draw by toys sizes
        //todo count of toys
        this.onGetGarlandCoords(newCoords)
       // this.coordsForGirland = newCoords
        this.canvasTree = {
            startX: this.offsetTreeCanvasWidth, startY: this.offsetTreeCanvasHeight, image: treeImage,
            width: this.treeCanvasWidth, height: this.treeCanvasHeight
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
    setCanvasTree(treeImageIndex:string){
      //  console.log("SetTree",this)
        this.createImage(`./public/assets/tree/${treeImageIndex}.png`,
            this.treeCanvasWidth, this.treeCanvasHeight,
            this.treeOnLoad.bind(this))
    }
    createImage(url: string, width: number, height: number,
                callback: (img: HTMLImageElement) => void) {
        const image = new Image()
        image.src = url
        image.width = width
        image.height = height
        // console.log('image',width,height)
        image.onload = () => {
        //    console.log(image,'4$$')
            callback(image)
        }
    }
    mouseUpCanvas(x:number,y:number,toy:ToyImage){
        if (this.isOverCanvas(x - 50, y - 50)) {
       //     console.log('overCanvas')
            const canvasX = x - this.canvasTree.startX
            const canvasY = y - this.canvasTree.startY
            if (!this.maskCanvas.checkPixel(canvasX, canvasY)) {
         //       console.log('NotOverTree')
               //this.deleteToy(toy)
               this.deleteToyFromTree(toy)
                //TODO даляются все одинаковые элементы
                //попадают элнменты в диапозоне
            }else{
           //     console.log('overTree')
            }
        }else{
          //  console.log('NOTOver----')
        }
    }
    drawTree(ctx:CanvasRenderingContext2D){
        this.canvasTree && ctx.drawImage(this.canvasTree.image, this.canvasTree.startX, this.canvasTree.startY,
            this.canvasTree.width, this.canvasTree.height)
    }
}