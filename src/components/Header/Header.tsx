import * as S from './style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.CenterAlign>
        <S.HeaderIcon large={true}></S.HeaderIcon>
        <S.HeaderTitle>Terion Potions</S.HeaderTitle>
      </S.CenterAlign>
    </S.HeaderContainer>
  );
};

export default Header;
