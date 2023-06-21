import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const dispatch = useDispatch();

    // const val = useContext(UserContext);

    console.log(formFields);
    console.log('hit');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Cannot create user, email already in use");
            } else {
                console.log("User created encountered an error ", error);
            }
        }

        // await createAuthUserWithEmailAndPassword(email, password);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>

            <span>
                Sign up with your email and password
            </span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;