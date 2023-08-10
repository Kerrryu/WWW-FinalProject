import * as S from './style';

import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'components/Firebase';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/");
  }

  const GoLogin = () => {
    navigate("/login");
  }

  const HandleLogout = () => {               
    signOut(auth).then(() => {
      console.log("Signed out successfully")
      navigate("/");
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid)
      } else {
        console.log("user is logged out")
      }
    });
  }, []);

  const AuthInfo = () => {
    if(auth.currentUser != null)
    {
      return (
        <S.AuthClickText onClick={HandleLogout}>{auth.currentUser.email}</S.AuthClickText>
      );
    } else {
      return (
        <S.AuthClickText onClick={GoLogin}>Sign In</S.AuthClickText>
      );
    }
  }

  return (
    <S.HeaderContainer>
      <S.CenterAlign>
        <S.HeaderIcon onClick={GoHome} large={true}></S.HeaderIcon>
        <S.HeaderTitle>Terion Potions</S.HeaderTitle>
      </S.CenterAlign>
      <S.AuthContainer>
        {AuthInfo()}
      </S.AuthContainer>
    </S.HeaderContainer>
  );
};

export default Header;
