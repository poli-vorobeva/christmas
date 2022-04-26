import Control from "../../../common/controll";
import {OptionElement} from "./OptionElement";
import './SortSection.css'

export class SortSection extends Control {
  private sortSection: Control<HTMLElement>;
  private title: Control<HTMLElement>;
  private cancelFilters: Control<HTMLElement>;
  private form: Control<HTMLElement>;
  private select: Control<HTMLSelectElement>;
  public sortOrder: (order: string) => void
  private optionsValues: Record<string, string>[];

  constructor(parentNode: HTMLElement) {
    super(parentNode,'div', 'sortSection');
    this.title = new Control(this.node, 'h5', 'sortSection-title', 'сортирока')
    this.form = new Control(this.node, 'form', '')
    this.select = new Control(this.form.node, 'select')
    this.select.node.onchange = (e) => {
      console.log(this.select.node.value)
      this.sortOrder(this.select.node.value)
    }
    this.optionsValues = [
      {
        value: 'alphabet-direct',
        title: 'Сортировка от А до Я'
      },
      {
        value: 'alphabet-reverse',
        title: 'Сортировка от Я до А'
      },
      {
        value: 'count-direct',
        title: 'Сортировка по количеству(по возрастанию)'
      },
      {
        value: 'count-reverse',
        title: 'Сортировка по количеству(по убыванию)'
      }
    ]

    this.optionsValues.forEach(_option => {
      const option = new OptionElement(this.select.node, _option.title, _option.value)
    })

    this.cancelFilters = new Control(this.form.node, 'button', '', 'Сбросить фильтры')
  }
}