import React from 'react'
import "./SignupForm.css"
import { useEffect,useCallback, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {

    const loginhandler = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        console.log(email, password)
    }

    const images = [
        { src: "data:image/jpeg;base64,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", caption: 'Creating Memories, Capturing Moments' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWYFUdi3htkLkQs8yLn07JR5aNbO7JlaNfw&s', caption: 'Explore the World, One Step at a Time' },
        { src: 'data:image/png;base64,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', caption: 'Embrace Adventure, Discover Places' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isManual, setIsManual] = useState(false);
    // const goToNextSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };
    const goToNextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, [images.length]);
      
    // Automatic slide transition every 3 seconds
    useEffect(() => {
        if (!isManual) {
            const interval = setInterval(() => {
                goToNextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isManual, goToNextSlide]);

    // Reset `isManual` after 5 seconds of inactivity
    useEffect(() => {
        if (isManual) {
            const timeout = setTimeout(() => setIsManual(false), 5000);
            return () => clearTimeout(timeout);
        }
    }, [isManual]);

    // Manual navigation handlers
    const goToPreviousSlide = () => {
        setIsManual(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlideManual = () => {
        setIsManual(true);
        goToNextSlide();
    };

    return (
        <div id='signupContainer'>
            <div id='signupCardContainer'>
                <div id='leftSidebar'>
                    <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />


                    {/* Navigation Buttons */}
                    <button className="prev-button" onClick={goToPreviousSlide}>
                        &#10094; {/* Left arrow */}
                    </button>
                    <button className="next-button" onClick={goToNextSlideManual}>
                        &#10095; {/* Right arrow */}
                    </button>

                    {/* Dots for Slide Navigation */}
                    <div className="dots-container">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsManual(true);
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
                <div id='rightSidebar'>
                    <p id='heading'>
<<<<<<< HEAD
                    Login to your account.
=======
                        Connect with Us—Your Dashboard Awaits!
>>>>>>> 3847b54069e5bf96595316e2c6393d92cd140b73
                    </p>
                    <form onSubmit={loginhandler} className='input-container'>
                        <input className='inputfield' id='Email' type='email' placeholder='Email'></input>
                        <input className='inputfield' id='pass' type='password' placeholder='Password' ></input>
                        <button className='login-button'>
                            Login
                        </button>
                    </form>
                    <Link to="/Signup">
                        <span id='register'>
                            Don't have an account?
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    )
}
