import { StyledLi } from './style';

const TodoItem = ({ _id, title, isCompleted, removeTodo, updateTodo }) =>
  <StyledLi isCompleted={isCompleted}>
    <span>{title}</span>
    <div>
      <span onClick={() => removeTodo(_id)}>&#10006;</span>
      <span onClick={() => updateTodo(_id)}>&#10004;</span>
    </div>
  </StyledLi>

export default TodoItem;
