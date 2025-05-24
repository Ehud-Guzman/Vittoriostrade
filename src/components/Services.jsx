import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    {
      title: 'Commodity Trading & Logistics',
      items: [
        'Sourcing and supplying cereals (e.g., maize, wheat, rice)',
        'Coordinating transportation and distribution within East Africa',
        'Ensuring quality control and compliance with market standards',
      ],
    },
    {
      title: 'Clearing & Forwarding',
      items: [
        'Handling customs clearance at Kenya-Uganda and Uganda-Rwanda borders',
        'Ensuring compliance with regional trade regulations',
        'Providing efficient documentation and freight forwarding services',
      ],
    },
    {
      title: 'Import & Export Logistics',
      items: [
        'Facilitating smooth import and export processes',
        'Assisting businesses in navigating trade policies and tariffs',
        'Providing end-to-end supply chain solutions',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} items={service.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;