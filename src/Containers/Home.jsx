import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Header} from 'Components';
import {HomePage} from "Pages";

const Home = () => {
    const [time, setTime] = useState(null);
    const dateList = ['일', '월','화','수','목','금','토'];

    const initTime = () => {
        const date = new Date();
        const hour = date.getHours();

        const currentHours = hour<12 ? '오전 ' + (hour===0 ? '12' : hour) : '오후 ' + (hour===12 ? hour : hour-12) ;
        const currentMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

        const month = date.getMonth()+1;
        const day=date.getDate();
        const today = date.getDay();

        const newTime = `٩(◕‿◕｡)۶ ${month}월 ${day}일 (${dateList[today]}) ${currentHours}:${currentMinutes}`
        setTime(newTime)
    }

    useEffect(()=>{
        const intervalTime = setInterval(()=>{
            initTime()
        }, 1000)

        return () => {
            clearInterval(intervalTime)
        }
        // eslint-disable-next-line
    },[])

    return (
        <HomeContainer>
            <Header time={time}/>
            <HomePage/>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export default Home;