import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
function LoginScreen() {

  const [isAuthencating,setIsAuthenticating]=useState(false);
  const authCtx=useContext(AuthContext);

  async function loginHandler (email,password) {
    setIsAuthenticating(true);
    try{
    const token =await Login(email,password)
    authCtx.authenticate(token);
    }catch(error){
      Alert.alert('Authentication failed','Could not log you in. Please check your credentials');
      setIsAuthenticating(false);
    
    }
  }

  if(isAuthencating)
  {
    return <LoadingOverlay message="Logging you in....."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
