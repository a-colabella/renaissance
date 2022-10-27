import './Home.css';
import logo from '../assets/logo.png'
import Animation from './animation/Animation';

const Home = () => {
    return (
      <div className="home">
        <div className="info-container">
            <div className="logo-section">
                <img className="logo-image" alt={logo} src={logo}/>
                <h1 className="company-name">Renaissance Labs</h1>
            </div>
        </div>
        <div className="description-menu-container">
          <div className="description-section">
            <h2 className="description">We build Web3 applications.</h2>
            <p>We believe that blockchain technology will facilitate an innovation rebirth that
              leads to a trustless internet and society.</p> 
          </div>
          <div className="menu-section">
            <h3><a href = "mailto: andrewcolabella@protonmail.com">Contact</a></h3>
          </div>
        </div>
        <Animation/>
        <div className="footer">
        © Renaissance Labs LLC
        </div>
      </div>
    );
}
  
export default Home;