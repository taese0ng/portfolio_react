import React from 'react';
import {countState} from 'Recoils'
import {useRecoilState} from 'recoil';

const Home = () => {
    const [test, setTest] = useRecoilState(countState);

    const clickBtn = () => {
        setTest(test+1);
    }

    return (
        <React.Fragment>
            <div>
                Home {test}
            </div>
            <button onClick={clickBtn}>
                +
            </button>
        </React.Fragment>
    )
}

export default Home;