import { observable, action } from 'mobx'
import { Injectable, getInstance } from './di'

@Injectable()
class Store {
  @observable a = 1

  @action.bound plus() {
    this.a += 1
  }
}

export { Store }
export default getInstance(Store)
