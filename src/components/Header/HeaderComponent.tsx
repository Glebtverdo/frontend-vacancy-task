import { categories } from "../../tokens";
import {useDispatch, useSelector} from "react-redux"
import Category from "./Category";
import "./headerStyles.css"
import { changeActiveId } from "../../store/slicers/activeIdSlicer";
import { RootState } from "../../store";

export default function HeaderComp(params: {text: string, hasCategories: boolean}){
  const {text, hasCategories} = params;
  const dispatch = useDispatch()
  const {activeId} = useSelector((state: RootState) => state.activeIdReducer)

  const makeActive = (id: string) => {
    dispatch(changeActiveId(id))
  }
  return <div className="headerMain">
    <p className="headerText">{text}</p>
    <span className="headerCategoriesContainer">
      {hasCategories && categories.map((el) => {
      const isActive = activeId === el.id
      return <Category key={el.id} isActive={isActive} makeActive={() => makeActive(el.id)} text={el.title}/>})}
    </span>
  </div>
}