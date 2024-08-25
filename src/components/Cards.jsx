import React from "react";
import Card from "./Card";
function Cards(){
    return(
        <div className="max-w-screen-xl mx-auto flex gap-2 mt-40 p-5">
            <Card width={"w-1/3"} start={false} but={false} para={true} hover={false}/>
            <Card width={"w-2/3"} start={true} but={true} para={false} hover={true}/>
        </div>
    )
}
export default Cards;