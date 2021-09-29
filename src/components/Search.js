import "./Search.css";

function Search (props) {
  return (
    <div className="item Search">
      <form>
        <input
          type="text"
          placeholder="Search Country Data"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search;