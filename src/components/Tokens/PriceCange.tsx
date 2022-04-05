export default function PriceChange(params: {val:number, id:number}){
  const {val, id} = params;
  let color, prefix = ""
  if (val === 0)
  {
    color = "#93949D";
  }else if (val > 0){
    color = "#30BF8C";
    prefix = "+";
  }else if (val < 0){
    color = "#FF647C";
  }
  return <>
  <span style={{fontSize: "14px", color: color}}>{prefix + val + "%"} </span>
  <span style={{fontSize: "14px", color: "#93949D", margin: "0 6px"}}> {id !== 2 && `•`} </span> 
  </>
}