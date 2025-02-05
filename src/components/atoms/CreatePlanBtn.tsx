import { Link } from 'react-router';
import style from "./CreatePlanBtn.module.css"

const CreatePlanButton = () => {
  return (
    <Link to="/create-plan" className={style.createbtn}>Create Your Plan</Link>
  );
};

export default CreatePlanButton;
