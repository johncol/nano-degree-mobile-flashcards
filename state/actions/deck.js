import Storage from './../storage/storage';
import { DeckActionType } from './action-types';

const DeckActionCreator = {
  createDeck: deck => ({
    type: DeckActionType.CREATE_DECK,
    payload: {
      deck
    }
  }),

  addCardToDeck: (deckId, cardId) => ({
    type: DeckActionType.ADD_CARD_TO_DECK,
    payload: {
      deckId,
      cardId
    }
  }),

  deleteDeck: deckId => ({
    type: DeckActionType.DELETE_DECK,
    payload: {
      deckId
    }
  }),

  updateDeck: (deckId, name) => ({
    type: DeckActionType.UPDATE_DECK,
    payload: {
      deckId,
      name
    }
  })
};

const createDeck = name => dispatch => {
  return Storage.createDeck(name).then(deck => {
    dispatch(DeckActionCreator.createDeck(deck));
  });
};

const addCardToDeck = (deckId, cardId) => dispatch => {
  return Storage.addCardToDeck(deckId, cardId).then(() => {
    dispatch(DeckActionCreator.addCardToDeck(deckId, cardId));
  });
};

export const DeckAction = {
  createDeck,
  addCardToDeck
};