import './App.css'
import CircleIcon from './assets/Circle_icon'
import WebHeaderIcon from './assets/Web_header_icon'
import FigureBTN from './assets/Figure_Btn'
import paperplanlogo from "./assets/paperplanlogo.svg"
import upRightArrow from "./assets/upRightArrow.svg"

function App() {
  const mainstyle = {
    display : 'flex' ,
    flexwarp : 'warp'
  };
  const articleStyle = {
    flexgrow : 1 ,
    width : '800px',
    padding : '50px' 
  }



  return (
    <>
      <div className="container">
        <nav>
          <WebHeaderIcon title="Myapp"/>
          <div className="nav-list">
            <ul>
              <li>About</li>
              <li>Serviecs</li>
              <li>Portfolio</li>
              <li>Etc.</li>
            </ul>
          </div>
          <div className="nav-input">
            <input type="text" />
            <button></button>
          </div>
        </nav>
        <main style={mainstyle}>

          <article style={articleStyle}>
            <div className="side-title">
              <h6>Hello!</h6>
              <h1>We have Design Exp.</h1>
              <br />
              <p>---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laboriosam ipsam delectus itaque eius laudantium deserunt repellendus fugiat dolores temporibus quod repellat amet harum, ex reiciendis mollitia corporis nostrum rerum!</p><br />
            </div>
            <figure className='figure-box'>
              <FigureBTN title="Let's Talk" src={paperplanlogo} width={20}/>
              <FigureBTN title="Portfolio" src={upRightArrow} width={20}/>
            </figure>

            <section className='section-btn'>
              <br />
              <h6>Check out my</h6>
              <CircleIcon/>
              <CircleIcon/>
              <CircleIcon/>
            </section>

          </article>


          <aside className="aside-img">
            <p>"People ignore design that ignore people"</p>
            <button></button>
          </aside> 

        </main>
      </div>
    </>
  )
}

export default App
