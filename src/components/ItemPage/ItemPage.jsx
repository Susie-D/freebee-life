import { useSelector } from 'react-redux';
import './_ItemPage.scss';
import { bee } from '../../assets/assets';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ItemPage() {
  const history = useHistory();
  const item = useSelector((store) => store.items.item);

  return (
    <>
      <div className="item-page-container row">
        <div className="item-page-content-left column">
          <div className="jc-center">
            <h1 className="item-page-content-header">{item.headline}</h1>
          </div>
          <div className="jc-center">
            <img src={item.upload_image} />
          </div>
          <div className="item-details">
            <div className="row ac-center jc-space-between">
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
              <h4 style={{ margin: 0 }}>Details</h4>
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

        <div className="item-page-content-right column">
          <div className="item-details">
            <div className="save-btn-container">
              <button
                className="save-listing-btn"
                onClick={() => history.push('/saved-listings')}
              >
                Save Listing
              </button>
            </div>
            <div className="row jc-center">
              <div className="column">
                <h4>Lister</h4>
                <p>{item.user_id}</p>
              </div>
            </div>
            <p style={{ textAlign: 'center' }}>
              Free the Bees: Your Donation Makes a Difference!
            </p>
            <div className="row jc-center">
              <button
                className="donate-btn jc-center ac-center"
                onClick={() => history.push('/donate')}
              >
                Donate
                <img src={bee} alt="" />
              </button>
            </div>
            <p>
              Bee populations are critical for ensuring a healthy environment.
              Please give today to build a healthier, more resilient future for
              all. Make a tax-deductible contribution and help us curb the rapid
              decline of bee populations and bolster local communities and
              ecosystems. We are grateful for your support!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
