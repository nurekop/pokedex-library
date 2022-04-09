import React, { useRef, useState } from 'react';
import { ModalContainer, ModalCard, ModalText, ModalInput, ErrorContainer } from '../../../style/ModalStyle';
import { CatchButton } from '../../../style/DetailPageStyle';

const CatchModal = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  const giveNickname = () => {
    if (inputRef.current.value !== '') {
      props.onClick(inputRef.current.value);
      if (props.nicknameExist) {
        setErrorMessage('Nickname already exist. Please use another Nickname.');
      }
    } else {
      setErrorMessage('You need enter pokemon Nickname');
    }
  }

  return(
    <ModalContainer>
      <ModalCard>
        <ModalText>Gotcha! {props.name} was caught!</ModalText>
        <ModalText>New words {props.name}?</ModalText>
        <ModalInput ref={inputRef} type="text" maxLength='10' />
        { 
          errorMessage.length > 0 &&
          <ErrorContainer>
            <p>{errorMessage}</p>
          </ErrorContainer>
        }
        <div>
          <CatchButton type='catch' onClick={giveNickname}>Submit</CatchButton>
        </div>
      </ModalCard>
    </ModalContainer>
  )
}

export default CatchModal;