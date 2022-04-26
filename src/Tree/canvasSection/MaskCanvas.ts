import Control from "../../common/controll";

export class MaskCanvas extends Control {
  private secondCanvas: Control<HTMLCanvasElement>;
  private isEmptyMap: Map<string, boolean>;
  private coordsForGarland: { y: number; x: number[] }[];

  constructor(parentNode: HTMLElement, image: HTMLImageElement, width: number, height: number) {
    super(parentNode)
    this.secondCanvas = new Control(parentNode, 'canvas')
    this.secondCanvas.node.width = width,
      this.secondCanvas.node.height = height
    const secondCtx = this.secondCanvas.node.getContext('2d')
    secondCtx.drawImage(image, 0, 0, width, height)
    const data = secondCtx.getImageData(0, 0, width, height)
    this.isEmptyMap = new Map()
    let countX = 0
    let countY = 0
    //значения границ по строкам
    const limitValues: { y: number, x: number[] }[] = []
    let rowObject: { y: number, x: number[] } = {y: countY, x: []}
    let firstInRow: boolean = false
    let lastInRow: number = null
    for (let i = 0; i < data.data.length; i += 4) {
      if (countX === Math.floor(width)) {
        rowObject.x.push(lastInRow)
        limitValues.push(rowObject)
        countX = 0
        countY++
        firstInRow = false
        lastInRow = null
        rowObject = {y: countY, x: []}
      }
      countX++
      if (!(data.data[i + 3] == 0)) {
        this.isEmptyMap.set(`${countX}-${countY}`, true)
        if (!firstInRow) {
          firstInRow = true
          rowObject.x.push(countX)
        }
        else {
          lastInRow = countX
        }
      }
      // if (data.data[i + 3] < 10) {
      //   this.isEmptyMap.set(`${countX}-${countY}`, false)
      // }
      // else {
      //    this.isEmptyMap.set(`${countX}-${countY}`, true)
      // }

    }
    this.coordsForGarland = this.setLimitsForGarland(limitValues)
    this.secondCanvas.destroy()
  }

  getGarlandCoords() {
    return this.coordsForGarland
  }

  setLimitsForGarland(limitValues: { y: number, x: number[] }[]) {
    const limitsForGarland = []
    for (let i = 0; i < limitValues.length; i += 50) {
      limitsForGarland.push(limitValues[i])
    }
    return limitsForGarland
  }

  checkPixel(x: number, y: number) {
    return this.isEmptyMap.get(`${Math.floor(x)}-${Math.floor(y)}`)
  }

  public getCursorPosition(event: MouseEvent, node: HTMLElement) {
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x, y}
  }

  pick(e: MouseEvent, node: HTMLElement, context: CanvasRenderingContext2D): { x: number, y: number } {
    const {x, y} = this.getCursorPosition(e, node)
    return {x, y}
  }
}