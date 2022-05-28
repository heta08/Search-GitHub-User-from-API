import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div className="px-6">
      <ul className="flex px-6">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" key={"App"} to={"/"}>Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" key={"Favourites"} to={"/favourites"}>Favourites</Link>
        
        </li>
      </ul>
    </div>
  );
}