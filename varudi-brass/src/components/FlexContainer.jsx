import React from "react";

function FlexContainer({ title, iconArray }) {
  return (
    <div className="p-[18px] gap-[27px] flex flex-col bg-white rounded-lg overflow-x-scroll no-scrollbar">
      <p className="text-16-700">{title}</p>
      <div className="grid grid-flow-col auto-cols-max gap-4">
        {iconArray.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center p-4 gap-[27px] min-w-[250px] cursor-pointer hover:bg-opacity_blue rounded-lg"
            >
              <React.Fragment>{data.icon}</React.Fragment>
              <p className="text-16-500-130">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlexContainer;
