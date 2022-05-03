import React from "react";

import './collection.style.scss';

import CollectionItem from '../../components/collection-item/collection-item.component'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = () => {
   const COLLECTION_ID_MAP = {
      hats: 1,
      sneakers: 2,
      jackets: 3,
      womens: 4,
      mens: 5
   }

   const { collectionId } = useParams();
   const { collections } = useSelector(state => state.shop)
   const itemsList = collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionId])

   const { title, items } = itemsList
   console.log(items)
   return (
      <div className="collection-page">
         <h2 className="title">{title}</h2>
         <div className="items">
            {
               items.map(item => <CollectionItem key={item.id} item={item} />)
            }
         </div>

      </div>
   )
}


export default CollectionPage



