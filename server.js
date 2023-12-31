#!/use/bin/env node 

const server = require('fastify')()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = provess.env.PORT || 8000;
const Recipe = require('./recipe.js')

server.get('/', async (req, res) => {
  return "YoYoYoYo"
})

server.get('/recipes/:id', async (req, res) => {
  const recipe = new Recipe(req.params.id)
  await recipe.hydrate()
  return recipe
})

server.listen(PORT, HOST, (err, host) => {
  console.log(`Server running at ${HOST}`)
})

