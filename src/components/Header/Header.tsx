import * as S from './style';

import { NavLink, useNavigate } from 'react-router-dom';
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'components/Firebase';
import { useEffect, useState } from 'react';

type FirebaseUserState = User | null;

const Header = () => {
  let [currentUser, setUser] = useState<FirebaseUserState>(null);
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
        setUser(user);
        console.log("uid", uid)
      } else {
        setUser(null);
        console.log("user is logged out")
      }
    });
  }, []);

  const AuthInfo = () => {
    if(currentUser != null)
    {
      return (
        <S.AuthClickText onClick={HandleLogout}>{currentUser.email}</S.AuthClickText>
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
        <AuthInfo></AuthInfo>
      </S.AuthContainer>
    </S.HeaderContainer>
  );
};

export default Header;
