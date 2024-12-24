import styled from "styled-components";

/*
<div className="nav-center">
        <span className="logo">Cocktail</span>
        <div className="nav-links">
          <NavLink to="/" className="HomePage-link">
            Home
          </NavLink>
          <NavLink to="/about" className="AboutPage-link">
            About
          </NavLink>
          <NavLink to="/newsLetter" className="newsLetterPage-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
*/

const Wrapper = styled.nav`
  background-color: var(--white);
  .nav-center {
    width: var(--view-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: 3rem;
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }

  .HomePage-link .AboutPage-link .newsLetterPage-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    transition: var(--transition);
    letter-spacing: 2px;
  }

  .homepage-link.AboutPage-link .newsLetterPage-link: hover {
    color: var(--primary-500);
  }

  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
