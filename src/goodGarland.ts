export class CanvasMain {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lastFrameId: number;

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    const dotsArray: { update: (deltaTime?: number) => void }[] = []
    this.lastFrameId = null
    let lastTime: number = null
    const render = (deltaTime?: number) => {
      this.lastFrameId = requestAnimationFrame((time) => {
        let deltaTime = 0
        if (lastTime) {
          deltaTime = -lastTime + time
        }
        lastTime = time
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        dotsArray.forEach(dot => dot.update(deltaTime))
        render(deltaTime)
      })
    }
    render()
    this.canvas.onmousemove = (e) => {
      const dot = new Dot(this.ctx, e.offsetX, e.offsetY)
      dot.onFinish=()=>{
      //  console.log('finish')
      }
      dotsArray.push(dot)
      if (dotsArray.length > 10) {
        dotsArray.shift()
      }
    }
  }

  destroy() {
    cancelAnimationFrame(this.lastFrameId)
  }
}

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
  private ctx: CanvasRenderingContext2D;
  private time: number;
public onFinish:()=>void

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.time = 0
    this.size = Math.random() * 1 + 2
    this.speedY = Math.random() * 4 - 2
    this.speedX = Math.random() * 4 - 2
    this.maxSize = Math.random() * 4 + 4
    this.size = Math.random() * 1 + 1
    this.vs = Math.random() * 0.2 + 0.2
    this.angleX = Math.random() * 6.2
    this.angleY = Math.random() * 6.2
    this.vax = Math.random() * 0.6 - 0.3
    this.vay = Math.random() * 0.6 - 0.3
    ctx.fillStyle = 'rgba(236,236,6,1)'
    this.angle = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 10
    ctx.shadowColor = 'rgba(26,33,62,0.29)'

  }

  render(time: number) {
    const ctx = this.ctx
    const angleX = this.vax * time + this.angleX
    const angleY = this.vay * time + this.angleY
    const x = (this.speedX + Math.sin(angleX)) * time + this.x
    const y = (this.speedY + Math.sin(angleY)) * time + this.y
    const size = this.vs * time + this.size
    const angle = this.va * time + this.angle

    if (size < this.maxSize) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.fillRect(0 - size / 2, 0 - size / 2, size, size)
      let double = size * 2
      ctx.lineWidth = 0.5
      ctx.strokeStyle = 'rgba(144,182,6,0.4)'
      ctx.strokeRect(0 - double / 2, 0 - double / 2, double, double)
      let triple = size * 3
      ctx.lineWidth = 0.2
      ctx.strokeStyle = 'white'
      ctx.strokeRect(0 - triple / 2, 0 - triple / 2, triple, triple)
      ctx.restore()
    }
    else {
      return true
    }
    return false
  }

  update(deltaTime: number) {
    this.time += deltaTime
    for (let i = 0; i < Math.min(this.time, 3000); i += 16) {
     const isFinish = this.render(i / 10)
      isFinish && this.onFinish()
    }
  }
}
