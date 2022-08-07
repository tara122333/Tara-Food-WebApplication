import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";
const MenuListContainer = () => {

  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <MenuCategory
          name="Recommanded"
          items={["",""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommanded"}
        />
      </div>
    </>
  );
};

export default MenuListContainer;