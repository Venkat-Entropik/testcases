
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'


import { TodoForm } from '../TodoForm'
const addTodo = jest.fn()
describe('todo app testing',()=>{
    test('sould Input element exist', ()=>{
        render(<TodoForm addTodo={addTodo}/>)
        const inputElemet = screen.getByPlaceholderText(/What is the task today?/i) 
        expect(inputElemet).toBeInTheDocument()
    })

    test('should button exist',()=>{
        render(<TodoForm addTodo={addTodo}/>)
        const buttonElement = screen.getByRole('button',{name:/Add Task/i})
        expect(buttonElement).toBeInTheDocument()
    })

    test('sould Input editable', ()=>{
        render(<TodoForm addTodo={addTodo}/>)
        const inputElemet = screen.getByPlaceholderText(/What is the task today?/i) 
        fireEvent.change(inputElemet,{target:{value:'this is input'}})
        expect(inputElemet.value).toBe('this is input')

    })

    test('sould Input value is reset to empty string', ()=>{
        render(<TodoForm addTodo={addTodo}/>)
        const inputElemet = screen.getByPlaceholderText(/What is the task today?/i) 
        const buttonElement = screen.getByRole('button',{name:/Add Task/i})
        fireEvent.change(inputElemet,{target:{value:'this is input'}})
        fireEvent.click(buttonElement)
        expect(inputElemet.value).toBe('')
    })

})

