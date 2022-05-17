import React from "react"



export default function Card(props){



  return(
    <div className='Card-Wrapper'>

      <div className='Card-Image-Div'>
        <img className='Card-Image' src={require(`../images/${props.imageUrl}`)}/>
      </div>

      <div className='Card-Details-Wrapper'>
          <div className='Card-Location-Info'>
            <img className='Card-Map-Icon' src={require('../images/Map_Icon.png')} />
            <p className='Card-Location'>{props.location}</p>
            <a href={props.googleMapsUrl}>
            <p className='Card-Maps-Url' >View on Google Maps</p>
            </a>
          </div>

          <div className='Card-Trip-Info-Wrapper'>
            <h2 className='Card-Title'>{props.title}</h2>
            <div className='Card-Date-Wrapper'>
              <p className='Card-Start-Date'>{props.startDate}</p>
              <p>-</p>
              <p className='Card-End-Date'>{props.endDate}</p>
            </div>
            <div className='Card-Description-Div'></div>
              <p className='Card-Description'>{props.description}</p>

          </div>
      </div>

    </div>
  )
}
