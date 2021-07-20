import styled from 'styled-components';

export const InputCheck = styled.input`
  display: none;
  &:checked ~ .button-check {
    background: var(--activeColor-switch);
  }
  &:checked ~ .button-check::before {
    transform: translateX(40px);
    background-color: var(--card-color);
    /* background-color: #252b42; */
  }
`;

export const SwitchButton = styled.label`
  position: relative;
  display: block;
  block-size: 2.5rem;
  inline-size: 5rem;
  padding: 5px;
  box-sizing: border-box;
  background-color: var(--switch-color);
  border-radius: 1.25rem;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    inline-size: 1.875rem;
    block-size: 1.875rem;
    background-color: var(--card-color);
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
  }
`;
