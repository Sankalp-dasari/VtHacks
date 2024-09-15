import React, { useState } from 'react';

const AddCarpoolRide = () => {
  const [rideDetails, setRideDetails] = useState({
    leavingFrom: '',
    goingTo: '',
    date: '',
    passengers: 1,
  });

  const [rides, setRides] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails({
      ...rideDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRides([...rides, { ...rideDetails, id: rides.length + 1 }]);
    setRideDetails({
      leavingFrom: '',
      goingTo: '',
      date: '',
      passengers: 1,
    });
  };

  const handleJoinRide = (id) => {
    setRides((prevRides) =>
      prevRides.map((ride) =>
        ride.id === id && ride.passengers > 0
          ? { ...ride, passengers: ride.passengers - 1 }
          : ride
      )
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6 text-white">Add a New Carpool Ride</h1>

      <form onSubmit={handleSubmit} className="flex items-center bg-white shadow-lg rounded-full p-4 space-x-4 mb-10">
        <div className="flex items-center border-r border-gray-300 pr-4">
          <input
            type="text"
            name="leavingFrom"
            value={rideDetails.leavingFrom}
            onChange={handleInputChange}
            placeholder="Leaving from"
            className="focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-r border-gray-300 pr-4">
          <input
            type="text"
            name="goingTo"
            value={rideDetails.goingTo}
            onChange={handleInputChange}
            placeholder="Going to"
            className="focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-r border-gray-300 pr-4">
          <input
            type="date"
            name="date"
            value={rideDetails.date}
            onChange={handleInputChange}
            className="focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-r border-gray-300 pr-4">
          <input
            type="number"
            name="passengers"
            value={rideDetails.passengers}
            onChange={handleInputChange}
            placeholder="Passengers"
            className="focus:outline-none w-[60px]"
            min="1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#00df9a] text-black px-6 py-2 rounded-full hover:bg-[#00b47a] transition duration-300"
        >
          Add Ride
        </button>
      </form>

      <div className="space-y-4">
        {rides.map((ride) => (
          <div key={ride.id} className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 space-x-4">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-1">
                {ride.leavingFrom} to {ride.goingTo}
              </h2>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>{ride.date}</span>
                <span>&bull;</span>
                <span>{ride.passengers} {ride.passengers === 1 ? 'passenger' : 'passengers'}</span>
              </div>
            </div>

            {ride.passengers > 0 ? (
              <button
                onClick={() => handleJoinRide(ride.id)}
                className="bg-[#00df9a] text-black px-4 py-2 rounded-lg hover:bg-[#00b47a] transition duration-300"
              >
                Join
              </button>
            ) : (
              <span className="text-red-500">No seats available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCarpoolRide;
