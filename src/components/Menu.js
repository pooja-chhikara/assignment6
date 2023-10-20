const MindMenu=(props)=>{
    const {menuData} =props
    //console.log(menuData.imageId)
    const {text,link}=menuData?.action
    imglink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+menuData.imageId
    // console.log(link)
    return(
        <div className='Mtype'>
            <a href={link}>
            <img className="typelogo" src={imglink}/>
            {/* <h3>{text}</h3> */}
            </a>
        </div>
    )
}
export default MindMenu