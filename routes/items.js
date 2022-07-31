import { Router } from 'express'
import { getItems, getItem, createItem, deleteItem } from '../controllers/items.js'

const itemRoutes = Router()

itemRoutes.get('/', getItems)
itemRoutes.get('/:id', getItem)
itemRoutes.post('/', createItem)
itemRoutes.delete('/:id', deleteItem)

export {itemRoutes}
