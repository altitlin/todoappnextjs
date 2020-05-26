import styled, { css } from 'styled-components';

export const StyledLi = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border: 1px solid #ccc;
  margin-top: -1px;

  & span:last-child {
    margin-left: 1em;
  }

  & div span {
    cursor: pointer;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      & > span {
        text-decoration: line-through;
      }
    `
    }
`;
