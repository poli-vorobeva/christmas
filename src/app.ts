import Control from "./common/controll";
import { Header } from "./header/Header";
import { SettingsPage } from "./settingsPage/SettingsPage";
import { TreePage } from "./Tree/Tree";
import { FiltersModel } from "./settingsPage/filters/FiltersModel";
import { IToyData } from "./interfaces";
import { StartPage } from "./startPage/StartPage";
import { PreloadData, toyItemData } from "./index";

export class App extends Control {
  private header: Header;
  private settingsPage: SettingsPage;
  private treePage: TreePage;
  private filtersModel: FiltersModel;
  public addFavorite: (toyData: IToyData) => void
  private startPage: StartPage;
  backgroundsImages: HTMLImageElement[];
  treesImages: HTMLImageElement[];
  toysObj: toyItemData[];
  parent: HTMLElement;
  constructor(parentNode: HTMLElement, data: PreloadData) {
    super(parentNode, 'div','container')
    this.parent= parentNode
    this.backgroundsImages = data[0]
    this.treesImages = data[1]
    this.toysObj = data[2].toys
    this.header = new Header(this.node)
    this.startPage = new StartPage(this.node)
    this.startPage.changePage = (page) => {
      this.changePage(page)
    }
    this.filtersModel = new FiltersModel(this.toysObj)
    this.header.changePage = (page) => {
      this.changePage(page)
    }
    this.settingsPage.addFavorite = (toyData: IToyData) => {
      this.filtersModel.addFavorite(toyData)
    }
  }
  toggleNavPage(firstEl:Control,secondEl:Control){
    firstEl && firstEl.destroy()
    firstEl && firstEl.destroy()
    secondEl && secondEl.destroy()
  }
  changePage(page: string) {
    if (page === 'settings') {
      this.toggleNavPage(this.treePage,this.startPage)
      this.settingsPage = new SettingsPage(this.node, this.filtersModel,this.toysObj)
      this.settingsPage.addFavorite = (toyData: IToyData) => {
        this.addFavorite(toyData)
      }
    } else if (page === 'tree') {
      this.toggleNavPage(this.settingsPage,this.startPage)
      this.treePage = new TreePage(this.node, this.filtersModel)
    }
  }
}
//TODO Button disabled
