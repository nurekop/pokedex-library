import React, { useRef } from 'react';
import { ModalContainer, ModalCard, ModalText, ModalInput } from '../../../style/ModalStyle';
import { CatchButton } from '../../../style/DetailPageStyle';

const CatchModal = (props) => {

  const inputRef = useRef(null);

  const giveNickname = () => {
    props.onClick(inputRef.current.value);
  }

  const cancel = () => {
    props.onClick('');
  }

  return(
    <ModalContainer>
      <ModalCard>
        <ModalText>Gotcha! {props.name} was caught!</ModalText>
        <ModalText>Do you want to give a nickname to {props.name}?</ModalText>
        <ModalInput ref={inputRef} type="text" maxLength='10' />
        <div>
          <CatchButton type='catch' onClick={giveNickname}>Submit</CatchButton>
          <CatchButton margin-left onClick={cancel}>Cancel</CatchButton>
        </div>
      </ModalCard>
    </ModalContainer>
  )
}

export default CatchModal;