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

    // Shows error if inputs are incorrect
        // const [error, setError] = useState ({
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
        <div id='formInput'>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <div class="label" >
                <label>First Name: </label>
                <input type = "text" name="firstName" onChange={onChangeHandler} />
                    {
                        formData.firstName.length !== 1  ?
                        null: <p>Must be at least 2 characters</p>
                    }
                </div>

                <div class="label" >
                <label>Last Name:</label>
                <input type ="text"  name="lastName" onChange={onChangeHandler} />
                    {
                        formData.lastName.length !== 1  ?
                        null: <p>Must be at least 2 characters</p>
                    }
                </div>    

                <div class="label" >
                <label>Email:</label>
                <input type ="email"  name="email" onChange={onChangeHandler} />
                    {
                        formData.email.length !== 1 ?
                        null: <p>Must be at least 2 characters</p>
                    }
                </div>

                <div class="label" >
                <label>Password:</label>
                <input type ="password"  name="password" onChange={onChangeHandler}  />
                    {
                        formData.password.length !== 7 ?
                        null : <p>Password must be 8 or more characters</p>
                    }
                </div>
                
                <div class="label" >
                <label>Confirm Password:</label>
                <input type ="password"  name="confirmPass" onChange={onChangeHandler}  />
                    {
                        formData.confirmPass.length !== formData.password.length ?
                        null : <p>Passwords must match</p> 
                    }
                </div>

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