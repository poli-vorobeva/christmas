
import { App } from "./app";
import './styles.css'
import { generateSnowFlake } from "./Tree/canvasSection/snowFlakes";
import { canvasS, canvTree } from "./garlandCanvas";
import { CanvasMain } from "./goodGarland";
export type toyItemData = {
  color: string,
  count: string,
  favorite: boolean,
  name: string,
  num: string,
  shape: string,
  size: string,
  year: string
}
export type PreloadData=[HTMLImageElement[], HTMLImageElement[], { toys:toyItemData [] }]
const bgArray = ['./public/assets/bg/1.jpg', './public/assets/bg/2.jpg', 
'./public/assets/bg/3.jpg', './public/assets/bg/4.jpg', './public/assets/bg/5.jpg', 
'./public/assets/bg/6.jpg', './public/assets/bg/7.jpg', './public/assets/bg/8.jpg', 
'./public/assets/bg/9.jpg', './public/assets/bg/10.jpg']
const treesArray=['./public/assets/tree/1.png', './public/assets/tree/2.png', 
'./public/assets/tree/3.png', './public/assets/tree/4.png', './public/assets/tree/5.png', 
'./public/assets/tree/6.png']
const toysObj = function () {
  return new Promise((res, rej) => {
    const fetchE = fetch('./public/assets/data.json')
    fetchE.then((w) => {
      res(w.json())
    })
  }
  )

}
function getAsyncImages(array: string[]): Promise<HTMLImageElement[]> {
  return new Promise((res, rej) => {
    const pr = function (adr: string): Promise<HTMLImageElement> {
      return new Promise((res, rej) => {
        const img = new Image()
        img.onload = () => {
          return res(img)
        }
        img.src = adr
      })
    }
    const prAll = async function processArray() {
      const promises = array.map(name => pr(name));
      return await Promise.all(promises);
    }
    const data = prAll()
    console.log(data)
    res(data)
  })
}
const promiseAllData=async ():Promise<any[]>=>{
  const prAr=[getAsyncImages(bgArray),getAsyncImages(treesArray),toysObj()]
  return await Promise.all(prAr)
}
promiseAllData().then((d:PreloadData)=>{
  const app = new App(document.body,d)
})
//document.body.append(generateSnowFlake())
// document.body.append(canvasS)
// document.body.append(canvTree)

// const canvasMain= new CanvasMain()
// document.body.append(canvasMain.canvas)