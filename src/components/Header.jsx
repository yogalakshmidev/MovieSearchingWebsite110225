import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigator = useNavigate();
  const handleSearch = (e) =>{
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
}

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i>Movie Online
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 mx-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/movie" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/series" className="nav-link">
                Series
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/episode" className="nav-link">
                Episodes
              </NavLink>
            </li>
          </ul>  
          <form onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              className="form-control"
              placeholder="search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
