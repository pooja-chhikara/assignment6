
 const City=(props)=>{
    const cityText=props.cityData.text
    const citylink=props.cityData.link
    //console.log(props)
    return(
        
            <div className="eat-cities">
               <a href={citylink}>
                <h5 className="value">
        
                {cityText}
                </h5>
               </a>

            </div>
        
    )
}
export default City
