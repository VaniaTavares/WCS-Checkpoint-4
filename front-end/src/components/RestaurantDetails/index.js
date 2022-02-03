import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const RestaurantDetails = ({ info }) => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "2vw" }}>
      <h1 style={{ marginBottom: "1vh" }}>{info.name}</h1>
      <span style={{ marginBottom: "2vh" }} onClick={() => navigate("/")}>
        Return to Main
      </span>
      <div
        className="img-container"
        style={{
          maxWidth: "40vw",
          maxHeight: "40vh",
          marginBottom: "1vh",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <img
          src={info.image_url}
          alt={info.name}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <br />
      <div
        style={{
          marginTop: "1.5vh",
          marginBottom: "3vh",
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          left: "-2vw",
        }}
        className="evalution-info"
      >
        <span className="book-now">
          <Link
            to={{
              pathname: info.url,
            }}
            target="_blank"
          >
            Book Now
          </Link>
        </span>
        &nbsp;
        <span>Rating: {info.rating}</span>&nbsp;
        <span>Reviews: {info.review_count}</span>&nbsp;<span>Add</span>
      </div>
      <br />
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <article>
          <h3>Location</h3>
          <p>{info.location.display_address.join(" ")}</p>
        </article>
        <article>
          <h3>Contacts</h3>
          <p>{info.display_phone}</p>
        </article>
        <article>
          <h3>Category/Categories</h3>
          {info.categories.map((category) => (
            <>
              <span>{category.title}</span>
              &nbsp;
            </>
          ))}
        </article>
      </section>
    </div>
  );
};

export default RestaurantDetails;
