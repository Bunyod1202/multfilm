import "./cardlist.scss"

import { CardItem } from "../cardItem/CardItem";

export const CardList = ({data}) => {
  return (
    <ul className="list">
      {data.map(item => <CardItem item={item} />)}
    </ul>
  );
};

