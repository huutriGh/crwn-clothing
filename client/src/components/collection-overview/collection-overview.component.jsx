import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { selectCollectionsForReview } from './../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from './../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForReview
});
export default connect(mapStateToProps, null)(CollectionOverview);
