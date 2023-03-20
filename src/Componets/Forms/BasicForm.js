import React, { useState } from 'react'
import Style from '../Forms/BasicForm.module.css'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password};

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

    return (
        <>
        <form action="" onSubmit={submitForm}>
            <div className={Style.container}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={Style.container}>
                <label htmlFor="Password">Password</label>
                <input type="password" name='Password' id='Password' autoComplete='off'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit'>Login</button>
        </form>

        
        </>

    )
}

export default BasicForm
