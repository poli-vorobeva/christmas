import Control from "../common/controll";
import {FiltersModel} from "../settingsPage/filters/FiltersModel";
import {ChooseSection} from "./chooseSection/chooseSection";
import {CanvasSection} from "./canvasSection/canvasSection";
import {ToysSection} from "./toysSection/toysSection";
import './Tree.css'

export class TreePage extends Control {
    private canvasSection: CanvasSection;
    private toysSection: ToysSection;
    private chooseSection: ChooseSection;
//todo remove fro m tree
    constructor(parentNode: HTMLElement, filtersModel: FiltersModel) {
        super(parentNode, 'div', 'treePage-container')
        console.log(filtersModel)
        this.node.style.backgroundImage = 'url(./public/assets/bgStartPage.jpg)'
        this.chooseSection = new ChooseSection(this.node)
        this.chooseSection.onOffGirland = () => {
            this.canvasSection.offGirland()
        }
        this.chooseSection.onTurnOnGirland = (color) => {
            this.canvasSection.turnOnGirland(color)
        }
        this.chooseSection.setCanvasTree = (tr: string) => {
            this.canvasSection.setCanvasTree(tr)
        }
        this.canvasSection = new CanvasSection(this.node)
        this.canvasSection.onDroppedToy=(toyIndex)=>{
            //todo dec count in dataobject,cuttentData, tree-toySection
        }
        this.chooseSection.setCanvasBackground = (bgImageIndex) => {
            this.canvasSection.setCanvasBackground(bgImageIndex)
        }
        this.toysSection = new ToysSection(this.node, filtersModel)
    }
}