
// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Show = () => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    // Fetch reservation data from the API
    const fetchReservation = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/reservation/all', {
          withCredentials: true,
        });
        if (response.data.data.length > 0) {
          setReservation(response.data.data[0]); // Set only the first reservation
          console.log("==> ", response.data.data[0])
        }
      } catch (error) {
        console.error("Error fetching reservation:", error);
      }
    };

    fetchReservation();
  }, []);

  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
      }}
    >
      {reservation ? (
        <div>
          <div>First name: {reservation.firstName}</div>
          <div>Last name: {reservation.lastName}</div>
          <div>Email: {reservation.email}</div>
          <div>Number:  {reservation.phone}</div>
        </div>
      ) : (
        <p>No reservation found</p>
      )}
    </div>
  );
};

export default Show;
