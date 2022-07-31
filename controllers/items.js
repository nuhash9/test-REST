import {Item} from '../models/Item.js'

const getItems = async (req, res, next) => {
	try {
		res.status(200).json(await Item.find())
	}
	catch (err) {
		next(err)
	}

}

const getItem = async (req, res, next) => {
	const { id  } = req.params

	try {
		const item = await Item.findOne({_id: id})
		res.status(200).json(item)
	}
	catch (err) {
		next(err)
	}
}

const createItem = async (req, res, next) => {
	const newItem = req.body

	try {
		const createdItem = await Item.create(newItem)
		res.status(201).json({createdItem})
	}
	catch (err) {
		next(err)
	}


}

const deleteItem = async (req, res, next) => {
	const { id } = req.params
	try {
		const deletedRes = await Item.deleteOne({_id: id})
		res.status(200).json(deletedRes)
	}
	catch (err) {
		next(err)
	}

}

export { getItems, getItem, createItem, deleteItem }
