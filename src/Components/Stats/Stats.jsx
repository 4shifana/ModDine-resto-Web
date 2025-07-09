import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '25+', label: 'Years Experience', color: 'rose' },
    { number: '100+', label: 'Signature Dishes', color: 'orange' },
    { number: '50K+', label: 'Happy Customers', color: 'rose' },
    { number: '15+', label: 'Awards Won', color: 'orange' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className={`stat-number ${stat.color}`}>{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
