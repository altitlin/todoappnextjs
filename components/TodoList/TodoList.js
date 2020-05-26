import TodoItem from '../TodoItem/TodoItem'

import { StyledDiv, StyledUl } from './style';

const TodoList = ({ todos, removeTodo, updateTodo }) =>
  <StyledDiv>
    <StyledUl>
      {todos.map(todo =>
        <TodoItem
          key={todo._id}
          {...todo}
          removeTodo={removeTodo}
          updateTodo= {updateTodo}
        />
      )}
    </StyledUl>
  </StyledDiv>

export default TodoList;
