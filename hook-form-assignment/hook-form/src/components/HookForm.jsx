import React, { useState } from 'react';
import './HookForm.css';
import DisplayForm from './DisplayForm';


const HookForm = (props) => {
        const [formData, setFormData] = useState ({
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            confirmPass:''
        })

        // const [formDataError, setFormDataError] = useState ({
        //     firstNameError: '',
        //     lastNameError: '',
        //     emailError: '',
        //     passwordError: '',
        //     confirmPassError: ''
        // })
        
        const onChangeHandler = (e) => {
            console.log(e.target.name);
            console.log(e.target.value);
            setFormData({...formData, [e.target.name]: e.target.value})
        }

        const handleSubmit = (e) => {
                e.preventDefault();
            }


    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>

                <label>First Name: </label>
                <input type = "text" name="firstName" onChange={onChangeHandler} />
                    {
                        formData.firstName.length < 2 ?
                        <p>Must be at least 2 characters</p>:
                        null 
                    }

                <label>Last Name:</label>
                <input type ="text"  name="lastName" onChange={onChangeHandler} />
                    {
                        formData.lastName.length < 2 ?
                        <p>Must be at least 2 characters</p>:
                        null
                    }

                <label>Email:</label>
                <input type ="email"  name="email" onChange={onChangeHandler} />
                    {
                        formData.email.length < 5 ?
                        <p>Must be at least 5 characters</p>:
                        null
                    }

                <label>Password:</label>
                <input type ="password"  name="password" onChange={onChangeHandler}  />
                    {
                        formData.password.length < 8 ? 
                        <p>Password must be 8 or more characters</p>:
                        null 
                    }

                <label>Confirm Password:</label>
                <input type ="password"  name="confirmPass" onChange={onChangeHandler}  />
                    {
                        formData.password.length !== formData.confirmPass.length ?
                        <p>Passwords must match</p>:
                        null
                    }

                <button>Submit</button>
            </form>
            <DisplayForm
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            />
        </div>    
    )
}

export default HookForm;