import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFileName } from '../../utility/fileName';
import './_ItemsCard.scss';

export default function ItemsCard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const itemsListed = useSelector((store) => store.items.items);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);

  const getAnItem = (item) => {
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
          <div
            key={item.id}
            className="item-card-content"
            onClick={() => getAnItem(item)}
          >
            <div className="item-card-header">
              <h4>{item.headline}</h4>
            </div>
            <img src={getFileName(item.upload_image)} alt={item.description} />
          </div>
        );
      })}
    </div>
  );
}
