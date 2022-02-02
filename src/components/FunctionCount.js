import React, { useState, useEffect } from 'react';

function FunctionCount() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Mise à jour du titre via useEffect');
        document.title = `Vous avez cliquez ${count} fois`
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
        </div>
    )
}

export default FunctionCount;
