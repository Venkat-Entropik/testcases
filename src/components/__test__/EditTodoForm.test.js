import {fireEvent, render,screen} from '@testing-library/react'
import { EditTodoForm } from '../EditTodoForm'
import '@testing-library/jest-dom'

const task={ id: 1, task: 'todo', completed: false, isEditing: false }
const editTodo = jest.fn()


describe('todo app testing',()=>{
    test('Should Todo is Editable', ()=>{
        render(<EditTodoForm task={task} editTodo={editTodo}/>)
        const inputElemet = screen.getByPlaceholderText(/Update task/i) 
        expect(inputElemet.value).toBe('todo')
    })

    test('Should change the input value', ()=>{
        render(<EditTodoForm task={task} editTodo={editTodo}/>)
        const inputElemet = screen.getByPlaceholderText(/Update task/i) 
        const buttonElement = screen.getByRole('button',{name:/Add Task/i})
        fireEvent.change(inputElemet,{target:{value:"changed"}})
        fireEvent.click(buttonElement)
        expect(inputElemet.value).toBe('changed')
    })

})