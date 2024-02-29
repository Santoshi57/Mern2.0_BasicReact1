
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'

const Home  = () =>{
    return(
        <>
        <nav>
        <div className="container">
            <h1>My Website</h1>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div className="container">
        <h2>Welcome to our website!</h2>
        <p>This is the homepage content.</p>
    </div>
        
        </>
    )
}
export default Home