import React from "react"



export default function Card(props) {

    let badgeText
      if (props.openSpaces ===0){
        badgeText = "SOLD OUT"
      }else if (props.location ==="Online"){
        badgeText = "ONLINE"
      }

    return (
          <div className='Card'>
              {
                badgeText &&
                <div className='Card-Image_Soldout'>{badgeText}</div>
              }
              <img
                src={require(`../images/${props.img}`)}
                className="Card-Image" alt='eh'
              />
              <div className='Card-Rating-and-Location'>
                <p className='Card-Rating'>{props.stats.rating}</p>
                <p className='Card-Seen'>({props.stats.purchased})</p>
                <p className='Card-Location' >-{props.location}</p>
              </div>
              <p className = 'Card-Descript'>{props.description}</p>
              <div className='Card-Cost-Ratio'>
                <p className='Card-Cost'>From ${props.cost}</p>
                <p className='Card-Denominator'>{props.denominator}</p>
              </div>
          </div>
    )
}
