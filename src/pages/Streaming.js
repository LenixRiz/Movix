import Comments from '../components/comment'
import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'


const Streams = () => {
    return (
        <div>
            <NavBar/>
            <h1>Streaming</h1>
            <Comments />
            <Footer/>
        </div>
    )
}

export default Streams