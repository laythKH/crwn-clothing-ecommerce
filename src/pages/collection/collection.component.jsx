import React from "react";

import './collection.style.scss';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

let collectionTitle;
const CollectionPage = ({ collection }) => {

   const { collectionId } = useParams();
   collectionTitle = collectionId

   return (
      <div className="collection-page">
         <h2>Collection PAGE</h2>
      </div>
   )
}

const mapStateToProps = (state, ownProps = collectionTitle) => {
   return ({
      collection: selectCollection(ownProps)(state)
   })
}

export default connect(mapStateToProps)(CollectionPage);