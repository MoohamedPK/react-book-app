import { Fragment, useEffect } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { bookData, deleteBook, getBook } from "../slices/bookSlices";

function BookCont() {
  const { isLoading, books } = useSelector((state) => state.book);
  const { isLogged } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookData());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="flex justify-between mt-16">
        <BookList
          isLoading={isLoading}
          books={books}
          isLogged={isLogged}
          dispatch={dispatch}
          deleteAction={deleteBook}
          getBook = {getBook}
        />
        <BookDetails/>
      </div>
    </Fragment>
  );
}

export default BookCont;
