import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import ItemsCard from '../ItemsCard/ItemsCard';
import Sidebar from '../SideBar/SideBar';
import './_DiscoverPage.scss';

export default function DiscoverPage() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const createNewListing = () => {
    history.push('/new-listing');
  };

  const viewSavedListing = () => {
    history.push('/saved-listings');
  };

  return (
    <div className="discover-page-container">
      <div className="discover-page-content">
        <div className="welcome-header row"></div>
        <div className="discover-page-content-buttons row">
          <h2>Welcome, {user.username}!</h2>
          <div className="row">
            <button
              className="new-listing-btn"
              onClick={() => createNewListing()}
            >
              Create a New Listing
            </button>
            <button
              className="save-listing-btn"
              onClick={() => viewSavedListing()}
            >
              View Saved Listing
            </button>
          </div>
          <div className="discover-page-logistics">
            <p className="area-label">Neighborhood / Area</p>
            Downtown - Within 5 miles
            <p className="delivery-label">
              Delivery Method: Pickup Dropoff Both
            </p>
            <p> Pickup Drop-off Both</p>
          </div>
        </div>
        <div className="row">
          <Sidebar className="column" />
          <ItemsCard className="column" />
        </div>
      </div>
    </div>
  );
}
