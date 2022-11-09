import React from 'react'
import card from '../images/card-01.jpg'
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';

export default function Cards({item}) {
    
    return (
        <div className='property'>
            <div className='left' >
                <img src={card} alt="" />
            </div>
            <div className='right'>
                    {/* <h6>OCEAN VIEW STUDENT <br></br> APARTMENT</h6> */}
                    <h6>{item.listing_name}</h6>
                    
                        {/* <LocationOnIcon id="card-con" /> */}
                        <p>{item.city}, {item.country}</p>
                    
                    
                        <p>
                            <SingleBedIcon id="bedroom-con" />
                            <span>{item.total_bed_rooms} Bedrooms</span>
                        
                            <BathtubIcon id="bath-iconnn" />
                            <span>{item.total_bath_rooms} Bathrooms</span>
                        </p>
                    

                    
                        <p><strong>Ideal for: </strong> Sufers and ESAN, UDEP, and UTEC  students. <br></br> <strong>Features:</strong> Best Location in Miraflores. 4 bedrooms and balcony have views of the Pacific Ocean. </p>
                    
            </div>
            <div className='price'>$400</div>
        </div>
    )
}
