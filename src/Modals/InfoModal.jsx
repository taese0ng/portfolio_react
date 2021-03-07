import React, {useEffect} from 'react';
import styled from 'styled-components';
import {ActionBtns, Avatar} from 'Components';
import avatarImg from 'assets/avatar.png';

const InfoModal = (props) => {
    const {setOpen} = props;

    useEffect(()=>{
        const header = document.querySelector('#infoHeader');
        const container = document.querySelector('#infoContainer');
        let isClick = false;
        header.addEventListener('mousedown', ()=>{isClick=true})
        header.addEventListener('mouseup', ()=>{isClick=false})
        header.addEventListener('mousemove', (e)=>{
            if(isClick){
                container.style.left =  e.clientX - container.clientWidth/2 + 'px'
                container.style.top = e.clientY - 13 + 'px'
            }
        })
        // eslint-disable-next-line
    },[])

    return (
        <InfoContainer id='infoContainer'>
            <InfoHeader id='infoHeader'>
                <ActionBtns close={()=>{setOpen(false)}}/>
            </InfoHeader>

            <InfoBody>
                <ImgCover>
                    <Avatar src={avatarImg} background={'white'} width={'100%'}
                            height={'100%'} borderRadius={'100%'}/>
                </ImgCover>

                <InfoContents>
                    <ContentTitle>taese0_0ng</ContentTitle>
                    <ContentSubTitle>Front-End Dev</ContentSubTitle>
                    <div>
                        <ContentItem>금오공대 컴퓨터공학과</ContentItem>
                        <ContentItem>앱등이~</ContentItem>
                    </div>
                </InfoContents>
            </InfoBody>
        </InfoContainer>
    )
}

const InfoContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 20%;
  width: 500px;
  height: 300px;
  background: rgb(242,236,236);
  border-radius: 8px;
`

const InfoHeader = styled.div`
  background: rgb(235,229,229);
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid rgb(212,203,203);
`
const InfoBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 4px solid lightgray;
  margin-right: 30px;
`

const InfoContents = styled.div`
  letter-spacing: 0.02em;
  font-size: 14px;
`

const ContentTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const ContentSubTitle = styled.div`
  margin-bottom: 20px;
`

const ContentItem = styled.div`
  margin: 2px 0;
`
export default InfoModal;