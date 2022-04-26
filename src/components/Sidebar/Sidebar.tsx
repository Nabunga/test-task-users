import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { sortByCity, sortByCompany } from "../../store/users/asyncActions";
import './Sidebar.scss'

const Sidebar: FC = () => {
  const dispath = useAppDispatch()

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <header>
          <h3 className="sidebar__content-header">Сортировка</h3>
        </header>
        <button className="sidebar__content-btn by-city" onClick={e => dispath(sortByCity())}>по городу</button>
        <button className="sidebar__content-btn by-company" onClick={e => dispath(sortByCompany())}>по компании</button>
      </div>
    </div>
  )
}

export default Sidebar;