import "./headerStyles.css"



export default function Category(params:{isActive: boolean, makeActive: ()=>void, text: string}) {
  const {isActive, makeActive, text} = params;
  
  const buttonStyle = isActive ? {
    background: "linear-gradient(225.23deg, #B380FD 0%, #6347F5 67.91%)",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.07)",
    borderRadius: "16px",
    color: "#FFFFFF"
  }: {}
  return <button style={buttonStyle} onClick={makeActive} className="headerButtons"><p>{text}</p></button>
}