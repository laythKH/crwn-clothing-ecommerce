import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";

import './directory.style.scss';

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {


   return (
      <div className="directory-menu">
         {
            sections.map(({ title, imageUrl, id, size, linkUrl }) => (
               <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))
         }
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);