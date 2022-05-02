import React from "react";

import './collection-overview.style.scss';

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
   <div className="collections-overview">
      {
         collections.map(({ id, ...otherCollectionProps }) => (<CollectionPreview key={id} {...otherCollectionProps} />))
      }
   </div>
)

const mapStateToProps = createStructuredSelector({
   collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)