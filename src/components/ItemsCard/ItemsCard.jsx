import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_ItemsCard.scss';
import { useHistory } from 'react-router-dom';

export default function ItemsCard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const itemsListed = useSelector((store) => store.items);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);

  const getAnItem = (item) => {
    console.log('id', item);
    dispatch({
      type: 'FETCH_ITEM',
      payload: item,
    });
    history.push(`/item/${item.id}`);
  };

  return (
    <div className="item-card-container">
      {itemsListed.map((item) => {
        return (
          <div key={item.id} className="item-card-content">
            <div className="item-card-header">
              <h4>{item.headliner}</h4>
            </div>
            <img
              src={item.upload_image}
              alt={item.description}
              onClick={() => getAnItem(item)}
            />
          </div>
        );
      })}
    </div>
  );
}
