import React from 'react';

export default function Form(props) {
    const { submitHandler, inputHandler, formValues } = props;

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h1>Members List</h1>
                <button>Submit</button>
            </div>

            <label>Name:&nbsp;
                <input type="text"
                        placeholder="Enter a name."
                        name="name"
                        values={formValues.name}
                        onChange={inputHandler}
                />
            </label>

            <label>Email:&nbsp;
                <input type="text"
                        placeholder="Enter an email."
                        name="email"
                        values={formValues.email}
                        onChange={inputHandler}
                />
            </label>

            <label>Role:&nbsp;
                <select name="role" values={formValues.role} onInput={inputHandler}>
                        <option value="">Select a role</option>
                        <option value="Front-End" name="Front-End">Front End Engineer</option>
                        <option value="Back-End" name="Back-End">Back End Engineer</option>
                        <option value="Designer" name="Designer">Designer</option>
                </select>
            </label>
        </form>
    )
}