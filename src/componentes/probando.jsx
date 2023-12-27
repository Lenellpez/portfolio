import Proyecto1 from '../assets/proyecto1.jpeg'

const projects = [
    {
      title: 'markePlace',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
      image: Proyecto1,
    },
    {
        title: 'markePlace',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
        image: Proyecto1,
      },
      {
        title: 'markePlace',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis impedit tenetur quidem...',
        image: Proyecto1,
      },
    // Agrega más proyectos según sea necesario
  ];
export default  function Probando () {

  return(          
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-gray-900 rounded-lg shadow-2xl"
        >
          <img
            className="w-full h-48 object-cover object-center"
            src={project.image}
            alt={`${project.title} screenshot`}
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Visit project
              </a>
              <a
                href="https://github.com/Lenellpez/proyecto_marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white"
              >
                Repository <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  )

}