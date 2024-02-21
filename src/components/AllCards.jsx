import React from "react";
import Card from "./Card";
import data from "../assets/JSON/data.json";

export default function AllCards(props) {
  return (
    <div className="h-[100%] pt-10 pb-10 bg-white flex justify-center items-center flex-wrap gap-6 md:gap-10">
      {/* loope über meine Elemente des Arrays, um mir alle anzeigen zu lassen */}
      {data.map((element, id) => {
        // loop over my array with objects and create card for each of them and pass on it's ID
        return (
          <Card
            key={id}
            id={id}
            money={props.money}
            setMoney={props.setMoney}
            sum={props.sum}
            setSum={props.setSum}
            click={props.click}
            quantity={props.quantity}
            stock={props.stock}
            changeBasket={props.changeBasket}
            images={element.img}
            element={element}
          />
        );
      })}
    </div>
  );
}
