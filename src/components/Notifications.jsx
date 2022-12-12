import { NotificationsList } from "./NotificationsList";

export const Notifications = () => {
  return (
    <div className="notifications_background">
      <div className="notifications_wrap">
        <div className="notifications_header">
          <h3 className="notifications_title">Notifications</h3>
          <a href="#" className="notifications_mark">
            ✓ Mark as read
          </a>
        </div>
        <NotificationsList
          comment="Your password has been successfully changed."
          name={null}
          date="Jul 23, 2021 at 9:15 AM"
          img="https://i.pravatar.cc/70?img=1"
        />
        <NotificationsList
          comment="Thank you for booking a meeting with us."
          name="Kevin Dukkon・"
          date="Jul 14, 2021 at 5:31 PM"
          img="https://i.pravatar.cc/70?img=2"
        />
        <NotificationsList
          comment="Great news! We are launching our 5th fund: DLE Senior Living."
          name="Markus Gavrilov・"
          date="Jul 13, 2021 at 1:43 PM"
          img="https://i.pravatar.cc/70?img=3"
        />
        <div className="notifications_footer">
        <a href="#" className="notifications_view">
          View all notifications
        </a>
        </div>
        
      </div>
    </div>
  );
};

// 5) Implement a screen that looks like this
// : https://cdn.dribbble.com/users/878428/screenshots/17020453/media/75c4fbd826a96b80d8bf69293162d161.png?compress=1&resize=1600x1200&vertical=top For the images you can use https://pravatar.cc/ .
// It's a website that will generate you random placeholder images.
// It does not need any functionality,
// just try to get the styling as close to the original as possible.
