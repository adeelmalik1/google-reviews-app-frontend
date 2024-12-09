import React from 'react';
import '../../assets/css/dashboard-card.css';

const DashboardCard = ({ icon: Icon, title, description, cardColor }) => {
  return (
    <div
      className="card-body-count flex-xl-column flex-xxl-row flex-row gap-3 bookings-card px-4"
      style={{ backgroundColor: cardColor }}
    >
      {Icon && <Icon width='50px' height='50px' className="card-icon m-0" />}
      <div className="text-xl-center text-xxl-left">
        <h4 className="card-title cut-text text-light">test</h4>
        <h1 className="card-description  m-0 text-light">
          test
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;
