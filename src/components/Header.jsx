import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { logIn } from "../slices/authSlice";

function Header() {

  const {error} = useSelector(state => state.book)
  const {isLogged} = useSelector((state) => state.auth)
  const dispatch = useDispatch();


  return (
    <Fragment>
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}

      <div className="bg-neutral-800 text-white flex justify-between items-center py-4 px-10 mb-10">
        <div>
          <h1>My Book</h1>
        </div>

        <button
          onClick={() => dispatch(logIn())}
          className="border border-neutral-500 rounded-lg py-1 px-3 font-light"
        >
          {isLogged ? "Log Out" : "Log In"}
        </button>
      </div>
    </Fragment>
  );
}

export default Header