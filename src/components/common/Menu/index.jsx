import './Menu.scss'
import { Link } from 'react-router-dom'

const Menu = ({active, setActive}) => {
  return (
    <ul className={`menu ${active ? 'active' : ''}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default Menu
