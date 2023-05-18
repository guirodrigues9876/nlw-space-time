import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()


app.register(cors, {
  origin: true, // todas as URLs de front-end poderão acessar o nosso back-end

})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on ')
  })
