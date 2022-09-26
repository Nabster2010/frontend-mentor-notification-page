import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Notification from "./components/Notification";

function App() {
  const [notifications, setNotifications] = useState(data);

  const readMsg = (id) => {
    setNotifications(
      notifications.map((n) => {
        return {
          ...n,
          read: n.id === id ? true : n.read,
        };
      })
    );
  };
  const markAllRead = () => {
    setNotifications(
      notifications.map((n) => {
        return {
          ...n,
          read: true,
        };
      })
    );
  };
  const unRead = notifications.reduce(
    (acc, cur) => acc + (cur.read ? 0 : 1),
    0
  );
  return (
    <div className="App font-PlusJakartaSans bg-VerylightGrayishBlue w-full flex justify-center items-center py-16 min-h-screen ">
      <div className="container max-w-2xl bg-White shadow-lg w-full  rounded-xl px-6 py-8  ">
        <Header markAllRead={markAllRead} numberUnread={unRead} />
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            readMsg={() => readMsg(notification.id)}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
