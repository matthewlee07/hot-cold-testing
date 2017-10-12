import React from 'react';
import reducer from '../reducer';
import {NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from '../actions';
import {newGame, makeGuess, toggleInfoModal} from '../actions';

describe('reducer', () => {
  const guess1 = 1;
  const guess2 = 100;
  const state = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 3,
    showInfoModal: false
};
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

});