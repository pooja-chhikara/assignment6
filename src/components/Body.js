import RestCard from './res';
import MindMenu from './menu';
import { Shimmer } from './shimmer';
import { useState,useEffect } from 'react';
import { Footer } from './Footer';
//{name,cuisine,rating,Eta} and use it like name , cuisine etc 



const Body=()=>{


const [listOfRestraunant,setListOfRestraunant]=useState([]);
const [filteredList,setFilteredList]=useState([])
const [TList,setTList]=useState([])
const [CityData,setCityData]=useState([])
const [CuisineData,setCuisineData]=useState([])
const [ExploreData,setExploreData]=useState([])

const [searchData,setSearchData]=useState("")

useEffect(()=>{
    fetchData()
},[])

const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.495686&lng=73.952336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const json=await data.json();
    //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    const listdata=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestraunant(listdata)
    setFilteredList(listdata)
    //console.log(json.data.cards[9].card.card.brands)
    const toplist=json.data.cards[1].card.card.imageGridCards.info
    setTList(toplist)
    const cityData=json.data.cards[7].card.card.brands
    setCityData(cityData)
    const cuisine=json.data.cards[8].card.card.brands
    setCuisineData(cuisine)
    const explore=json.data.cards[9].card.card.brands
    setExploreData(explore)
    

}


let filterDData=(list)=>{
         list=list.filter(r=>(
            r.info.sla.deliveryTime<25
             ))
            // setListOfRestraunant(list)
            setFilteredList(list)
}

let filterData=(list)=>{
//filter logic or sorting algo


list=list.filter(r=>(
r.info.avgRating>4
 ))
 //setListOfRestraunant(list)
 setFilteredList(list)
//console.log(list)

}
let filterSearch=(text,list)=>{
    console.log(text.toLowerCase().trim())
    // text=text.toLowerCase().trim()
const  filterlist=   list.filter(val=>
   
val.info.name.toLowerCase().includes(text.toLowerCase())
    )
    console.log(filterlist)
    setFilteredList(filterlist)

   
}
//conditional rendering
    if(listOfRestraunant.length===0){
        return(
            <Shimmer/>
        )
    }
    return (!listOfRestraunant)?<Shimmer/>
    :
    (
        <div className='body'>
            <div className='filter-con'>
            <div className='search'> 
                <input className="input"
                placeholder='enter restaurant name here'
              
                onChange={(e)=>{setSearchData(e.target.value) ,console.log(searchData)}}
                value={searchData}
                >

                </input>
                <button className='search-btn' 
                onClick={()=>{filterSearch(searchData,listOfRestraunant)
                }}
                >
                    Search
                </button>
            </div>
            <div className='filter'>
                <button className='filter-btn' 
                onClick={()=>{filterData(listOfRestraunant)}}
                onMouseOver={()=>{
                    console.log("ya you can click here")
                }}
                >
                    Top Rated Restaurants </button>
           
            <button className='filter-btn' 
                onClick={()=>{filterDData(listOfRestraunant)}}
                onMouseOver={()=>{
                    console.log("ya you can click here")
                }}
                >
                    Early Delivery Restaurants </button>
                    </div>
                    </div>
            <div className='top'><b>What's On Your Mind</b>
            <div className='top-con'>
            {
                TList.map(v=>(
                    <MindMenu menuData={v} key={v.id} />
                ))
            }
            </div>
          </div>
            <div className='middle'>
                <b>Top Restraurants In Your Area For Online Delivery</b></div>
            <div className='res-con'>
              {filteredList.map(d=>(
                <RestCard resData={d} key={d.info.id} / >
              ))} 
            
            </div>
            <div>
                <Footer data={CityData} cuisine={CuisineData} explore={ExploreData}/>
            </div>
        </div>
    )
}
export default Body