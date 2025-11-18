import React from 'react'


//The map() method is a JavaScript array function that creates a new array by calling a provided function on every element in the original array. In React, it's primarily used for rendering lists of data to the UI

function MapFilter() {

  const hello = ["Hii","say","he"];

  return (
    <div>
        <ur>
          {hello.map((hello) => (
            <li>{hello}</li>
          ))}
        </ur>
    </div>
  )
}

export default MapFilter