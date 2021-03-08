
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Form(props) {
    let history = useHistory();
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
        setFormValues(initialFormValues);
        history.push('/');
    }
    return (
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="">
                Name:
                <input type="text" name="name" onChange={inputHandler}/>
            </label>
            <label htmlFor="">
                Email:
                <input type="text" name="email" onChange={inputHandler}/>
            </label>
            <label htmlFor="">
                Role:
                <input type="text" name="role" onChange={inputHandler}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default Form;