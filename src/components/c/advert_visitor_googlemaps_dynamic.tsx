
import GoogleMapReact from 'google-map-react';

import { useState } from 'react';
import { RiMapPinFill } from "react-icons/ri";


const AnyReactComponent = ({ text }) => <div style={{position:"relative"}}>
                      <RiMapPinFill size={"4rem"} color="#d50606" style={{position:"absolute", bottom:0, left:-30}}/>                      
          </div>;

export const Advert_Visitor_Googlemaps_Dynamic = (props) => {

  let {advert} = props ?? {}

  console.log("advert:::", advert);

  let lat=advert?.bigdata?.history[0]?.info?.coordinate?.lat
  let lng=advert?.bigdata?.history[0]?.info?.coordinate?.lng

  const defaultProps = {
    center: {
      lat,//:40.768499284222635,
      lng,//:30.368214750269903
    },
    zoom: 13
  };

  const [coordinate, setcoordinate] = useState({lat:"", lng:""})


  return (       
          <div style={{ height: '100vh', width: '100%' }}> 
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBpnXwpN7TVOhjglEqdaE2zeA5szynZvH0" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}    
                    mapType="Terrain" // Olmadı ???
                    yesIWantToUseGoogleMapApiInternals
                    // layerTypes={['TrafficLayer', 'TransitLayer']}
                    onClick={(e)=> {  setcoordinate({lat: e.lat, lng:e.lng }); } }          
                  >
                        <AnyReactComponent
                          lat={lat} 
                          lng={lng}
                          text="My Marker"
                        />
                  </GoogleMapReact>
          </div>
  )
}


export default Advert_Visitor_Googlemaps_Dynamic