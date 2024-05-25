import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ItemsCard from '../ItemsCard/ItemsCard';
import Sidebar from '../SideBar/SideBar';
import './_DiscoverPage.scss';

export default function DiscoverPage() {
  const history = useHistory();

  const createNewListing = () => {
    history.push('/new-listing');
  };

  const viewSavedListing = () => {
    history.push('/saved-listings');
  };

  return (
    <div className="discover-page-container">
      <Sidebar />
      <div className="discover-page-content">
        <div className="discover-page-content-buttons row">
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
          <div>
            <p>Neighborhood / Area</p>
            Downtown - Within 5 miles
            <p>Delivery Method: Pickup Dropoff Both</p>
            <p> Pickup Drop-off Both</p>
          </div>
        </div>
        <ItemsCard className="column" />
      </div>
    </div>
  );
}
