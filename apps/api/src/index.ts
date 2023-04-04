import 'dotenv/config'

import cookies from 'cookie-parser'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())
app.use(cookies())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API base url' })
})

app.listen(process.env.PORT, () =>
  console.info('Server is running on port 5000')
)
