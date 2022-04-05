import {useParams } from "react-router";
import { tokens } from "../../tokens";
import HeaderComp from "../Header/HeaderComponent";

export default function TokenNamePage() {
  const {id} = useParams();
  const tittle = tokens.find(el => el.id.toString() === id)

  return <>
    {tittle &&<HeaderComp text={tittle.name} hasCategories={false}/>}
  </>
}