import { useState } from 'react';
import { IPeople, IPeoplesColl } from '../interface';

interface ITablePeople extends IPeoplesColl {
  activePage: number;
  totalPage: number;
  onChangePage: (pageNumber: number) => void;
}

export const TablePeople = ({
  next,
  previous,
  results,
  activePage,
  totalPage,
  onChangePage,
}: ITablePeople) => {
  const [itemState, setItemState] = useState<IPeople>();

  return (
    <>
      <div className="container">
        <div style={{ display: itemState !== undefined ? 'none' : '' }}>
          <div className="row">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Genero</th>
                  <th scope="col">Altura</th>
                  <th scope="col">F.nacim</th>
                  <th scope="col">Ojos Piel</th>
                  <th scope="col">Vehiculo</th>
                  <th scope="col">Peliculas</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {results.map((item) => {
                  return (
                    <tr key={item.name} onClick={() => setItemState(item)}>
                      <th scope="row">{item.name}</th>
                      <td>{item.gender}</td>
                      <td>{item.height} </td>
                      <td>{item.birth_year}</td>
                      <td>
                        {item.eye_color} - {item.skin_color}
                      </td>
                      <td>{item.vehicles.length}</td>
                      <td>{item.films.length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li
                  className={`page-item ${!previous ? 'disabled' : ''}`}
                  onClick={() => onChangePage(activePage - 1)}>
                  <span className="page-link">Previous</span>
                </li>
                {Array(totalPage)
                  .fill(null)
                  .map((i, idx) => (
                    <li
                      key={idx}
                      className={`page-item ${idx + 1 === activePage && 'active'}`}
                      onClick={() => onChangePage(idx + 1)}>
                      <span className="page-link">{idx + 1}</span>
                    </li>
                  ))}
                <li
                  className={`page-item ${!next ? 'disabled' : ''}`}
                  onClick={() => onChangePage(activePage + 1)}>
                  <span className="page-link">Next</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="card"
          style={{ width: '18rem', display: itemState === undefined ? 'none' : '' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{itemState?.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button className="btn btn-primary" onClick={() => setItemState(undefined)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
