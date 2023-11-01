import express from 'express';
import apiRoutes from './routes/api.js'


const app = express();

const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})