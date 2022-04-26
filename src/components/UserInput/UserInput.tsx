import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import './UserInput.scss';

interface UserInputProps {
  label: string;
  type: string;
  id: string;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: FC<UserInputProps> = ({ label, type, id, defaultValue, onChange }) => {
  const {isEditable} = useAppSelector(state => state.usersSlice);
  const [currentClassName, setCurrentClassName] = useState('user-input-group__input input-disable')

  useEffect(() => {
    const checkErr = () => {
      return (defaultValue !== undefined && defaultValue !== '') ? setCurrentClassName('user-input-group__input') : setCurrentClassName('user-input-group__input red-border')
    }
    checkErr()
  }, [defaultValue])
  
  return (
    <div className="user-input-group">
      <label className="user-input-group__label" htmlFor={id}>{label}</label>
      <input type={type} className={currentClassName} id={id} disabled={!isEditable} defaultValue={defaultValue} onChange={onChange} />
    </div>
  )
}

export default UserInput;