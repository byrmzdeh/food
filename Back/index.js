import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

const menuSchema = new Schema({

    img: String,
    name: String,
    price: Number,
    desc: String

})
const menuModel = mongoose.model('menu', menuSchema);

app.get('/', async (req, res) => {
    try {
        const menu = await menuModel.find({})
        res.send(menu)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const menu = await menuModel.findById(id)
        res.send(menu)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const {name,img,desc,price} = req.body
        const menu = new menuModel({name,img,desc,price} )
        await menu.save()
        res.send(menu)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name,img,desc,price} = req.body
        const menu = await menuModel.findByIdAndUpdate(id,{name,img,desc,price} )
        res.send(menu)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const menu = await menuModel.findByIdAndDelete(id)
        res.send(menu)
    } catch (error) {
        res.send(error.message)
    }
})
mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(()=>console.log('Not Connected'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})