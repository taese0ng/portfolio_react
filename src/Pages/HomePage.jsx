import React, {useState} from 'react';
import styled from 'styled-components';
import bgImg from 'assets/background.png';
import {Dock} from 'Components';
import {InfoModal} from 'Modals';

const HomePage = () => {
    const [openInfo, setOpenInfo] = useState(false);

    return(
        <HomePageContainer bgSrc={bgImg}>
            <HomePageBody>
                {
                    openInfo &&
                    <InfoModal setOpen={setOpenInfo}/>
                }
            </HomePageBody>
            <Dock openInfo={setOpenInfo}/>
        </HomePageContainer>
    )
}

const HomePageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.bgSrc});
  background-repeat: no-repeat;
  background-size: cover;
`

const HomePageBody = styled.div`
  padding-top: 28px;
`

export default HomePage;