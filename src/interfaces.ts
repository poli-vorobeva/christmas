export interface IColor {
  color: string,
  rgb: string
}

export interface IShape {
  shape: string,
  src: string
}
export interface IToyData {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
}

export interface IFiltersData {
  shape: { [key: string]: boolean },
  color: {
    [key: string]: boolean
  },
  size: {
    [key: string]: boolean
  }
}

export interface IDiaposone {
  from: number,
  to: number
}
export interface IDiaposoneData {
  name:string,
  direction:string
  value:string
  // start?: string,
  // finish?: string,
  // diaposoneName: string
}

export interface IToyOnTree {
  num: number,
  size: number,
  x: number,
  y: number
}

export interface ICanvasImageObject {
  image: HTMLImageElement,
  startX: number,
  startY: number,
  width: number,
  height: number,
  size?: number
}
