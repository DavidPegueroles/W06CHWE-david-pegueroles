import RobotDisplay from "../components/RobotDisplay/RobotDisplay";

const HomePage = () => {
  const robots = [
    {
      characteristics: {
        velocity: 9,
        resistance: 7,
        creation_date: "2008-07-27T22:00:00.000Z",
      },
      _id: "620ff2abff9cc04b0bdd6556",
      name: "Lorenzo",
      url: "https://cdna.artstation.com/p/assets/images/images/029/711/108/large/jessica-sheng-rendered-img1.jpg?1598405014&dl=1",
    },
  ];

  return (
    <>
      <h2>Robots List</h2>
      <ul>
        {robots.map((robot) => (
          <RobotDisplay key={robot._id} robot={robot} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
