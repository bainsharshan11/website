export default function Gallery() {
  const projects = [
    {
      title: 'Interior Demolition',
      description: 'Complete interior gutting and debris removal',
      image: '/img_8384.jpg',
    },
    {
      title: 'Bathroom Renovation Demo',
      description: 'Precision bathroom demolition for renovations',
      image: '/img_8398.jpeg',
    },
    {
      title: 'Structural Demo Work',
      description: 'Selective demolition exposing framework',
      image: '/img_8217.jpeg',
    },
    {
      title: 'Complete Room Teardown',
      description: 'Full room demolition and material removal',
      image: '/img_8250.jpeg',
    },
    {
      title: 'Debris Removal Service',
      description: 'Efficient hauling and disposal of demo materials',
      image: '/img_8623.jpg',
    },
    {
      title: 'Kitchen Renovation Demo',
      description: 'Kitchen demolition preparing for full remodel',
      image: '/img_8768.png',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our completed demolition and excavation projects. From small residential jobs to larger commercial sites, we bring the same level of care and professionalism to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
