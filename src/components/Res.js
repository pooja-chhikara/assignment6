import { CDN_URL } from "../utils/constants";

const RestCard=(props)=>{
    // const {name,cuisine,rating,Eta,resData}=props;
  
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.info
    //console.log(resData.info.sla.deliveryTime)
    return(
        <div className='res-card' style={{backgroundColor:"#80c0c0"}}>

            <img className="res-logo"
             src={CDN_URL+resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(' , ')}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime+" minutes"}</h5>
        </div>
    )
 }
 export default RestCard