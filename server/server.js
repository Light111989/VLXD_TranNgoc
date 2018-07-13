import Express from 'express'
import history from 'connect-history-api-fallback'
import GraphHttp from 'express-graphql'
import ServeStatic from 'serve-static'
import schema from './schema'

const APP_PORT = 8888
const app = Express()
app.use(ServeStatic(__dirname))
app.use(
  '/api',
  GraphHttp({
    schema,
    graphiql: true,
  })
)
app.use(history)

app.listen(process.env.PORT || APP_PORT, () => {
  console.log(`VLXD_API listening on port ${APP_PORT} ...`)
})
