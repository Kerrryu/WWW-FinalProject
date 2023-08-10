import { useEffect, useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/Firebase';
import { NavLink, useNavigate } from 'react-router-dom'

import Header from 'components/Header';
import * as S from './style';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if(auth.currentUser != null)
  {
    navigate("/");
  }

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate("/")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }

  return (
    <S.Container>        
        <S.Main>
            <S.CenterAlign>
                <div>                  
                    <Header></Header>                                                      
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onLogin}                        
                        >  
                            Sign In                       
                        </button>
                                                                     
                    </form>
                   
                    <p className="text-sm text-white text-center">
                        No account yet? {' '}
                        <NavLink to="/register">
                            Sign up
                        </NavLink>
                    </p>               
                </div>
            </S.CenterAlign>
        </S.Main>
    </S.Container>
  );
}

export default Login;
