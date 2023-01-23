import '../../App.css';
import React, { useState } from 'react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    // eslint-disable-next-line
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email }),
        });
        const data = await response.json();
        console.log(data);
        } catch (err) {
        console.error(err);
        }

    return (
        <div className='sign-up'>
            <h1>Sign Up for Exclusive Updates and Offers</h1>
            <form onSubmit={handleSubmit}>
            <label>
                First Name:
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <button type="submit">Sign Up</button>
            </form>
            <p>Be the first to know about new products, sales and exclusive promotions.</p>
        </div>
    );
}     }

export default Signup;

