
import {useState} from 'react';
function Form(props) {
    const addMember = props.addMember;
    const initialFormValues = {
        name: '',
        email: '',
        role: ''
    }
    
    const [formValues, setFormValues] = useState(initialFormValues);
    const inputHandler = event => {
        const {name} = event.target;
        const {value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    const submitHandler = event => {
        event.preventDefault();

        addMember(formValues);
    }
    return (
        <form action="">
            <label htmlFor="">
                Name:
                <input type="text" name="name" onChange={inputHandler}/>
            </label>
            <label htmlFor="">
                Email:
                <input type="text" email="email" />
            </label>
            <label htmlFor="">
                Role:
                <input type="text" role="role" />
            </label>
            <input type="submit" value="submit" onSubmit={submitHandler}/>
        </form>
    );
}

export default Form;