import { Link } from 'react-router-dom';
import './_SideBar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <h3>Categories</h3>
      <Link href="#">Apparel</Link>
      <Link href="#">Beauty</Link>
      <Link href="#">Baby / Family</Link>
      <Link href="#">Electronics</Link>
      <Link href="#">Hobbies</Link>
      <Link href="#">Home Improvement</Link>
      <Link href="#">Music</Link>
      <Link href="#">Office</Link>
      <Link href="#">Outdoor</Link>
      <Link href="#">Pet Supplies</Link>
      <Link href="#">Sporting Goods</Link>
    </div>
  );
}
