import { Button } from '@mui/material';
import './Login.css';
import { auth, provider } from '../firebase';
import { actionTypes } from '../Reducer';
import { useStateValue } from '../StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();


    const handleSignIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <div className='login-logo'>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>

            <Button type="submit" onClick={handleSignIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;