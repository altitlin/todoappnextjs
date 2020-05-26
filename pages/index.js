import { useRouter } from 'next/router';
import axios from 'axios';

import TodoList from '../components/TodoList/TodoList';

const Index = ({ todos }) => {
  const router = useRouter();

  const updateTodo = async id => {
    try {
      const res = await axios.get(`http://localhost:3000/api/todos/${id}`);

      const { data } = await res.data;

      await axios.put(`http://localhost:3000/api/todos/${id}`, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: { ...data, isCompleted: !data.isCompleted },
      });

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async id => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoList
      todos={todos}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3000/api/todos');

  const { data } = await res.data;

  return { todos: data };
};

export default Index;
