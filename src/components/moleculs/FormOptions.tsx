import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {Option} from "../../ultils/content"
import style from "./FormOption.module.css"
interface FormOptionsProps {
  register: UseFormRegister<any>;
  name: string;
  options: Option[];
  optionTitle: string;
}

const FormOptions: React.FC<FormOptionsProps> = ({ register, name, options, optionTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen)
  }
  return (
    <div id={name} className={style.option}>
      <h3 className={style.option_header} onClick={() => handleOpen()}>{optionTitle}</h3>
      <div className={`${style.accordion} `}>
        <ul className={`${style.option_list} ${isOpen ? style.active : ""}`}>
          {options.map((option) => (
            <li key={option.value} className={style.option_list_item}>

                <input type="radio" {...register(name)} value={option.value} name={name} id={option.value}/>
                

              <label htmlFor={option.value} className={style.option_list_item_label}>
                <h4>{option.value}</h4>
                <p>{option.content}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default FormOptions;
