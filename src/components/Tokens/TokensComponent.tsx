import { useReducer } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { categories, tokens } from "../../tokens"
import TokenComp from "./TokenComponent"
import "./tokensStyles.css"

export default function TokensComp(){
  const {activeId} = useSelector((state: RootState) => state.activeIdReducer)
  const tokensData = tokens.filter((el) => {
      return el.categories.find(el => el === activeId) || categories[0].id === activeId ? true : false
    })
    

  return <>
    <div className="tokensTable">
      {tokensData.map(el => <TokenComp  key={el.id} token={el} />)}
    </div>
  </>
}