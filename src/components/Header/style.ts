import styled from 'styled-components/macro';

interface IContainer {}
export const HeaderContainer = styled.div<IContainer>`
  position: static;
  top: 0;
  width: 100%;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.header};
  box-sizing: border-box;
  z-index: 99;
  text-align: center;
`;

export const CenterAlign = styled.div<IContainer>`
  margin: auto;
`;

interface IHeaderIcon {
  large?: boolean;
}
export const HeaderIcon = styled.div<IHeaderIcon>`
  width: ${({ large }) => (large ? '80px' : '50px')};
  height: ${({ large }) => (large ? '80px' : '50px')};
  position: relative;
  display: inline-block;
  margin-right: auto;
  margin-bottom: -20px;
  color: white;
  cursor: pointer;
  background-image: url(${require('static/potion-icon.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 50%;
`;

export const HeaderTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2em;
  color: white;
`;

export const AuthContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const AuthClickText = styled.span`
  display: block;
  font-size: 1.2em;
  color: orange;
  cursor: pointer;
`;