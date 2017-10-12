import React from 'react';
import reducer from '../reducer';
import {NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from '../actions';
import {newGame, makeGuess, toggleInfoModal} from '../actions';

describe('reducer', () => {
  const guess1 = 1;
  const guess2 = 100;
  const currentState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 3,
    showInfoModal: false
};
  //enter fail cases
  it('Should return the guess', () => {
    const state = reducer(currentState, makeGuess(guess1));
    expect(state).toEqual({guesses: [guess1],
      feedback: 'You\'re Hot!',
      correctAnswer: 3,
      showInfoModal: false});
  });
  
  it('Should return array of guesses', () => {
    const secondState = Object.assign({}, currentState, {
      guesses: [guess1]
    })

    const state = reducer(secondState, makeGuess(guess2));
    expect(state).toEqual({guesses: [guess1, guess2],
      feedback: 'You\'re Ice Cold...',
      correctAnswer: 3,
      showInfoModal: false});
  });
});

