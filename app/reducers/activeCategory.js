let initialState = 'food'

export default function activeCategory(state=initialState, action) {
  switch (action.type) {
    case 'CHANGE_CATAGORY':
      return action.payload
    default:
      return state
  }
}
