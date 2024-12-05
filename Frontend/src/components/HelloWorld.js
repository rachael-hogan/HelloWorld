import React, { useState } from 'react';

const HelloWorld = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    // Function to handle GET request
    const fetchHelloWorld = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/helloWorld');
            const data = await response.json();
            setMessage(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postName = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/${name}`, {
                method: 'POST',
            });
            const data = await response.json();
            setMessage(data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h1>API Interaction</h1>
            <button onClick={fetchHelloWorld}>Fetch Hello World</button>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a name"
                />
                <button onClick={postName}>Post Name</button>
            </div>
            <div>
                <p>Response:</p>
                <pre>{message}</pre>
            </div>
        </div>
    );
};

export default HelloWorld;
