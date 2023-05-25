import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full h-screen text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">Hi, my name is Neeraj and I am currently pursuing my Master's in Computer Applications from National Institute of Technology, Bhopal. With my expertise in frontend development and ongoing efforts to learn new tech stacks like Node.js, I am aiming to expand my skill set and delve into backend development to broaden my career prospects. I am passionate about creating robust and efficient web applications that deliver great user experiences.
                    </p>

                    <p>By combining my frontend knowledge with backend development skills, I strive to become a well-rounded full-stack developer capable of building end-to-end solutions. I am excited about the opportunities that lie ahead and look forward to making a positive impact in the world of software development."</p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I'm excited to learn and grow in this field, and I believe that together, we can create amazing projects that make a difference. Let's embark on this journey together and explore the exciting world of web development!</p>

                    <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8'>
                        See more
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
