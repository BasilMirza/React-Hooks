import React, { useEffect, useState } from 'react'

function Hook2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating Document Title')
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)}></input>
            <button onClick = {() => setCount(count+1)}> Click {count} Times </button>
            
            
        </div>
    )
}

export default Hook2
