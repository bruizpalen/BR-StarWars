import useAppContext from "../../../context/AppContext";

const Dropdown = () => {
  const { store } = useAppContext();
  const { actions } = useAppContext();
  const favList = store.favorites;
  console.log(favList.length);
  return (
    <div className="dropdown me-5">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favorites <span class="badge text-bg-secondary">{favList.length}</span>
      </button>
      <ul className="dropdown-menu me-0 pe-0 ps-2 ">
        {favList.length > 0 ? (
          favList.map((favElement, index) => (
            <div className="container-fluid  d-flex flex-row justify-content-between align-items-center">
              <li key={index} className="mb-1 me-3">
                {favElement}
              </li>
              <button
                className="btn btn-danger btn-sm ms-2 me-0"
                onClick={() =>
                  actions.removeFromFavorites({ name: favElement })
                }
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <li>No favorites</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
