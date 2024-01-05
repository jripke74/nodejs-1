import './MainNav.css';

const MainNav = function MainNav() {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item"><a className='active' href="/">Shop</a></li>
          <li className="main-header__item"><a href="/admin/add-product">Add Product</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav;
