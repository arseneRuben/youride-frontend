const SearchForm = () => {
  return (
    <div className="container my-5">
      <form className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Departure location"
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Arrival location"
          />
        </div>

        <div className="col-md-3">
          <input type="date" className="form-control" />
        </div>

        <div className="col-md-1 d-grid">
          <button className="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
