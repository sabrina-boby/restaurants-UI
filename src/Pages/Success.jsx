// // import React from 'react'
// import { useEffect, useState } from "react";
// import axios from "axios";
// const Success = () => {
//   const [reservation, setReservation] = useState(null);

//   useEffect(() => {
//     // Fetch reservation data from the API
//     const fetchReservation = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/v1/reservation/all",
//           {
//             withCredentials: true,
//           }
//         );
//         const data = response.data.data;
//         if (response.data.data.length > 0) {
//           setReservation(data[data.length - 1]); // Set the last reservation
//           console.log("==> ", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching reservation:", error);
//       }
//     };

//     fetchReservation();
//   }, []);
//   return (
//     <div
//       style={{
//         margin: "auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "200px",
//       }}
//     >
//       {reservation ? (
//         <div>
//           <div>First name: {reservation.firstName}</div>
//           <div>Last name: {reservation.lastName}</div>
//           <div>Email: {reservation.email}</div>
//           <div>Number: {reservation.phone}</div>
//         </div>
//       ) : (
//         <p>No reservation found</p>
//       )}
//     </div>
//   );
// };

// export default Success;

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const location = useLocation();
  const reservation = location.state?.reservation;

  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(
            

            
          );
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <div className="notFound">
        <div className="container">
          <div
            style={{
              margin: "auto auto 100px auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",
              width: "500px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              // backgroundColor: "red",
            }}
          >
            {reservation ? (
              <div>
                <div>
                  <h3>First name: {reservation.firstName}</h3>
                </div>
                <div>
                  <h3>Last name: {reservation.lastName}</h3>
                </div>
                <div>
                  <h3>Email: {reservation.email}</h3>
                </div>
                <div>
                  <h3>Number: {reservation.phone}</h3>
                </div>
              </div>
            ) : (
              <p>No reservation found</p>
            )}
          </div>
          {/* <img src="/sandwich.png" alt="success" /> */}
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
