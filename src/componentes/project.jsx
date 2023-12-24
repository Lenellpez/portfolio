import { BsDribbble } from "react-icons/bs";
import Proyecto1 from '../assets/proyecto1.jpeg';
/*
const projects = [
    {
      title: 'markePlace',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
      image: Proyecto1,
    },
    {
      title: 'Gestion Biblioteca',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
      image: Proyecto1,
    },
    {
      title: 'Proximamente',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
      image: Proyecto1,
    },
    {
      title: 'Proximante',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
      image: Proyecto1,
    },
  ];
*/
export default function Project(){
    return(
        <div className="bg-indigo-800 m-20 max-w-full">

            <div className="grid justify-items-center m-10">
                <h1 className="text-3xl text-white mt-10  " >Proyectos</h1>
            </div>

            <div >

              <div className="grid grid-cols-2 gap-4 p-5">
                
                  <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl
                  hover:animate-pulse'>

                    <div className='md:flex'>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500
                            font-semibold">
                                markePlace
                            </div>
                             <a href="#">Subheading</a>
                              <p className="mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Quae perspiciatis impedit tenetur quidem, magnam praesentium ut sit quis ipsum delectus quaerat sint id nisi tempore magni porro unde dolorem omnis!
                              </p>
                        </div>

                        <div className="md:shrink-0 p-5">
                            <img src={Proyecto1} alt="proyecto1" width={250} height={250}/>
                        </div>
                    </div>

                  </div>

                  <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl
                  hover:animate-pulse'>

                    <div className='md:flex'>

                    <div className="md:shrink-0 p-5">
                            <img src={Proyecto1} alt="proyecto1" width={250} height={250}/>
                        </div>

                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500
                            font-semibold">
                               Gestion Biblioteca
                            </div>
                             <a href="#">Subheading</a>
                              <p className="mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Quae perspiciatis impedit tenetur quidem, magnam praesentium ut sit quis ipsum delectus quaerat sint id nisi tempore magni porro unde dolorem omnis!
                              </p>
                        </div>
                    </div>

                  </div>

              </div>

              <hr/>

              <div className="grid grid-cols-2 gap-4 p-5">
                
                  <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl 
                  hover:animate-pulse'>

                    <div className='md:flex'>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500
                            font-semibold">
                                Proximamente
                            </div>
                             <a href="#">Subheading</a>
                              <p className="mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Quae perspiciatis impedit tenetur quidem, magnam praesentium ut sit quis ipsum delectus quaerat sint id nisi tempore magni porro unde dolorem omnis!
                              </p>
                        </div>

                        <div className="md:shrink-0 p-5">
                            <img src={Proyecto1} alt="proyecto1" width={250} height={250}/>
                        </div>
                    </div>

                  </div>

                  <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl
                  hover:animate-pulse'>

                    <div className='md:flex'>

                    <div className="md:shrink-0 p-5">
                            <img src={Proyecto1} alt="proyecto1" width={250} height={250}/>
                        </div>

                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500
                            font-semibold">
                                Proximante
                            </div>
                             <a href="#">Subheading</a>
                              <p className="mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Quae perspiciatis impedit tenetur quidem, magnam praesentium ut sit quis ipsum delectus quaerat sint id nisi tempore magni porro unde dolorem omnis!
                              </p>
                        </div>
                    </div>

                  </div>

              </div>

            </div>

            

        </div>
    )
}