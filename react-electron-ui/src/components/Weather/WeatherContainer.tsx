import { AnyRecord } from "dns";
import React, { FunctionComponent, useEffect, useState } from "react";
import "./WeatherContainer.css";

const WeatherContainer: FunctionComponent = () => { 
   const [data, setData] = useState<AnyRecord | null>(null);

   useEffect(() => {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Vienna&limit=5&appid=')
      .then((response) => {
        if (!response.ok) {
                    console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); 

    return (
        <div className="weatherContainer">
            <div className="currentWeatherContainer">

                <div>

                
                </div>

            </div>

            <div className="forecast">

            </div>

        </div>)
}

export default WeatherContainer;
