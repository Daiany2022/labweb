import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtunIcon from 'components/BottonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtunIcon />
            </Link>
          </div>
        </div>
        <div className='home-image-container'>
          <MainImage />
        </div>
      </div>

    </div>


  );
}

export default Home;
