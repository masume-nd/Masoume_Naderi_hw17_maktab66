import React from "react";
import { myContext } from "./myContext";
import  PropTypes from "prop-types";
import Select from "./select";
const Selecteditems = () => {
   return (
      <div>
         <ul className="selected-items">
            <h2>Selected Items</h2>
            <myContext.Consumer>
               {(item) => item.map((el) => <Select item={el.cat}/>)}
            </myContext.Consumer>
         </ul>
      </div>
   );
};
Selecteditems.propTypes = {
   item : PropTypes.string
}
export default Selecteditems;
