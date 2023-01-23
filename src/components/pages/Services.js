import React, { useState } from 'react';

const Services = () => {
  const servicesData = [
    { name: "SEO", features: ["Keyword research", "On-page optimization", "Link building"] },
    { name: "Web maintenance and hosting", features: ["Security updates", "Nightly Data Backup", "300% offset with renewable energy"] },
    { name: "Domain services", features: ["Domain registration", "Domain transfer", "Domain privacy"] }
  ];
  // eslint-disable-next-line
  const [services, setServices] = useState(servicesData);

  return (
    <div>
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <div key={index}>
          <h2>{service.name}</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
