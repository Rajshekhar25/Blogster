import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//define all the routes here, for now not creating a separate routes file

export default app
