import React from 'react';
import './RecEventCard.css';
import { FaLocationDot } from 'react-icons/fa6';



function RecEventCard(props) {
  const { imgUrl, eventName, date, cityName, weather, distanceKm } = props;

  // Format distance in kilometers
  const formatdistanceKm = (distanceKm / 1000).toFixed(2);

  // Format date nicely
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };



  return (
    <div className="rec-event-card">
      <img
        src={`./src/assets/recomendImages/${imgUrl}.svg`}
        alt={eventName}
        className="rec-event-image"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />

      <div className="rec-event-info">
        <div className="rec-head_date">
          <h3 className="rec-event-name">{eventName || 'Event Name Not Available'}</h3>
          <p className='date'>{date ? formatDate(date) : 'Date Not Available'}</p>
        </div>
        <div className="rec-event-details">
          <div className="rec-location">
            <FaLocationDot style={{ color: 'darkgrey', fontSize: '0.8rem' }} />
            <p className="rec-event-city">{cityName || 'City Not Available'}</p>
          </div>
          <div className="rec-weather-distance">
            <p className="rec-event-weather">{weather || 'Weather Info Not Available'}</p>
            <p className="rec-event-distance">{`${formatdistanceKm} km`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecEventCard;
