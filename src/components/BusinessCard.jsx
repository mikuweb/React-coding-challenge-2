import { useEffect, useState } from "react";

export const BusinessCard = () => {
  const endpointUrl = "https://jsonplaceholder.typicode.com/users";
  const [fetchData, setFetchData] = useState([]);

  let memberList = [];

  useEffect(() => {
    fetch(endpointUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data);
      });
  }, []);

  console.log(fetchData);

  return (
    <div className="business_section">
      {fetchData.map((p, index) => (
        <div className="business_container">
          <div className="business_img">
            <img className="business_img" src={`https://i.pravatar.cc/?img=${index}`} />
          </div>
          <div className="business_name">{p.name}</div>
          <div className="business_website">{p.website}</div>
          <div className="business_email">Email: {p.email}</div>
          <div className="business_adress">City: {p.address.city}</div>
          <div className="business_phone">Phone: {p.phone}</div>
         
        </div>
      ))}
    </div>
  );
};


//Question: Which should I use fetch or axios?
// １．anxios: needs to be npm installed
// ２．Node.js does not have fetch, so you need to use axious


// 7) Build a component similar to your business card.
// You can reuse the design.
// But this time use the data from this api:
// https://jsonplaceholder.typicode.com/users
// and display that component for each of the entries.
// Use fetch to get the entries.
// (Fetch must be called within useEffect()
// - you can look at a tutorial or the react docs to see how its done).
// Display some of the info for each user like name, website, company catchphrase and e-mail.
// For the images/avatars you can again use https://pravatar.cc/.
