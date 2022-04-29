import Control from "../../common/controll";

export class ChooseSection extends Control {
    private chooseContainer: Control<HTMLElement>;
    private chooseBackground: Control<HTMLElement>;
    private chooseTree: Control<HTMLElement>;
    private chooseGirland: Control<HTMLElement>;
    private bgImages: string[];
    private bgItems: Control<HTMLElement>;
    private treeImages: string[];
    private treeImgs: Control<HTMLElement>;
    private treeItems: any;
    private girlandColors: string[];
    public setCanvasBackground: (bgImageIndex: string) => void;
    private colorsList: Control<HTMLElement>;
    private chooseBackgroundButton: Control<HTMLButtonElement>;
    private treeImgsButton: Control<HTMLElement>;
    private girlandButton: Control<HTMLElement>;
    public setCanvasTree: (tr: string) => void
    private offGirland: Control<HTMLElement>;
    public onTurnOnGirland: (color: string) => void
    onOffGirland:()=>void

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.bgImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        this.treeImages = ['1', '2', '3', '4', '5', '6']
        this.girlandColors = ['red', 'green', 'blue']
        this.node.classList.add('chooseContainer')
        this.chooseBackground = new Control(this.node, 'div', 'chooseBackground')
        this.chooseBackgroundButton = new Control(this.chooseBackground.node, 'button',
            'chooseBackgroundButton', 'Выбери фон')
        this.chooseBackgroundButton.node.onclick = () => {
            this.bgItems.node.style.display = 'grid'
            setTimeout(() => {
                this.bgItems.node.classList.toggle('bgItemsWrapper-show')
            }, 0)
        }
        this.bgItems = new Control(this.chooseBackground.node, 'div', 'bgItemsWrapper-hide',)
        this.bgImages.forEach(bg => {
            const bgItem = new Control(this.bgItems.node, 'div', 'bgItem')
            bgItem.node.style.backgroundImage = `url(./public/assets/bg/${bg}.jpg)`
            bgItem.node.onclick = () => {
                this.bgItems.node.classList.remove('bgItemsWrapper-show')
                this.setCanvasBackground(bg)
                setTimeout(() => {
                    this.bgItems.node.style.display = 'none'
                }, 0)
            }
        })

        this.chooseTree = new Control(this.node, 'div', 'chooseTree')
        this.treeImgs = new Control(this.chooseTree.node, 'div', 'treeImages-hide')
        this.treeImgsButton = new Control(this.chooseTree.node, 'button',
            'chooseTreeButton', 'Выбери елку')
        this.treeImgsButton.node.onclick = () => {

            this.treeImgs.node.style.display = 'grid'
            setTimeout(() => {
                this.treeImgs.node.classList.toggle('treeImages-show')
            }, 0)
        }
        this.treeImages.forEach((tr: string) => {
            const treeItem = new Control(this.treeImgs.node, 'div', 'treeItem')
            treeItem.node.style.backgroundImage = `url(./public/assets/tree/${tr}.png)`
            treeItem.node.onclick = () => {
                this.setCanvasTree(tr)
                this.treeImgs.node.classList.remove('treeImages-show')
            }
        })


        this.chooseGirland = new Control(this.node, 'div', 'chooseGirland', 'girland')
        this.girlandButton = new Control(this.chooseGirland.node, 'button',
            'chooseGirlandButton', 'Включить гирлянду')

        this.offGirland = new Control(this.chooseGirland.node, 'button', 'offGirlandButton'
            , 'Выключить гирлянду')
        this.offGirland.node.onclick = () => {
      this.onOffGirland()
        }
        this.girlandButton.node.onclick = () => {
            this.colorsList.node.style.display = 'flex'
            setTimeout(() => {
                this.colorsList.node.classList.toggle('girland-show')
            }, 0)
        }
        this.colorsList = new Control(this.chooseGirland.node, 'ul', 'girland-hide')
        this.girlandColors.forEach(col => {
            const color = new Control(this.colorsList.node, 'li', 'colorItem')
            color.node.style.background = col
            color.node.onclick = () => {
                this.onTurnOnGirland(col)
                this.colorsList.node.classList.remove('girland-show')
            }
        })


    }
}