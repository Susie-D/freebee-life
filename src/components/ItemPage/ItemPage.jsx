import { useSelector } from 'react-redux';
import './_ItemPage.scss';

export default function ItemPage() {
  const item = useSelector((store) => store.item);

  return (
    <>
      <div className="item-page-container row">
        <div className="item-page-content-left column">
          <h1 className="item-page-content-header">{item.headliner}</h1>
          <img src={item.upload_image} />

          <div className="item-details">
            <div className="row ac-center">
              <h4>Item</h4>
              <p>{item.item}</p>
              <h4>Estimated Value</h4>
              <p>${item.estimate_value}</p>
            </div>

            <div className="row ac-center">
              <h4>Category</h4>
              <p>{item.category}</p>
            </div>

            <div>
              <h4>Details</h4>
              <span>{item.description}</span>
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

        <div className="item-page-content-right column">
          <div className="item-details">
            <div className="btn-container">
              <button
                className="item-details-btn"
                onClick={() => console.log('hey')}
              >
                Save Listing
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
