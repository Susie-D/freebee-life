import ItemsCard from '../ItemsCard/ItemsCard';
import Sidebar from '../SideBar/SideBar';
import './_DiscoverPage.scss';

export default function DiscoverPage() {
  return (
    <div className="discover-page-container">
      <Sidebar />
      <ItemsCard />
    </div>
  );
}
