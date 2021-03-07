import React from 'react';
import styled from 'styled-components';

const ActionBtns = (props) => {
    const {close} = props;

    return (
        <div>
            <CloseBtn onClick={close}>
                <div>x</div>
            </CloseBtn>
        </div>
    )
}

const CloseBtn = styled.button`
  background: rgb(253,70,70);
  border: none;
  border-radius: 100%;
  width:16px;
  height: 16px;
  cursor: pointer;
  margin: 5px;
  display: flex;
  padding-top: 2px;
  justify-content: center;
  & div {
    display: none;
    font-size: 0.1rem;
  }
  &:hover {
    & div {
      display: unset;
    }
  }
`

export default ActionBtns;