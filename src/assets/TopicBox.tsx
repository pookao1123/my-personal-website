import uprightarrow from "./upRightArrow_white.svg"


export default function TopicBox({id , topic}:any){
    return (
        <div style={{display : 'flex' , width : '480px' ,borderTop : 'solid 1px black' ,padding : ' 30px 0 '}}>
            <div style={{width : '10%'}}>
                <h3>{id}</h3>
            </div>
            <div className='Topic-in-boxs'>
                <h1>{topic}</h1>
                <br />
                <div style={{display : 'flex' , justifyContent : "space-between" ,alignItems : 'center'}}>
                    <h6>Explore</h6>
                    <button className="Explore-btn"><img src={uprightarrow} alt="Explore" style={{width : '20px',fill : 'white'}} /></button>
                </div>
            </div>
        </div>
    );
}