import React from 'react';

import FormInput from '../form-input/form-input.componet';
import CustomButton from '../custom-button/custon-button.componets'

import './sign-in.style.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '' ,
            password: '' 

        }

    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.state({email: '', password: ''})
            
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I alrready have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} 
                    handleChange={this.handleChange} label="email" required />
                    
                    <FormInput name="password" type="password" value={this.state.password}
                    handleChange={this.handleChange} label="password" required />
                    

                    <CustomButton type="submit"> Sign in </CustomButton>
                </form>

                
            </div>
        )
    }
}

export default SignIn;