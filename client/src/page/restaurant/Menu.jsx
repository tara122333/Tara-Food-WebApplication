import React, { useState} from "react";

// component
import MenuCollection from "../../Components/restaurant/MenuCollection";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages="3" image={
            [
              "https://b.zmtcdn.com/data/menus/148/100148/94e49d3b6f6ee0bbe1363358c9afc929.jpg",
              "https://b.zmtcdn.com/data/menus/148/100148/7c1683df4cedfabcb6cbc26c4ad99905.jpg",
              "https://b.zmtcdn.com/data/menus/148/100148/69e35bcfcf33d529c0e239b6862f7bf0.jpg",
            ]
        } />
        <MenuCollection menuTitle="Menu" pages="3" image={
            [
              "https://b.zmtcdn.com/data/menus/148/100148/94e49d3b6f6ee0bbe1363358c9afc929.jpg",
              "https://b.zmtcdn.com/data/menus/148/100148/7c1683df4cedfabcb6cbc26c4ad99905.jpg",
              "https://b.zmtcdn.com/data/menus/148/100148/69e35bcfcf33d529c0e239b6862f7bf0.jpg",
            ]
        } />
      </div>
    </>
  );
};

export default Menu;