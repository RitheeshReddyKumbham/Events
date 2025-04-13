import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import './UpEventCard.css';


function UpEventCard(props) {
  const { imgUrl, eventName, date, cityName, weather, distanceKm } = props;

  const formatdistanceKm = (distanceKm / 1000).toFixed(2);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="event-card">
      <div className="image-wrapper">
        <img
          src={`./src/assets/recomendImages/${imgUrl}.svg`}
          alt={eventName}
          className="event-image"
        />
        <div className="date-overlay">
          {date ? formatDate(date) : 'Date Not Available'}
        </div>
      </div>

      <div className="event-info">
        <h3 className="event-name">{eventName || 'Event Name Not Available'}</h3>
        <div className="event-details">
          <div className="info-line">
            <div className="location">
              <FaLocationDot style={{ color: 'darkgrey', fontSize: '0.8rem' }}/>
              <p className="event-city">{cityName || 'City Not Available'}</p>
            </div>
            <div className='weather-distance'>
            <p className="event-weather">{weather || 'Weather Info Not Available'}</p>
            <p className="event-distance">{distanceKm ? `${formatdistanceKm} km` : 'Distance Not Available'}</p>
            </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default UpEventCard;
