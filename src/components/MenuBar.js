import "./MenuBar.css";
import Search from "./Search";

function MenuBar ({date, items, tabClick}) {
  return (
    <div className="Menu-wrapper">
      <div className="item inner-wrapper">
        <h2 className="inner-item">
          COVID-19 Tracker
        </h2>
        <h2 className="inner-item">
          {date}
        </h2>
      </div>
      <Search />
      <div className="item inner-wrapper">
        {items.map(d => (
          <div
            onClick={(e) => tabClick(d)}
            className= { `inner-item tab ${d.active ? 'active' : ''}` }
            key={d.label}
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuBar;