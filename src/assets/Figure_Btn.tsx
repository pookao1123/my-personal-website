
export default function FigureBTN({title , src , width} : any){
    return (
        <div className="figure-btn-1">
            <h6>{title}</h6>
            <img src={src} alt="logo" width={width} />
        </div>
    );
}

