import React from "react";

const Header = ({ numberUnread, markAllRead }) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="font-extrabold text-xl text-VeryDarkBlue">
        Notifications{" "}
        <span className="ml-2 px-2 py-0.5 rounded-md text-sm bg-Blue text-White">
          {numberUnread}
        </span>
      </h1>

      <button
        onClick={markAllRead}
        className="text-VeryDarkBlue text-sm font-thin hover:text-Blue transition "
      >
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
