// import {IDiaposoneData} from "./DiaposoneSection/DianosoneSection";
//
// export class FiltersController {
//   private yearFrom: string;
//   private yearTo: string;
//   private countsFrom: string;
//   private countsTo: string;
//   private sortOrder: string;
//   private shape: string;
//   private color: string;
//   private size: string;
//
//   constructor() {
//     this.yearFrom = ''
//     this.yearTo = ''
//     this.countsFrom = ''
//     this.countsTo = ''
//     this.sortOrder='direct'
//     this.shape=''
//     this.color=''
//     this.size=''
//   }
//
//   public setDiaposoneData(data: IDiaposoneData):void {
//     if (data.diaposoneName === 'count') {
//       if(data.start){
//       this.countsFrom = data.start
//       }
//       if(data.finish) {
//         this.countsTo = data.finish
//       }
//     }
//
//     if (data.diaposoneName === 'year') {
//       if(data.start){
//         this.yearFrom = data.start
//       }
//       if(data.finish) {
//         this.yearTo = data.finish
//       }
//     }
//     console.log(this.yearFrom,this.yearTo,this.countsFrom,this.countsTo)
//   }
//   public setSortOrder(order:string):void{
//     this.sortOrder=order
//   }
//   public setColor(color:string):void{
//     this.color=color
//   }
//   public setShape(shape:string):void{
//     this.shape=shape
//   }
//   public setSize(size:string):void{
//     this.size=size
//   }
//   //redraw
// }