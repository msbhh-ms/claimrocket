"use client";
import React from "react";

const PracticeCard = ({ card }) => {
  const { title, description, icon } = card;
  return (
    <div>
      <div className="border-2 border-gray-700 rounded-md bg-gray-100  ">
        <div className="flex items-start justify-center">
          <div className=" gap-3 p-3">{icon}</div>
          <div className=" p-3">
            <h1 className="font-bold  text-gray-800 md:text-xl text-base pb-1">
              {title}
            </h1>
            <p className="text-gray-800  font-light tracking-tighter">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
