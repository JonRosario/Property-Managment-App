import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarContainer = styled.div`
  .logo {
    display: flex;
    height: 10%;
    width: 10%;
    border-radius: 40%;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;

    li {
      padding: 6px 0;

      .nav {
        position: relative;
        display: block;
        padding: 4px 0;
        font-family: Lato, sans-serif;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        margin: 0 2vw 0 0vw;
      }
    }
  }`

const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <ul>
          <li> <Link className='nav' to='/'>Home</Link> </li>
          <li> <Link className='nav' to='/LoginPage'>Log In</Link> </li>
          <li> <Link className='nav' to='/SignUpPage'>Sign Up</Link> </li>
          <li> <Link className='nav' to='/NewProperty'>Add Property</Link> </li>
        </ul>
      </NavBarContainer>
    </div>
  )
}

export default NavBar

