import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    // Sidebar
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">
        <Link to="/" style={{ textDecoration: 'none' }}>
          Start War Api
        </Link>
      </div>
      <div className="list-group list-group-flush">
        <Link
          to="/people"
          className="list-group-item list-group-item-action list-group-item-light p-3">
          Personas
        </Link>
        <Link
          to="/peoples"
          className="list-group-item list-group-item-action list-group-item-light p-3">
          Personas
        </Link>

        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
          Planetas
        </a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
          Especies
        </a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
          Vehiculos
        </a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
          Naves
        </a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
          Peliculas
        </a>
      </div>
    </div>
  );
};
