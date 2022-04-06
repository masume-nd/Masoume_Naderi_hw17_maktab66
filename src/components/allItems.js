import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Selecteditems from "./selectedItems";
import { myContext } from "./myContext";
const Allitems = () => {
   const [data, setdata] = useState("");
   const [selected, setSelected] = useState([]);
   useEffect(() => {
      axios
         .get("https://624af7b144505084bc49a6b6.mockapi.io/catApi")
         .then((res) => {
            setdata(res.data);
         });
   }, []);

   const handleOnChange = (position) => {
      Object.entries(data).map((item, index) => {
         let catItem = item[1];
         if (index == position) {
            catItem.isSelected = !catItem.isSelected;
         }

         if (catItem.isSelected == true && !selected.includes(catItem)) {
            setSelected([...selected, catItem]);
            console.log(selected);
         }
         
      });
     selected.map(itm => {
         if(itm.isSelected == false) {
              setSelected(selected.filter(el => el.id !== itm.id))
         }
     })
      
     
   };

   return (
      <>
         <ul className="all-items">
            <h2 className="header">All Items</h2>
            <div>
               {Object.entries(data).map((item) => {
                  let catObj = item[1];
                  return (
                     <div style={{ display: "flex" }}>
                        <input
                           type="checkBox"
                           onChange={() => handleOnChange(catObj.id - 1)}
                        />
                        <li key={catObj.id}>{catObj.cat}</li>
                     </div>
                  );
               })}
            </div>
         </ul>

         <myContext.Provider value={selected}>
            <Selecteditems />
         </myContext.Provider>
      </>
   );
};

export default Allitems;
