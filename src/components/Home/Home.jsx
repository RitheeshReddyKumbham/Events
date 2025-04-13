import React, { useState, useEffect } from 'react'
import RecEventCard from '../RecEventCard/RecEventCard'
import UpEventCard from '../UpEventCard/UpEventCard'
import { HiArrowLongRight } from "react-icons/hi2";
import "./Home.css"

function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recoEvents, setRecoEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch upcoming events
  const fetchUpcomingEvents = async () => {
    try {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
      );
      const data = await response.json();
      setUpcomingEvents(data.events);
      console.log(data.events);
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
    }
  };

  // Fetch recommended events
  const fetchRecoEvents = async () => {
    try {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      const data = await response.json();
      setRecoEvents(data.events);
    } catch (error) {
      console.error("Error fetching recommended events:", error);
    }
  };

  useEffect(() => {
    
    fetchUpcomingEvents();
    fetchRecoEvents();
    setLoading(false); 
  }, []);

  return (
    <div className='root'>
      <div className='Home_page'>
        <h1 className="heading">
          Discover Exciting Events Happening <br /> Near You - Stay Tuned for Updates!
        </h1>
        <p className='para'>
          Stay updated with the latest happenings in your city, from concerts to festivals,
          <br />
          and make the most of your time with unforgettable experiences!
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className='Rec_List'>
          <div className='event_head'>
                <div className='rec_head'>
                  <h3 className='rec_heading'>Recomended Events</h3>
                  <HiArrowLongRight style={{fontSize:"1.8rem"}}/>
                </div>
              <button className='see_all'>See All</button>
            </div>
            <div className='rec-events-list'>
              {recoEvents.length > 0 ? (
                recoEvents.map((event, index) => (
                    <RecEventCard
                    key={index}
                    imgUrl={`RecImg${(index % 7) + 1}`}
                    date={event.date}
                    eventName={event.eventName}
                    cityName={event.cityName}
                    weather={event.weather}
                    distanceKm={event.distanceKm}
                  />
                ))
              ) : (
                <p>No recommended events available</p>
              )}
            </div>
          </div>

          <div className='up_list'>
            <div className='event_head'>
            <div className='rec_head'>
                  <h3 className='up_head'>Upcomming Events</h3>
                  <HiArrowLongRight style={{fontSize:"1.8rem",color:"#000"}}/>
                </div>
              <button className='see_all2'>See All</button>
            </div>
            <div className='up-events-list'>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <UpEventCard key={index} 
                    imgUrl={`RecImg${(index % 7) + 1}`}
                    date={event.date}
                    eventName={event.eventName}
                    cityName={event.cityName}
                    weather={event.weather}
                    distanceKm={event.distanceKm}
                  />
                ))
              ) : (
                <p>No upcoming events available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;