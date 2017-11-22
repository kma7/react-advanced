import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'

export let actions = {
  incrementCount: () => {
    dispatcher.dispatch({
      actionType: constants.INCREMENT
    })
  }
}
