export class SnowFlake {
  private x: number;
  private y: number;
  private size: number;
  private speed: number;
  private frameX: number;
  private frameY: number;
  private frameSize: number;
  private spin: number;
  private canvas: HTMLCanvasElement;
  private angle: number;
  private blur: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 60 + 20
    this.speed = Math.random() * 0.5 + 0.2
    this.frameX = Math.floor(Math.random() * 4)
    this.frameY = Math.floor(Math.random() * 4)
    this.frameSize = 250
    this.angle = 0
    this.spin = Math.random() > 0.5 ? 0.2 : -1
    this.blur = Math.floor(Math.random() * 5)
  }

  update() {

    this.y -= this.speed
    if (this.y + this.size < 0) this.y = this.canvas.height + this.size
    this.angle += this.spin
  }

  draw(flakes: HTMLImageElement) {
    const ctx = this.canvas.getContext('2d')
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle * Math.PI / 180)
    //ctx.filter=`blur(2px)`
    ctx.drawImage(flakes, this.frameX * this.frameSize,
      this.frameY * this.frameSize, this.frameSize, this.frameSize,
      0 - this.size / 2, 0 - this.size / 4, this.size, this.size)
    ctx.restore()
  }
}