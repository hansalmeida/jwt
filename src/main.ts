import cors from "cors"
import express from "express"
import { routes } from "./routes"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, async () => {
  console.log(`App listening on localhost:${port}`)
})
