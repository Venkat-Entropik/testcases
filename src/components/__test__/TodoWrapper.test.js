import {render,screen,fireEvent} from '@testing-library/react'
import { TodoWrapper } from '../TodoWrapper'
import '@testing-library/jest-dom'

describe('todo app testing',()=>{
    test('sould title exist', ()=>{
        render(<TodoWrapper/>)
        const titleElement= screen.getByRole('heading')
        expect(titleElement.textContent).toBe("Get Things Done !")
    })

    test('should elemets render or not', ()=>{
        render(<TodoWrapper/>)
        const inputElemet = screen.getByPlaceholderText(/What is the task today?/i) 
        const buttonElement = screen.getByRole('button',{name:/Add Task/i})

        fireEvent.change(inputElemet,{target:{value:"Get Fruits from the store"}})
        fireEvent.click(buttonElement)
        fireEvent.change(inputElemet,{target:{value:"Go to vacation"}})
        fireEvent.click(buttonElement)
        const todos = screen.getAllByTestId('todos')
        expect(todos.length).toBe(2)
    })


})