import React, { useEffect, useRef } from 'react';
import './Home.css';
import { init } from 'ityped'
import me from '../../images/me.png'

const Home = () => {
    const textRef = useRef();
    useEffect(()=>{
    init(textRef.current,{
        showCursor: true,
        backDelay:1500,
        backSpeed:70,
        strings:["Developer"]
    })
    },[])
    return (
        <div className="home" id="home">
            <div className="left">
            <div className="imgContainer">
             <img className="imge" src={me} alt="" />
            </div>
            </div>
            <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Anowar Hossain</h1>
                <h3>Front End <span ref={textRef}></span></h3>
            </div>
            
            </div>
            
        </div>
    );
};

export default Home;