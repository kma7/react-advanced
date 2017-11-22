let initalState = 0

export default function(state=initalState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1
      break;
    default:
      return state
  }
}
