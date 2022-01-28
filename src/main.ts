import express from "express"
import cors from "cors"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" })
})

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`)
})
