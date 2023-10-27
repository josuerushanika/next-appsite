'use client';

import { useState, useEffect } from "react";

// https://spotify-api-wrapper.appspot.com/artist/david-kando

export default function Followers() {
   const [goalString, setGoalString ] = useState("?/?");

   useEffect(() => {
    fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando')
     .then(response => response.json())
     .then(json => {
        console.log(`json`, json);
     })

   }, [])

    return (
        <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
            Followers progress: {goalString}</div>
    )
}