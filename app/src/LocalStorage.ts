import { IListItem } from './types'

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
    } catch {
      return false
    }
  }
}
