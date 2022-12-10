import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import {createUser} from '../util/auth';
import LoadingOverLay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
function SignupScreen() {

  const [isAuthencating,setIsAuthenticating]=useState(false);

  const authCtx= useContext(AuthContext)
  async function signupHandler (email,password) {
    setIsAuthenticating(true);
    try{
    const token=await createUser(email,password)
    authCtx.authenticate(token)
    }catch(error){
      Alert.alert('Authentication failed','Could not create user. Please check your input and try again');
    }
    setIsAuthenticating(false);
  }

  if(isAuthencating)
  {
    return <LoadingOverLay message="Creating user...."/>
  }
  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
