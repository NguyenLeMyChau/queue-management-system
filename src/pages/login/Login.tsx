import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import '../../containers/LoginContainer/LoginContainer.css';
import WelcomeContainer from '../../containers/WelcomeContainer/WelcomeContainer';

const Login = () => {
    return (
        <div className='centered-container'>
            <div className='login-left'>
                <LoginContainer />
            </div>

            <div className='login-right'>
                <WelcomeContainer type='login' />
            </div>
        </div>
    );
}

export default Login;