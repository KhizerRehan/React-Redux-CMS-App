import React, { useEffect } from 'react'

function FunctionalComponent () {

    useEffect(()=>{
        console.log('useEffect is used for functional components to handle state and sideEffect');
        
        // An empty[] as a second argument to effect means 
        // the effect will run once when the component mounts:

    },[]);

    return (
        <div>
            <h1>Testing Functional Component</h1>
        </div>
    )
      
}

export default FunctionalComponent;