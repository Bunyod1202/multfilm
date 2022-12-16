import "./carditem.scss";

export const CardItem = ({ item }) => {

  return (
    <li className="card" key={item.id}>
      <img className="card-img" src={item.image} alt="template" />
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="unknown">Unknown - {item.species }</p>
        <div>
          <span className="location">Last known location:</span>
        <a className="location-address" href={item.location.url}>{item.location.name}</a>
        </div>
        <span className="gender">gender:{item.gender}</span>
        </div>
    </li>
  );
};

