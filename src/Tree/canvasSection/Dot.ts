export class Dot {
  private x: number;
  private y: number;
  private size: number;
  private ctx: CanvasRenderingContext2D;
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
  public onChangeDot:(canvas:HTMLCanvasElement)=>void
  private color: string;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number,color:string) {
    this.x = x
    this.y = y
    this.ctx = ctx
    console.log(color)
this.color=color==='blue'?'0,0,255':color==='red'?'255,0,0':'0,255,0'
    console.log(this.color)
    this.size = Math.random() * 1 + 2
    this.speedY = Math.random() * 4
    this.speedX = Math.random() * 4 - 2
    this.maxSize = Math.random() * 2 + 3
    this.size = Math.random() * 1 + 1
    this.vs = Math.random() * 0.2 + 0.55
    this.angleX = Math.random()*6.2
    this.angleY = Math.random() * 6.2
    this.vax = Math.random() * 0.6 - 0.3
    this.vay = Math.random() * 0.6 - 0.3
    this.lightness = 10
   // this.ctx.fillStyle = `rgba(${Math.random()*100+150},${Math.random()*100+150},${Math.random()*100+150},0.65)`
this.ctx.fillStyle=`rgba(${this.color})`
    this.angle = 0
    this.ctx.shadowOffsetX = 0
    this.ctx.shadowOffsetY = 5
    this.ctx.shadowBlur = 5
    this.ctx.shadowColor = 'rgba(15,18,31,0.72)'

  }

  update(x: number, y: number) {

    this.x += this.speedX + Math.sin(this.angleX)
    this.y += this.speedY + Math.sin(this.angleY)
    this.size += this.vs
    this.angleX += this.vax
    this.angleY += this.vay
    this.angle += this.va
    //this.ctx.globalCompositeOperation = 'destination-in'

    if (this.size < this.maxSize+2) {
     // this.ctx.globalCompositeOperation = 'destination-in'
      this.ctx.save()
     // this.ctx.globalCompositeOperation = 'destination-in'
      this.ctx.translate(this.x, this.y)
      this.ctx.rotate(this.angle)
      this.ctx.fillRect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size)
      let double = this.size * 2
      this.ctx.lineWidth = 0.5
      this.ctx.strokeStyle = `rgba(255,0,${Math.random()*50},1)`
      //this.ctx.globalCompositeOperation = 'source-over'
     // this.ctx.strokeRect(0 - double / 2, 0 - double / 2, double, double)
      this.ctx.strokeRect(0 - this.size, 0 - this.size, this.size, this.size)
      let triple = this.size * 3
      this.ctx.lineWidth = 0.2
       this.ctx.strokeStyle = 'white'
    // this.ctx.strokeRect(0 - triple / 2, 0 - triple / 2, triple, triple)
      this.ctx.strokeRect(0 - this.size, 0 - this.size, this.size, this.size)
      requestAnimationFrame(this.update.bind(this))
      this.ctx.restore()
      // this.onChangeDot(this.ctx.canvas)
    }
  }
}