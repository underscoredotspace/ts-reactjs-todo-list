import { IListItem } from './components/list/ListItem'

export default class LocalStorage {
  load(): IListItem[] {
    const lsData = localStorage.getItem('todoList')
    if (lsData) {
      return JSON.parse(lsData)
    }

    return []
  }

  save(list: IListItem[]): boolean {
    try {
      localStorage.setItem('todoList', JSON.stringify(list))
      return true
    } catch (error) {
      console.error({ localStorage: error })
      return false
    }
  }
}
