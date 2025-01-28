import { Link } from 'react-router'; // Asegúrate de tener instalado react-router

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;