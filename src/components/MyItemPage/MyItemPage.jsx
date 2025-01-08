import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFileName } from '../../utility/fileName';
import './_MyItemPage.scss';

export default function MyItemPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const item = useSelector((store) => store.userItems.userItem);

  const deleteItem = (itemId) => {
    if (confirm('Are you sure you want to delete this item?')) {
      dispatch({
        type: 'DELETE_USER_ITEM',
        payload: itemId,
      });
      history.push(`/my-listings`);
    }
  };

  const editItem = (itemId) => {
    history.push(`/edit-item/${itemId}`);
  };

  return (
    <>
      <div className="item-page-container row">
        <div className="item-page-content-left column">
          <div className="jc-center">
            <h1 className="item-page-content-header">{item.headline}</h1>
          </div>
          <div className="jc-center">
            <img src={getFileName(item.upload_image)} />
          </div>

          <div className="item-details">
            <div className="row ac-center">
              <h4>Item</h4>
              <p>{item.item}</p>
              <h4>Estimated Value</h4>
              <p>${item.estimated_value}</p>
            </div>

            <div className="row ac-center">
              <h4>Category</h4>
              <p>{item.category}</p>
            </div>

            <div>
              <h4>Details</h4>
              <span>
                <p style={{ margin: '.5em 0' }}>{item.description}</p>
              </span>
            </div>

            <div className="row jc-space-between ac-center">
              <h4>Color</h4>
              <p>{item.color}</p>
              <h4>Condition</h4>
              <p>{item.condition}</p>
              <h4>Delivery Method</h4>
              <p>{item.delivery_method}</p>
            </div>
          </div>
        </div>

        <div className="item-page-content-right width column">
          <div className="item-details">
            <div className="btn-container">
              <button
                className="item-edit-btn"
                onClick={() => editItem(item.id)}
              >
                Edit Listing
              </button>
              <button
                className="item-delete-btn"
                onClick={() => deleteItem(item.id)}
              >
                Delete Listing
              </button>
            </div>
            <div className="row jc-space-between">
              <div className="column">
                <h4>Lister</h4>
                <p>{item.user_id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
