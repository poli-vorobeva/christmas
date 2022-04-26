//import data from "../../data";
import {IDiaposone, IDiaposoneData, IFiltersData, IToyData} from "../../interfaces";

export class FiltersModel {
  private sortOrder: string[];
  private currentToysData: IToyData[];
  public onRedrawToys: (toysArray: IToyData[]) => void
  private modifyFilters: boolean;
  private filtersObj: { [key: string]: () => string[] };
  private diaposoneObj: { [key: string]: IDiaposone };
  private filtersData: IFiltersData;
  private favorites: IToyData[];
  toysData: IToyData[];

  constructor(toysData:IToyData[]) {
    this.toysData = toysData
    this.currentToysData=JSON.parse(JSON.stringify(toysData))
    this.sortOrder = []
    this.modifyFilters = false
    this.filtersObj = {
      color: () => this.filterValuesChecked('color'),
      shape: () => this.filterValuesChecked('shape'),
      size: () => this.filterValuesChecked('size')
    }
    this.diaposoneObj = {
      year: {from: 1940, to: 2020},
      count: {from: 1, to: 12}
    }
    this.filtersData = {
      shape: {
        шар: false,
        шишка: false,
        снежинка: false,
        фигурка: false,
        колокольчик: false
      },
      color: {
        красный: false,
        желтый: false,
        зелёный: false,
        белый: false,
        синий: false
      },
      size: {
        малый: false,
        средний: false, большой: false
      }
    }
    this.favorites = []
  }

  public addFavorite(toy: IToyData) {
    this.favorites.push(toy)
  }

  private filterValuesChecked(name: string) {
    const arr: string[] = []
    Object.entries(this.filtersData[name as keyof IFiltersData]).forEach(v => {
      v[1] === true && arr.push(v[0])
    })
    if (arr.length === 0) {
      Object.entries(this.filtersData[name as keyof IFiltersData]).forEach(v => arr.push(v[0]))
    }
    return arr
  }

  public setDiaposon(diaposonData: IDiaposoneData) {
    const filterObject = this.diaposoneObj[diaposonData.name]
    //console.log('$$$',filterObject[diaposonData.direction as keyof IDiaposone])
    const oldData = filterObject[diaposonData.direction as keyof IDiaposone]
    filterObject[diaposonData.direction as keyof IDiaposone] = +diaposonData.value
   console.log("OLDnew",oldData,'---',filterObject[diaposonData.direction as keyof IDiaposone])
   //равны 
   if (oldData < filterObject[diaposonData.direction as keyof IDiaposone] || oldData === undefined) {
      if (diaposonData.direction === 'from') {
        this.extendFilters()
      }
      else {
        console.log("insideElse")
        this.extendFilters()
       // this.reduceFilters()
      }
    }
    else if(oldData > filterObject[diaposonData.direction as keyof IDiaposone]) {  
      //console.log('insideELSE')  
      if (diaposonData.direction === 'from') {
        this.extendFilters()
       //console.log("OLDDD",oldData)
       // this.reduceFilters()
      }
      else {
       // console.log("OLDDD",oldData)
      
       this.reduceFilters()
       // this.extendFilters()
      }
    }
  }

  public checkFilters(toy: IToyData) {
    if (!(+toy.year <= this.diaposoneObj.year.to
          && +toy.year >= this.diaposoneObj.year.from
          && +toy.count <= this.diaposoneObj.count.to
          && +toy.count >= this.diaposoneObj.count.from)) {
      return
    }
    const results: boolean[] = []
    Object.entries(this.filtersObj).forEach(filterSection => {
      results.push(this.filtersObj[filterSection[0]]().some(filter => {
        if (toy[filterSection[0] as keyof IToyData] === filter) {
          return true
        }
      }))
    })
    return results.every(result => result === true)
  }

  createToysArray(arrayToCheck: IToyData[]) {
    return Array.from(new Set(arrayToCheck.filter(e => {
      return this.checkFilters(e)
    })))
  }

  public reduceFilters() {
    this.currentToysData = this.createToysArray(this.currentToysData);
    if (this.sortOrder) {
      this.currentToysData = this.useSort(this.currentToysData)
    }
    console.log(this.currentToysData)
    this.onRedrawToys(this.currentToysData)
  }

  public extendFilters() {
    console.log('extend',this.currentToysData)
    const newD = this.toysData.filter(e => {
      return this.checkFilters(e)
    })
    this.currentToysData = [...newD]

    console.log(this.currentToysData)
    if (this.sortOrder) {
      this.currentToysData = this.useSort(this.currentToysData)
    }
    this.onRedrawToys(this.currentToysData)
  }

  private useSort(toys: IToyData[]) {
    const sortedArray = toys.sort((a, b) => {
      if (this.sortOrder[0] === 'alphabet') {
        if (a.name > b.name) {
          if (this.sortOrder[1] === 'direct') {
            return 1
          }
          else {
            return -1
          }
        }
        else {
          if (this.sortOrder[1] === 'direct') {
            return -1
          }
          else {
            return 1
          }
        }
      }
      else {
        if (+a.count > +b.count) {
          (this.sortOrder[1] === 'direct')?1:-1
          
        }
        else {
          (this.sortOrder[1] === 'direct')?-1: 1
          
        }
      }
    })
    return sortedArray
  }

  public setSortOrder(order: string): void {
    this.sortOrder = order.split('-')
    this.currentToysData = this.useSort(this.currentToysData)
    this.onRedrawToys(this.currentToysData)
    //  this.getData()
  }

  public setOneFilter(filterName: string, value: string) {
    this.filtersData[filterName as keyof IFiltersData][value] = !this.filtersData[filterName as keyof IFiltersData][value]
    if (this.filtersObj[filterName]().length === 1) {
      this.reduceFilters()
    }
    else {
      this.extendFilters()
    }
  }

  public getFavorites() {

  //return this.favorites.length ? this.favorites : data.filter((e, i) => i < 20)
  return this.favorites.length && this.favorites 

  }
}