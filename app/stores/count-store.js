import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'
import {EventEmitter} from 'events'

let _count = 0

function getCount() {
  return _count
}

function increseCount() {
  _count++
}

export let CountStore = Object.assign({}, EventEmitter.prototype, {
  getCount: getCount,
  emitChange: function() {
    this.emit('CHANGE_EVENT')
  },
  addChangeListener: function(callback) {
    this.on('CHANGE_EVENT', callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener('CHANGE_EVENT', callback)
  }
})

dispatcher.register((action) => {
  switch (action.actionType) {
    case 'INCREMENT':
      increseCount()
      CountStore.emitChange()
      break;
    default:
  }
})
