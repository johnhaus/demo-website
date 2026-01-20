import styled from 'styled-components';

const TodoItem = styled.li`
  color: ${(props) =>
    props.$completed
      ? props.theme.colors.textOnLight
      : props.theme.colors.textPrimary};
  background-color: ${(props) =>
    props.$completed
      ? props.theme.colors.lightGreen
      : props.theme.colors.white};
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) =>
    props.$completed ? 'none' : props.theme.colors.lightGrey};
`;

const TodoItemRow = ({ task, renderButtons }) => (
  <TodoItem key={task.key} $completed={task.completed}>
    <span>{task.text}</span>
    <div>{renderButtons(task)}</div>
  </TodoItem>
);

export default TodoItemRow;
