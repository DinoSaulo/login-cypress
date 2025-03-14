class RegisterElements {
    inputEmail = () => { return "input[name='email']" };
    inputPassword = () => { return "input[name='password']" };
    inputConfirmPassword = () => { return "input[name='confirmarSenha']" };
    btnSubmitRegister = () => { return "button[type='submit']" };
    btnBackToLogin = () => { return "a[href='/login']" };
    alertMessage = () => { return "body div p" };
}
  
export default RegisterElements;