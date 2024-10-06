import { useSelector } from "react-redux";

function BookDetails() {

  const {bookInfos} = useSelector(state => state.book)
  return (
    <div className="w-1/2 px-5">
      <div>
        <h1 className="text-2xl font-bold">Book Details</h1>
      </div>

      {Object.keys(bookInfos).length > 0 ? (
        <div key={bookInfos.id}>
          <p>Title: {bookInfos.title}</p>
          <p>Description:{bookInfos.description}</p>
          <p>Price:${bookInfos.price}</p>
        </div>
      ) : (
        <div className="mt-5 bg-slate-300 py-2 px-4 text-sm font-medium rounded-lg">
          <p>There is no book selected yet. Please Select!</p>
        </div>
      )}
    </div>
  );
}

export default BookDetails



