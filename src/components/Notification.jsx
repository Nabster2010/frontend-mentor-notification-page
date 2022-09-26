import React from "react";

const Notification = ({ notification, readMsg }) => {
  const { id, name, msg, thumb, action, title, avatar, read, time } =
    notification;

  return (
    <div
      onClick={readMsg}
      className={`${
        !read && "bg-VerylightGrayishBlue shadow-sm"
      } p-4 flex justify-start items-center rounded-xl mt-8 transition-all `}
    >
      <img className="w-12 h-12 self-start" src={`/images/${avatar}`} alt="" />
      <div className="ml-4  flex-1">
        <div className="flex justify-between items-center   ">
          <h3 className="text-VeryDarkBlue inline  mr-2  font-extrabold text-[.9rem] capitalize hover:text-Blue transition cursor-pointer">
            {name}
            <span className="text-sm  mx-2 font-normal  text-GrayishBlue">
              {action}
            </span>
            <span className="text-VeryDarkBlue  mr-2  font-extrabold capitalize hover:text-Blue transition cursor-pointer">
              {title}
            </span>
          </h3>
          <div className="flex justify-center items-center">
            {thumb && (
              <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-400 ml-auto">
                <img
                  src="/images/image-chess.webp"
                  className="max-w-full max-h-full"
                  alt=""
                />
              </div>
            )}

            <span
              className={` ${
                read ? "opacity-0" : "opacity-100"
              } transition-all w-2 h-2 mx-2 block  rounded-full bg-Red`}
            />
          </div>
        </div>
        <span className="text-sm text-GrayishBlue">{time}</span>
        {msg && (
          <div className="w-full rounded-xl border hover:bg-LightGrayishBlue1 p-4  mt-2 cursor-pointer transition">
            <p className="text-sm text-GrayishBlue">{msg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
