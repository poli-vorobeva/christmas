import {Dot} from "./Dot";

export class CreateGarland {
  public garlandCoordinates: { y: number, x: number[] }[]
  public newCtx: CanvasRenderingContext2D;
  public newCanvas: HTMLCanvasElement;
  private currentStep: number;
  private x: number;
  private y: number;
  private c: number;

  constructor(width:number,height:number) {
    this.newCanvas = document.createElement('canvas')
    this.newCanvas.width = width
    this.newCanvas.height = height
    console.log('top',this.newCanvas.width,this.newCanvas.height)
    this.newCtx = this.newCanvas.getContext('2d')
    this.newCtx.globalCompositeOperation='destination-over'
  //  this.newCtx.fillStyle = 'rgba(217,217,38,0.97)'
 //  this.newCtx.fillRect(0, 0, this.newCanvas.width, this.newCanvas.height)
  }
  draw(){
    for (let i = 1; i <this.garlandCoordinates.length-1; i++) {
     if (!this.garlandCoordinates[i + 1]) return;
      let startX = this.garlandCoordinates[i].x[0]
      let startY = this.garlandCoordinates[i].y
     // new Dot(this.newCtx,startX,startY).update(startX,startY)
      const xDistance = this.garlandCoordinates[i + 1].x[1] - this.garlandCoordinates[i].x[0]
      const steps = Math.ceil(xDistance / 50)
      const xStep = xDistance / steps
      let currentStep = 1

      const updateCoords=()=>{
        if(currentStep<steps/2){
          startX+=xStep
          startY+=10
        }else if(currentStep>=steps/2 && currentStep<steps/2+4 ){
          startX+=xStep
        }else{
          startX+=xStep
          startY-=8
        }

      for(let i=0;i<7;i++){
        new Dot(this.newCtx,startX,startY).update(startX,startY)
      }
        currentStep++
      }
      const intervalFunction = () => {
         updateCoords();
        if (currentStep == steps) {
          clearInterval(inter)
        }
      }

      const inter = setInterval(intervalFunction, 50)
    }
  }
  setCoords(data: { y: number; x: number[] }[]) {
    this.garlandCoordinates = data
    this.draw()
  }
}