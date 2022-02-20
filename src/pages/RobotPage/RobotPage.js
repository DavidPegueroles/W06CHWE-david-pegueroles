import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getARobotThunk } from "../../redux/thunks/robotsThunks";

const RobotPage = () => {
  const id = useParams();

  const dispatch = useDispatch();

  const { robot, characteristics } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getARobotThunk(id.idRobot));
  }, [dispatch, id]);

  return (
    <>
      <h3>ROBOT</h3>
      <img src={robot.url} alt={robot.name} />
      <h4>{robot.name}</h4>
      <ul>
        <li>Velocity: {characteristics.velocity}</li>
        <li>Resistance: {characteristics.resistance}</li>
        <li>Date of creation: {characteristics.creation_date}</li>
      </ul>
    </>
  );
};

export default RobotPage;
