import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { IUsers } from "../../store/users/types";
import { setCurrentUser } from "../../store/users/usersSlice";
import './UserCard.scss';

interface UserCardProps {
  name: string;
  city: string;
  company: string;
  user: IUsers;
}

const UserCard: FC<UserCardProps> = ({ name, city, company, user }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const detailsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setCurrentUser(user));
    navigate('/user-details')
  }

  return (
    <div className="user-card">
      <p className="user-card__item user-card__item-initials">фио: <span className="user-card__item-desc">{name}</span></p>
      <p className="user-card__item user-card__item-city">город: <span className="user-card__item-desc">{city}</span></p>
      <p className="user-card__item user-card__item-company">компания: <span className="user-card__item-desc">{company}</span></p>
      <button className="user-card__additional" onClick={detailsHandler}>Подробнее</button>
    </div>
  )
}

export default UserCard;