import Control from "../../common/controll";
import {FiltersModel} from "../../settingsPage/filters/FiltersModel";
import {IToyData} from "../../interfaces";

export class ToysSection extends Control {
	private toysSection: Control<HTMLElement>;
	private favoriteToys: IToyData[]
	private toysBlock: void;
	private toysCountBlock: {index:string,span:Control<HTMLElement>}[];

	constructor(parentNode: HTMLElement, filtersModel: FiltersModel) {
		super(parentNode);
		this.node.classList.add('toysSection')
		this.favoriteToys = JSON.parse(JSON.stringify(filtersModel.getFavorites()))
		this.toysCountBlock=[]
		this.favoriteToys.forEach(toy => {
			const toyItem = new Control(this.node, 'div', 'toySectionItem')
			toyItem.node.style.backgroundImage = `url(./public/assets/toys/${toy.num}.png)`
			const image = new Image()
			image.src = `./public/assets/toys/${toy.num}.png`;
			image.style.width = '60%'
			image.style.height = '60%'
			image.draggable = true
			image.ondragstart = (e) => {
				e.dataTransfer.setData('el', toy.num)
			}
			toyItem.node.appendChild(image)
			const toyCount = new Control(toyItem.node, 'span', 'toyCount', toy.count)
			this.toysCountBlock.push({
				index: toy.num,
				span:toyCount
			})
		})
	}

	changeToyCount(toyIndex: string, action: string) {
		//todo change in FiltersModel
		const toy = this.favoriteToys.find(el=>el.num===toyIndex);
		let toyCount=+toy.count;
		(action=='dec')?toy.count =''+(--toyCount):toy.count=''+(++toyCount)
		//console.log(this.toysCountBlock)
		const currentToy = this.toysCountBlock.find(el=>el.index==toyIndex)
		currentToy.span.node.innerText=toy.count
	}
}