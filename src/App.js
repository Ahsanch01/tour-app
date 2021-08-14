import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log(id);
    const newTour = tours.filter((tour) => tour.id !== id);
    setLoading(newTour);
    console.log(loading);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);

      const tours = await response.json();
      setLoading(false);
      console.log(tours);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
