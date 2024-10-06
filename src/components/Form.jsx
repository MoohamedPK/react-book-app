import { useDispatch } from "react-redux";
import { insertBook } from "../slices/bookSlices";
import { useRef } from "react";
import { useSelector } from "react-redux";


function Form() {

  const { isLogged } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // refs 
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };

      dispatch(insertBook(data));

    title.current.value = null
    price.current.value = null
    description.current.value = null
  }

  return (
    <div className="">
      <div className="text-center font-bold text-2xl">
        <h1>Insert Book</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mt-8"
      >
        <label htmlFor="title">Title</label>
        <input
          required
          ref={title}
          className="my-4 py-1 px-3 w-[300px] border-black rounded-lg border-2"
          type="text"
          name=""
          id="title"
        />

        <label htmlFor="price">Price</label>
        <input
          required
          ref={price}
          className="my-4 py-1 px-3 w-[300px] border-black rounded-lg border-2"
          type="text"
          name=""
          id="price"
        />

        <label htmlFor="description">Description</label>
        <input
          required
          ref={description}
          className="my-4 py-1 px-3 w-[300px] border-black rounded-lg border-2"
          type="text"
          name=""
          id="description"
        />

        <div>
          <button
            disabled={!isLogged}
            type="submit"
            className="bg-blue-400 py-2 px-5 rounded-lg font-medium text-sm tracking-wider"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form