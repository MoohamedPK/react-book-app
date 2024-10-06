
function BookList({
  isLoading,
  books,
  isLogged,
  dispatch,
  deleteAction,
  getBook
}) {
  const booksList =
    books.length > 0
      ? books.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center border border-neutral-400 p-2 my-2 rounded-lg"
          >
            <div>
              <p>{book.title}</p>
            </div>

            <div>
              <button
                disabled={!isLogged}
                className="mx-3 bg-blue-400 rounded-lg py-1 px-3"
                onClick={() => dispatch(getBook(book))}
              >
                Read
              </button>
              <button
                disabled={!isLogged}
                className="bg-red-400 rounded-lg py-1 px-3"
                onClick={() => dispatch(deleteAction(book.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      : "There Is No Data Available";

  return (
    <div className="w-1/2">
      <div className="main px-5">
        <div>
          <h1 className="text-2xl font-bold">Book List</h1>
        </div>

        {isLoading ? (
          "loading..."
        ) : (
          <div className="list mt-7 border border-neutral-500 p-3 rounded-lg">
            <div className="list-container font-medium">{booksList}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
