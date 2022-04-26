export const canvTree=document.createElement('canvas')
const canvTreeCtx=canvTree.getContext('2d')
canvTree.width=window.innerWidth
canvTree.height=window.innerHeight/2



export const canvasS=document.createElement('canvas')
canvasS.width=window.innerWidth
canvasS.height=window.innerHeight/2
const ctx = canvasS.getContext('2d')
ctx.globalCompositeOperation='destination-over'


class Dot {
  private x: number;
  private y: number;
  private size: number;
  private speedY: number;
  private speedX: number;
  private maxSize: number;
  private angle: number;
  private vs: number;
  private va: number;
  private angleX: number;
  private angleY: number;
  private vax: number;
  private vay: number;
  private lightness: number;

  constructor(x:number,y:number) {
    this.x=x
    this.y=y
    this.size = Math.random() * 1 + 2
    this.speedY=Math.random()*4-2
    this.speedX=Math.random()*4-2
    this.maxSize=Math.random()*4+4
    this.size=Math.random()*1+1
    this.vs=Math.random()*0.2+0.2
    this.angleX=Math.random()*6.2
    this.angleY=Math.random()*6.2
    this.vax = Math.random()*0.6-0.3
    this.vay = Math.random()*0.6-0.3
    //this.lightness =10
    ctx.fillStyle='rgba(236,236,6,1)'


    this.angle=0

    ctx.shadowOffsetX=0
    ctx.shadowOffsetY=10
    ctx.shadowBlur=10
    ctx.shadowColor='rgba(26,33,62,0.29)'
  }

  update() {
    this.x += this.speedX+Math.sin(this.angleX)
    this.y += this.speedY+Math.sin(this.angleY)
    this.size+=this.vs
    this.angleX+=this.vax
    this.angleY+=this.vay
    this.angle+=this.va
    //  this.ctx.globalCompositeOperation = 'overlay'
    //this.ctx.globalCompositeOperation = 'destination-in'

    //if(this.lightness<70) this.lightness+=0.05
    if(this.size<this.maxSize){
      ctx.save()
      ctx.translate(this.x,this.y)
      ctx.rotate(this.angle)
      ctx.fillRect(0-this.size/2,0-this.size/2,this.size,this.size)
      let double=this.size*2
      // this.ctx.globalCompositeOperation='source-in'
      ctx.lineWidth=0.5
      ctx.strokeStyle='rgba(144,182,6,0.4)'

      ctx.strokeRect(0-double/2,0-double/2,double,double)
      let triple=this.size*3
      ctx.lineWidth=0.2
      ctx.strokeStyle='white'
      ctx.strokeRect(0-triple/2,0-triple/2,triple,triple)
     // ctx.globalCompositeOperation ='source-over'
      // this.ctx.beginPath()
      // this.ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
      // this.ctx.fillStyle = 'hsl(140,100%,'+this.lightness+'%)'
      // this.ctx.fill()
      // this.ctx.stroke()
      requestAnimationFrame(this.update.bind(this))
      ctx.restore()
    }
  }
}

window.addEventListener('mousemove',(e)=>{
  for(let i=0;i<5;i++){
    const d=new Dot(e.x,e.y)
    d.update()
  }
 // canvTreeCtx.drawImage(canvasS,0,0)
})
function smallFoo(){
 // console.log("HH")
  canvTreeCtx.clearRect(0,0,canvTree.width,canvTree.height)
  canvTreeCtx.drawImage(canvasS,0,0)
  requestAnimationFrame(()=>{
    smallFoo()
  })
}
smallFoo()
