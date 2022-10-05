import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: [],
    };
  }

  componentDidMount() {
    const { notification } = this.state;
    timer = setInterval(() => {
      if (notification.length < reserveNotifications.length) {
        const index = notification.length;
        notification.push(reserveNotifications[index]);
        this.setState({
          notification: notification,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notification.map((notification) => (
          <Notification
            message={notification.message}
            key={notification.id}
            id={notification.id}
          />
        ))}
      </div>
    );
  }
}

export default NotificationList;
