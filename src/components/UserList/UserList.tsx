import { FC, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import './UserList.scss';
import { fetchUsers } from "../../store/users/asyncActions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Spin } from "antd";

const UserList: FC = () => {
  const { users, isLoading } = useAppSelector(state => state.usersSlice)
  const dispath = useAppDispatch()

  useEffect(() => {
    dispath(fetchUsers())
  }, [])

  const renderedUsers = users.map(user => {
    return <UserCard key={user.id} name={user.name} city={user.address.city} company={user.company.name} user={user} />
  })

  return (
    <div className="user-list">
      <div className="user-list__container">
        <header>
          <h2 className="user-list__header">
            Список пользователей
          </h2>
        </header>
        {isLoading ? <Spin /> : renderedUsers}
        <p className="user-list__users-amount">Найдено {users.length} пользователей</p>
      </div>
    </div>
  )
}

export default UserList;