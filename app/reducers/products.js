let initialState = [
  {id: '124', name: 'pizza', cost: '7', category: 'food'},
  {id: '245', name: 'apple', cost: '2', category: 'food'},
  {id: '313', name: 'tv', cost: '200', category: 'electronics'},
  {id: '424', name: 'phone', cost: '444', category: 'electronics'}
]

export default function products(state=initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
