import './Header.scss'

const Header = ({active, setActive}) => {
  return (
    <div className='header'>
      <div className="header__content">
        <div className="header__logo">3DNav</div>
        <div
          className={`header__menu ${active ? 'active' : ''}`}
          onClick={() => setActive(!active)}
        >
          <i className='bx bx-menu'></i>
          <i className='bx bx-x'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
