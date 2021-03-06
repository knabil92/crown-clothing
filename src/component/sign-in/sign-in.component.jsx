import React, {Component} from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value})
  }
  
  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          
          <FormInput name='email' type='email'
          handleChange={this.handleChange}
          value={this.state.email} label="email" required/>
          

          <FormInput name='password' type='password' 
          handleChange={this.handleChange} 
          value={this.state.password} label="password" required/>
          

          <CustomButton type='submit'>SIGN IN</CustomButton>
          
        </form>
      </div>
    )
  }
}

export default SignIn;