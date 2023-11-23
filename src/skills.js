import React from 'react'
import './skill.css'


export default function skills() {
    return (
        <section className='skills'>
                <h2>Skills</h2>
            <div className="skills-content">
                <div className='skill'>
                    <div className='skill-name'>HTML</div>
                    <div className='skill-image'>
                        <img src={process.env.PUBLIC_URL + '/html-5.png'} alt='HTML' />
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>CSS</div>
                    <div className='skill-image'>
                        <img src={process.env.PUBLIC_URL + '/css-3.png'} alt='HTML' />
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>JavaScript</div>
                    <div className='skill-image'>
                        <img src={process.env.PUBLIC_URL + '/js.png'} alt='HTML' />
                    </div>
                </div>
 
                <div className='skill'>
                    <div className='skill-name'>React</div>
                    <div className='skill-image'>
                        <img src={process.env.PUBLIC_URL + '/react.png'} alt='HTML' />
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>Node js</div>
                    <div className='skill-image'>
                        <img src={process.env.PUBLIC_URL + '/html-5.png'} alt='HTML' />
                    </div>
                </div>


            </div>
        </section>
    );
}
