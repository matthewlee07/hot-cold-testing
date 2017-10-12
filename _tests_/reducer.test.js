import React from 'react';
import reducer from '../src/reducer';
import {NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from '../src/actions';
import {newGame, makeGuess, toggleInfoModal} from '../src/actions';

describe('reducer', () => {
  const guess1 = 1;
  const guess2 = 100;
  const currentState = {};
  //enter fail cases
  it('Should return the guess', () => {
    const state = reducer(currentState, makeGuess(guess1));
    expect(state).toEqual({type:MAKE_GUESS, guess:guess1});
  });

  // it('Should return the guess', () => {
  //   let currentGuess = 1;
  //   expect(currentGuess).toEqual(guess1);
  // });
  
});

