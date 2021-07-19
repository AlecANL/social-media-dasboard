import { HeaderStyled } from './header.styled.js';

function Header({ children }) {
  return (
    <HeaderStyled>
      <div className="header-description">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <hr />
      <div className="dark-mode">
        <span>Dark Mode</span>
        {children}
      </div>
    </HeaderStyled>
  );
}

export default Header;
