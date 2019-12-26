import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelectorCreator } from 'reselect';
import { selectIscollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from './../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createSelectorCreator({
  isLoading: selectIscollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionsOverviewContainer;
