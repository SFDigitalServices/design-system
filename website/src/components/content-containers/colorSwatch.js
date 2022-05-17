import React from "react";

/*
TODO:
- Add copy icon
- Add copy function
*/

const colorSwatch = ({ colorValue, colorName, addBorder }) => (
  <div className="flex flex-wrap w-40 my-4">
    <div
      className={`h-24 w-full rounded ${
        addBorder ? "border border-black" : ""
      }`}
      style={{ backgroundColor: colorValue }}
    />
    <div className="w-full">
      <p className="font-semibold px-1 py-0.5">{colorName}</p>
      <button
        type="button"
        className="w-full font-mono text-left text-slate-500 hover:bg-slate-200 px-1 py-0.5"
      >
        <p className="uppercase">{colorValue}</p>
        {/* <div>icon goes here</div> */}
      </button>
    </div>
  </div>
);

colorSwatch.defaultProps = {
  addBorder: false,
};

export default colorSwatch;
