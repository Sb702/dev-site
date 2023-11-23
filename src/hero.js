import React, { useEffect, useRef } from 'react'
import Skills from './skills'

export default function Hero() {
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        const h1Text = "I'm a Front End Developer";
        const pText = "Welcome to my website! I specialize in creating beautiful and responsive user interfaces using the latest web technologies.";

        let h1Index = 0;
        let pIndex = 0;

        function type() {
            if (h1Index < h1Text.length) {
                h1Ref.current.innerText = h1Text.slice(0, h1Index+1);
                h1Index++;
                setTimeout(type, 60); // adjust the speed of typing here
            } else if (pIndex < pText.length) {
                pRef.current.innerText = pText.slice(0, pIndex+1);
                pIndex++;
                setTimeout(type, 70); // adjust the speed of typing here
            }
        }

        type();
    }, []);

    return (
        <div>
            <section className='hero'>
                <div className="hero-content">
                    <h1 ref={h1Ref}><span className="visually-hidden"> </span></h1>
                    <p ref={pRef}><span className="visually-hidden"> </span></p>
                </div>
                <Skills />
            </section>
        </div>
    )
}