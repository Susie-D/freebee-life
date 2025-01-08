import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFileName } from '../../utility/fileName';
import './_MyListingsPage.scss';

export default function MyListingsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const itemsListed = useSelector((store) => store.userItems.userItems);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_ITEMS' });
  }, []);

  const getAUserItem = (item) => {
    dispatch({
      type: 'FETCH_USER_ITEM',
      payload: item,
    });
    history.push(`/my-item/${item.id}`);
  };

  return (
    <div className="item-card-container">
      {itemsListed.map((item) => {
        return (
          <div
            key={item.id}
            className="item-card-content"
            onClick={() => getAUserItem(item)}
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
