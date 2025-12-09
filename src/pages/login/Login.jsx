import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../shared/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 90%;
  max-width: 600px;
  height: 300px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0px 12px ${({ theme }) => theme.colors.white};
`;

const InputWrapper = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  font-size: 16px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

function Login() {
  const [taskText, setTaskText] = useState('');

  return (
    <Container>
      <LoginContainer>
        <InputWrapper>
          <Label htmlFor="taskInput">Username</Label>
          <Input
            id="taskInput"
            type="text"
            value={taskText}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Enter Username..."
          />
          <Label htmlFor="taskInput">Password</Label>
          <Input
            id="taskInput"
            type="text"
            value={taskText}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Enter Password..."
          />
        </InputWrapper>
      </LoginContainer>
    </Container>
  );
}

export default Login;
