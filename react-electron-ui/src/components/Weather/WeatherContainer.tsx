import { AnyRecord } from "dns";
import { url } from "inspector";
import React, { FunctionComponent, useEffect, useState } from "react";
import { URL, URLSearchParams } from "url";
import "./WeatherContainer.css";

const WeatherContainer: FunctionComponent = () => {
    const [data, setData] = useState<AnyRecord | null>(null);

    const url = new URL('/v1/grid/current/11035');
    url.search = new URLSearchParams({
        parameters: ['RR', 'TLMIN', 'TLMAX']
    }).toString();

    useEffect(() => {
        fetch(url.toString())
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => { 
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="weatherContainer">
            <div className="currentWeatherContainer">

            </div>

            <div className="forecast">

            </div>

        </div>)
}

export default WeatherContainer;
