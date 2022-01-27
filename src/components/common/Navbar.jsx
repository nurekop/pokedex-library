import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavbarContainer, InfoContainer, NavbarText } from '../style/NavbarStyle';
import { css } from '@emotion/css';
import { ReactComponent as BackIcon } from '../../assets/image/back_nav.svg';

const Navbar = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return(
    <NavbarContainer>
      <InfoContainer>
        {
          props.location === 'info' &&
          <BackIcon className={css`height: 16px;width: 16px;fill: #fff; cursor: pointer;`} onClick={goBack} /> 
        }
        {
          props.location === 'owned' &&
          <NavbarText>
            <Link to='/'>
              HOME
            </Link>
          </NavbarText>
        }
      </InfoContainer>
      
      {
        props.location !== 'owned' &&
        <NavbarText>
          <Link to='/my-pokemon'>
            MY POKEMON
          </Link>
        </NavbarText>
      }
    </NavbarContainer>
  )
}

export default Navbar;