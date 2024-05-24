import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_ItemsCard.scss';

export default function ItemsCard() {
  const dispatch = useDispatch();
  const itemsListed = useSelector((store) => store.items);

  useEffect(() => {
    dispatch({ type: 'GET_ITEMS' });
  }, []);


  
  return (
    <div className="item-card-container">
      {itemsListed.map((item) => {
        return (
          <div key={item.id} className="item-card-content">
            <div className="item-card-header">
              <h4>{item.headliner}</h4>
            </div>
            <img src={item.upload_image} alt={item.description} />
          </div>
        );
      })}
    </div>
  );
}
