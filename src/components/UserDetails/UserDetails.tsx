import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setIsEditable } from "../../store/users/usersSlice";
import UserInput from "../UserInput/UserInput";
import './UserDetails.scss';

const UserDetails: FC = () => {
  const { currentUser, isEditable } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(currentUser?.name)
  const [userName, setUserName] = useState(currentUser?.username)
  const [email, setEmail] = useState(currentUser?.email)
  const [street, setStreet] = useState(currentUser?.address.street)
  const [city, setCity] = useState(currentUser?.address.city)
  const [zipcode, setZipcode] = useState(currentUser?.address.zipcode)
  const [phone, setPhone] = useState(currentUser?.phone)
  const [website, setWebsite] = useState(currentUser?.website)
  const [comment, setComment] = useState<string>('')

  const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setIsEditable())
  }

  const submitBtnClassHandler = () => {
    if ((name !== undefined && name !== '') && (userName !== undefined && userName !== '') && (email !== undefined && email !== '') && (street !== undefined && street !== '') && (city !== undefined && city !== '') && (zipcode !== undefined && zipcode !== '') && (phone !== undefined && phone !== '') && (website !== undefined && website !== '') && (isEditable)) {
      return 'details__form-btn'
    } else {
      return 'details__form-btn btn-disabled'
    }
  }

  const editedUserInfo = {
    name: name,
    userName: userName,
    email: email,
    street: street,
    city: city,
    zipcode: zipcode,
    phone: phone,
    website: website,
    comment: comment
  }

  return (
    <div className="user-details">
      <header className="user-details__header">
        <h2 className="user-details__sub-header">
          Профиль пользователя
        </h2>
        <button className="user-details__header-btn" onClick={editHandler}>
          Редактировать
        </button>
      </header>
      <section className="details">
        <form className="details__form">
          <UserInput label="Name" type="text" id="name" defaultValue={name} onChange={e => setName(e.target.value)} />
          <UserInput label="User name" type="text" id="user-name" defaultValue={userName} onChange={e => setUserName(e.target.value)} />
          <UserInput label="E-mail" type="text" id="e-mail" defaultValue={email} onChange={e => setEmail(e.target.value)} />
          <UserInput label="Street" type="text" id="street" defaultValue={street} onChange={e => setStreet(e.target.value)} />
          <UserInput label="City" type="text" id="city" defaultValue={city} onChange={e => setCity(e.target.value)} />
          <UserInput label="Zip code" type="text" id="zip-code" defaultValue={zipcode} onChange={e => setZipcode(e.target.value)} />
          <UserInput label="Phone" type="text" id="phone" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
          <UserInput label="Website" type="text" id="website" defaultValue={website} onChange={e => setWebsite(e.target.value)} />
          <p className="user-input-group__label">Comment</p>
          <textarea className="details__textarea" cols={30} rows={10} value={comment} onChange={e => setComment(e.target.value)}></textarea>
        </form>
      </section>
      <button className={submitBtnClassHandler()} type="submit" onClick={e => console.log(JSON.stringify(editedUserInfo))}>Отправить</button>
    </div>
  )
}

export default UserDetails;