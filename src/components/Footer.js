import City  from "./City"
import { Cuisines } from "./Cuisines"
import { Restaurant } from "./RestrauantL"
//import { CityList } from "../utils/cityData"
export const Footer=(props)=>{
    const CityList=props?.data
    const CuisineList=props?.cuisine
    const ExploreList=props?.explore
    //console.log(props)
    return(
        
        <div className="footer">
            <div className="footer1">
            
            <h3>
                Best Places To eat Across Cities
            </h3>
            <div className="city-con">
       { CityList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c} key={index} />
       )) }
   
    
   
            </div>
           
        </div>
        <div className="footer2">
            
            <h3>
                Best Cuisine near Me
            </h3>
            <div className="city-con">
            { CuisineList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c}  key={index}/>
       )) }
        </div>
        </div>
        <div className="footer3">
            
            <h3>
                Explore Every Restraurant Near Me
            </h3>
            <div className="city-con">
       { ExploreList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c} key={index} />
       )) }
   
    
   
            </div>
        </div>
        </div>
    )
}