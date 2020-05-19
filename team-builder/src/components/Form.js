import React from 'react';

export default function Form( props ) {
    const { values, onInputChange, onSubmit } = props;
    return (
        <form onSubmit={ onSubmit }>
            <div>
                <h2>Add Member</h2>
                <button>Submit</button>
            </div>

            <div>
                <h4>Member Information</h4>

                <label>Name:&nbsp;
                    <input type="text"
                    placeholder="Name"
                    name="name"
                    value= { values.name }
                    onChange= { onInputChange } 
                    />
                </label>

                <label>Email:&nbsp;
                    <input type="text"
                    placeholder="example@email.com"
                    name="email"
                    value= { values.email }
                    onChange= { onInputChange } 
                    />
                </label>

                <label>Role:&nbsp;
                    <select name='role' value={ values.role } onChange={ onInputChange }>
                        <option value="">Select a role</option>
                        <option value="Front-End">Front End Engineer</option>
                        <option value="Back-End">Back End Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}