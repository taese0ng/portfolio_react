import React from 'react';
import styled from 'styled-components';
import {Avatar} from 'Components';
import avatarImg from 'assets/avatar.png';

const Header = (props) => {
    const {time} = props;

    return (
        <HeaderBody>
            <HeaderContainer>
                <Avatar src={avatarImg} width={35} height={35}/>
                <div>taese0_0ng</div>
            </HeaderContainer>
            <HeaderContainer>
                {time || 'Loading...'}
            </HeaderContainer>
        </HeaderBody>
    )
}

const HeaderBody = styled.div`
  width:100%;
  height: 28px;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  cursor: default;
`

const HeaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: -0.02em;
`

export default Header;