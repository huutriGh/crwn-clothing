import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForReview = createSelector(
  [selectCollections],
  collecions =>
    collecions ? Object.keys(collecions).map(key => collecions[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );
