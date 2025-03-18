class LoginElements {
    inputEmail = () => { return "input[name='email']" };
    inputPassword = () => { return "input[name='password']" };
    btnSubmitLogin = () => { return "button[type='submit']" };
    btnRegister = () => { return "a[href='/register']" };
}

export default LoginElements;