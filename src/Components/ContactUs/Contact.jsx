import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: (
        <>
          ModDine<br />
          Ernakulam District<br />
          Fort Kochi Street
        </>
      )
    },
    {
      icon: Phone,
      title: 'Reservations',
      content: (
        <>
          (+91) 9876543456<br />
          reservations@ModDine.com<br />
          Book online 24/7
        </>
      )
    },
    {
      icon: Clock,
      title: 'Hours',
      content: (
        <>
          Tuesday - Thursday: 5:00 PM - 10:00 PM<br />
          Friday - Saturday: 5:00 PM - 11:00 PM<br />
          Sunday: 4:00 PM - 9:00 PM<br />
          <span className="closed">Closed Mondays</span>
        </>
      )
    }
  ];

  return (
    <section className="contact-section" id="contact"> {/* ✅ Added id="contact" */}
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">Visit Us</span>
          <h3 className="contact-title">Experience ModDine</h3>
          <p className="contact-description">
            Reserve your table for an unforgettable culinary journey
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">
                <info.icon size={32} />
              </div>
              <h4 className="contact-card-title">{info.title}</h4>
              <p className="contact-card-content">{info.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
