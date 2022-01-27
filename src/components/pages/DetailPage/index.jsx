import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useHistory } from "react-router-dom";

import { GET_POKEMONS_DETAIL } from '../../../queries';
import DetailType from './components/DetailType';
import DetailSkill from './components/DetailSkill';
import Navbar from '../../common/Navbar';

import { Header1 } from '../../style/Headers';
import { css } from '@emotion/css';
import { DetailContainer, LoadingContainer, CatchButton, FailedModal } from '../../style/DetailPageStyle';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../../../store';
import CatchModal from './components/CatchModal';

const DetailPage = () => {
  const SELECTED_MOVE = 4;

  const history = useHistory();

  const { name, pokemonNickname } = useParams();
  const [isCatched, setIsCatched] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFailedCatch, setIsFailedCatch] = useState(false);
  const [isNicknameExist, setIsNicknameExist] = useState(false);

  const dispatch = useDispatch();
  const { catchPokemon, releasePokemon } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state.activity);
  
  const { loading, data } = useQuery(GET_POKEMONS_DETAIL, {variables: {name}});

  document.title = `Pokedex Library - ${name.toUpperCase()}`;

  /*
    Because some Pokemons that has been evolve to final form has a lot of moves, so I decide to randomize moves for a Pokemon.
    In actual Pokemon game, one Pokemon only can used 4 moves so the default move is 4. But, you can adjust it by change SELECTED_MOVE param.
  */
  const randomMoves = () => {
    let moves = [];
    
    if (data && data.pokemon) {
      for (let index = 0; index < SELECTED_MOVE; index++) {
        const move = data.pokemon.moves[Math.floor(
          Math.random()*data.pokemon.moves.length
        )];
        
        moves.push(move)
      } 
    }

    return moves;
  };
  
  const catchEm = () => {
    const gotEm = Math.floor(Math.random() * 10) & 1;
    if (gotEm) {
      setIsCatched(true);
    } else {
      setIsDisabled(true);
      setIsFailedCatch(true);

      setTimeout(() => {
        setIsDisabled(false);
        setIsFailedCatch(false);
      }, 3000);
    }
  }

  const storePokemon = (nickname) => {
    const existingNickname = state.pokemons.filter(pokemon => pokemon.nickname === nickname);

    if (existingNickname < 1) {
      catchPokemon({
        name,
        nickname,
        image: data.pokemon.sprites.front_default
      });
      setIsCatched(false);
      history.push('/my-pokemon');
    } else {
      setIsNicknameExist(true);
    }
  }

  const releaseEm = () => {
    releasePokemon(pokemonNickname);
    history.push('/my-pokemon');
  }

  if (loading) return <LoadingContainer>Loading . . .</LoadingContainer>

  return(
    <div>
      <Navbar location='info' />
      <div>
        <DetailContainer>
          {
            isCatched && 
            <CatchModal 
              name={name}
              nicknameExist={isNicknameExist}
              onClick={storePokemon}
            />
          }
          {
            isFailedCatch &&
            <FailedModal>
              <p>Shoot! You failed to catch it!</p>
            </FailedModal>
          }
          <img src={data.pokemon.sprites.front_default} alt={name} />
          <div className={css`text-align: center;`}>
            <Header1>
              {
                pokemonNickname ?
                  pokemonNickname.toUpperCase() : 
                  name.toUpperCase()
              }
            </Header1>
            <DetailType types={data.pokemon.types} />
            <CatchButton onClick={catchEm} type='catch' disabled={isDisabled}>CATCH</CatchButton>
            {
              pokemonNickname && 
              <CatchButton onClick={releaseEm} type='release' margin-left >RELEASE</CatchButton>
            }
          </div>
        </DetailContainer>
        <DetailSkill moves={randomMoves()} />
      </div>
    </div>
  );
}

export default DetailPage;