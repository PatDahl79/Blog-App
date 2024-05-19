import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Banner from '../../assets/Anima1.png'

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src={Banner} alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl mb-3 text-white font-bold'>Welcome to Our ADHD Blog</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Discover insights, stories, and support for those living with ADHD. 
                            <br></br>Find expert advice, personal experiences, and the latest research to help you navigate your ADHD journey.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection