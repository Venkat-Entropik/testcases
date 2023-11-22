import {render,screen,fireEvent} from '@testing-library/react'
import { Todo } from '../Todo'
import '@testing-library/jest-dom'

const task ={ id: 1, task: 'todo', completed: false, isEditing: false }
const deleteTodo = jest.fn()
const editTodo = jest.fn()
const toggleComplete = jest.fn()

// deleteTodo, editTodo, toggleComplete


describe('todo app testing',()=>{
    test('sould task incompleted', ()=>{
        render(<Todo
        task={task}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
        />)

        const todoElement = screen.getByTestId(/para/i)
        expect(todoElement).toHaveClass('incompleted')

    })

    // test('sould task completed', ()=>{
    //     render(<Todo
    //     task={task}
    //     deleteTodo={deleteTodo}
    //     editTodo={editTodo}
    //     toggleComplete={toggleComplete}
    //     />)

    //     const todoElement = screen.getByTestId(/para/i)
    //     fireEvent.click(todoElement)
    //     expect(todoElement).toHaveClass('completed')

    // })

    test('Should render Todo component with edit and delete buttons', () => {
        render(<Todo
            task={task}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />);
    
        const editButton = screen.getByTestId('edit-button');
        const deleteButton = screen.getByTestId('delete-button');
    
        expect(editButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
      });

     
    

})