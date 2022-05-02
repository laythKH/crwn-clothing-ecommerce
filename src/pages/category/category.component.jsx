import React from "react";

import './category.style.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from "react-router-dom";

const CategoryPage = () => {

   const { categoryId } = useParams()

   return (
      <div className="category">
         <h2>CATEGORY PAGE</h2>
      </div>
   )
}


export default CategoryPage;