import React from 'react';
import './pages.css';

const Services = () => {
  const servicesData = [
    { name: "SEO", features: ["Keyword research", "On-page optimization", "Link building"] },
    { name: "Web maintenance and hosting", features: ["Security updates", "Nightly Data Backup", "300% offset with renewable energy"] },
    { name: "Domain services", features: ["Domain registration", "Domain transfer", "Domain privacy"] }
  ];

  return (
    <div>
  <h1>Our Services</h1>
  <div className="services-container">
    {servicesData.map((service, index) => (
      <div className="service-box" key={index}>
        <h2>{service.name}</h2>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  
 </div>

  );
};

export default Services;
