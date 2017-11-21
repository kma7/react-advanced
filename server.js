let express = require('express'),
  app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept")
  next()
})

let profiles = [
  {
    id: 0,
    name: 'John',
    age: 30,
    bio: 'enjoys swimming and biking',
    hobbies: ['swimming', 'biking', 'talking']
  },
  {
    id: 1,
    name: 'Mark',
    age: 22,
    bio: 'enjoys reading',
    hobbies: ['gardening', 'sleeping']
  }
]

app.get('/profiles', (req, res) => {
   res.json(profiles)
})

app.listen(3000, () => console.log('listening to 3000'))
