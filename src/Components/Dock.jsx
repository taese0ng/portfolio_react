import React from 'react';
import styled from 'styled-components';

const Dock = (props) => {
    const {openInfo} = props;
    return (
        <DockContainer>
            <DockBody>
                <Icon onClick={()=>openInfo(true)}>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
                <Icon>icon</Icon>
            </DockBody>
        </DockContainer>
    )
}

const DockContainer = styled.div`
  position: fixed;
  bottom: 5px;
  width: 100%;
  display:flex;
  justify-content: center;
`

const DockBody = styled.div`
  backdrop-filter: blur(1.5rem);
  background: rgba(255,255,255, 0.4);
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 0px 50px 100px rgba(0,0,0, 0.7);
  border-radius: 22px;
  padding: 3px;
  display: flex;
`

const Icon = styled.div`
  cursor:pointer;
  margin: 7px;
  min-width: 50px;
  width: 5vw;
  max-width: 80px;
  
  min-height: 50px;
  height: 5vw;
  max-height: 80px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  border-radius: 14px;
`
export default Dock;