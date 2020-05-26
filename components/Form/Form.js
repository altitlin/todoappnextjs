import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { StyledDiv, StyledForm, StyledInput, StyledButton } from './style';

const Form = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const createNewTodo = async () => {
    await axios.post('http://localhost:3000/api/todos', {
      title: value,
      isCompleted: false,
     });

     setValue('');

     router.push('/');
  };

  const handleSubmit = event => {
    event.preventDefault();

    createNewTodo();
  };

  const handleChange = event => {
    const { value } = event.target;

    setValue(value);
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='Enter name todo'
        />
        <StyledButton type='submit'>Create</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Form;
