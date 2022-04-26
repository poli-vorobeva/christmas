import Control from "../common/controll";
import './SettingsPage.css'
import {FilterContainer} from "./filters/FilterContainer";
import {DecorationSection} from "./decoration/DecorationSection";
import {FiltersModel} from "./filters/FiltersModel";
import {IToyData} from "../interfaces";
import { toyItemData } from "../index";

export class SettingsPage extends Control {
  private filtersContainer: FilterContainer;
  private decorationSection: DecorationSection;
  private filtersModel: FiltersModel;
  public addFavorite: (toyData: IToyData) => void

  constructor(parentNode: HTMLElement, filtersModel: FiltersModel,toysData: toyItemData[]) {
    super(parentNode,'div', 'settingsPage');
    document.querySelector('body').style.backgroundImage="url('./public/assets/bgSettings.png')"
    this.filtersModel = filtersModel
    this.filtersModel.onRedrawToys = (toysArray) => {
      
      this.decorationSection.drawSection(toysArray)
    }
    this.filtersContainer = new FilterContainer(this.node)

    this.filtersContainer.onChooseColor = (color) => {
      this.filtersModel.setOneFilter('color', color)
    }
    this.filtersContainer.onChooseShape = (shape) => {
      this.filtersModel.setOneFilter('shape', shape)
    }
    this.filtersContainer.onChooseSize = (size) => {
      this.filtersModel.setOneFilter('size', size)
    }
    this.filtersContainer.setDiaposoneData = (data) => {
       this.filtersModel.setDiaposon(data)
    }
    this.filtersContainer.setSortOrder = (order) => {
      this.filtersModel.setSortOrder(order)
    }
    this.decorationSection = new DecorationSection(this.node,toysData)
    this.decorationSection.addFavorite = (toyData) => {
     this.addFavorite(toyData)
    }
  }
}