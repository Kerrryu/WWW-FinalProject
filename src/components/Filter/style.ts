import styled from 'styled-components/macro';

import CB from 'commons/Checkbox';

export const Container = styled.div``;

export const Checkbox = styled(CB)`
  display: inline-block;
  margin-bottom: 15px;
  margin-right: 15px;

  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 35px;
    height: 35px;
    font-size: 1.2em;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 50%;
    line-height: 35px;
    text-align: center;

    &:hover input ~ .checkmark {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    input:focus-visible ~ .checkmark {
      box-sizing: border-box;
      line-height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    & input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ececec;
    }

    /* Show the checkmark when checked */
    & input:checked ~ .checkmark:after {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      font-size: 0.8em;
      border-radius: 20%;
      box-sizing: border-box;
      line-height: 45px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({theme}) => theme.colors.header};

      border: 1px solid transparent;
    }
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 1.2em;
`;
