export const NotificationsList = ({comment, name, date, img}) => {
  return (
    <div className="list_wrap">
      <div className="list_left">
        <ul className="list_comment">
          <li>{comment}</li>
        </ul>
        <div className="list_from">
          <p className="list_name">{name}</p>
          <p className="list_date">{date}</p>
        </div>
      </div>
      <div className="list_right">
        <img className="list_img" src={img} />
      </div>
      
    </div>
  );
};

// Question: How can I code <hr> instead of border-bottom?
// Question: How can I display different image for each?
// Question: How can I code double ✓?