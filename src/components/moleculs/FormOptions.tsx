import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {Option} from "../../ultils/content"

interface FormOptionsProps {
  register: UseFormRegister<any>;
  name: string;
  options: Option[];
  optionTitle: string;
}

const FormOptions: React.FC<FormOptionsProps> = ({ register, name, options, optionTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={name}>
      <h3>{optionTitle}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.value}>

              <input type="radio" {...register(name)} value={option.value} name={name} id={option.value}/>
              {option.value}

            <label htmlFor={option.value}>
              <h4>{option.value}</h4>
              <p>{option.content}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormOptions;
