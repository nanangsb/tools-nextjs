import { useEffect, useState } from 'react'

import { useGlobalState } from '../../hooks/useGlobalState'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { uniqueId } from '../../utilities/uniqueId'
import { initialValues, initialErrors } from '../../constants/todoList'

export const useTodoListFormControls = () => {
    const listId = uniqueId()

    const [saved, setSaved] = useLocalStorage('webtools-v1-todo-lists-saved', [])
    const [lists, setLists] = useState(saved ?? [])

    const [screen, setScreen] = useState('')
    const [values, setValues] = useState(initialValues)
    const [items, setItems] = useState([])
    const [errors, setErrors] = useState(initialErrors)
    const [formIsValid, setFormIsValid] = useState(false)

    const { addToast, removeModal } = useGlobalState()

    useEffect(() => {
        if (saved?.length) return setScreen('view')

        setScreen('create')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleScreen = (_, newScreen) => {
        setScreen(newScreen)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if (value.trim() === '') {
            setValues({
                ...values,
                [name]: '',
            })
            return setErrors({
                title: name === 'title' ? true : false,
                item: name === 'item' && !items?.length ? true : false,
            })
        }

        setValues({
            ...values,
            [name]: value,
        })

        setErrors(initialErrors)
    }

    const handleAddItem = (e) => {
        const { value } = e.target
        const { id } = e.currentTarget

        if ((e.key === 'Enter' && value !== '') || (id === 'addItemButton' && values.item !== '')) {
            setItems([
                ...items,
                {
                    id: listId,
                    text: values.item.trim(),
                },
            ])

            setValues({
                ...values,
                item: '',
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!saved.some((item) => item.title === values.title.trim())) {
            const update = {
                id: listId,
                title: values.title.trim(),
                isFavorite: false,
                items,
            }

            setLists([...lists, update])

            setSaved([...saved, update])
        }

        setValues(initialValues)
        setItems([])
        setFormIsValid(false)
    }

    const handleFavorite = (id) => {
        const newList = lists.map((list) => {
            if (list.id === id) {
                list.isFavorite = true
            }
            return list
        })

        setLists([...newList])
        setSaved([...newList])
    }

    const handleDelete = (list) => {
        const newList = lists.filter((item) => item.id !== list.id)

        setLists([...newList])
        setSaved([...newList])

        removeModal()

        addToast(`${list.title} deleted successfully!`)
    }

    useEffect(() => {
        if (values.title && items?.length) return setFormIsValid(true)
    }, [values.title, items])

    return {
        screen,
        values,
        errors,
        formIsValid,
        items,
        lists,
        handleScreen,
        handleChange,
        handleAddItem,
        handleSubmit,
        handleFavorite,
        handleDelete,
    }
}
