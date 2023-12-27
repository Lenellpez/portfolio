import {BsLinkedin,BsEnvelopeArrowUp,BsGithub} from 'react-icons/bs';
import HeroPic from '../assets/me.jpeg'

const hero=() =>{

    return(
       <section className='flex justify-around items-center p-10 space-x-10 
       lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>Hello! I'm ...</p>
            <h1 className='text-6xl'>Leonel M. Lopez</h1>
            <hr />
            <p className='mt-10  text-slate-300 font-sans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="me" width={250} height={250} 
            className='rounded-full w-full border-8 border-white'/>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About me</p>
            <p className='text-slate-300'>Let's build quality in programming ad desing with
                our services
            </p>
            <button  className='bg-white text-indigo-600 px-10 py-2 my-3 
            rounded-full hover:bg-indigo-800 hover:text-white'>
                show more...
            </button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
            <a href="https://www.linkedin.com/in/leonel-mendez982/" target="_blank"> <BsLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full'/></a>
              <a href="mailto:leonelrogeliomendez@gmail.com?subject=Asunto&body=Hola leonel! te escribo desde tu website" target="_blank">
              <BsEnvelopeArrowUp size={40} className='border-4 hover:border-indigo-800 rounded-full' /> </a>
             <a href="https://github.com/Lenellpez" target="_blank" ><BsGithub size={40} className='border-4 hover:border-indigo-800 rounded-full'/></a> 
            </div>
        </div>
       </section>
    )

}

export default hero