import React from "react";
import data from "../assets/JSON/data.json";
import BIN from "../assets/img/BIN.png";

export default function Basket(props) {
  return (
    <div className="h-[100%] bg-[white] flex justify-center items-center">
      <div className="h-[100%] pt-4 pl-4 flex flex-col justify-start gap-10">
        <h1 className="text-black text-xl">YOUR BASKET</h1>

        {data.map((element, id) => {
          return (
            <div
              key={id}
              className={`${
                props.quantity[id] > 0 ? "flex" : "hidden"
              } w-[350px] h-[150px] md:w-[450px] md:h-[200px] lg:w-[550px] lg:h-[250px] justify-center items-center`}
            >
              <div className="w-[50%] h-[100%]">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg shadow"
                  src={
                    new URL(`../assets/img/${element.img}`, import.meta.url)
                      .href
                  }
                  alt="Shoes"
                />
              </div>

              <div className="flex justify-start w-[50%] h-[100%] bg-white pl-2 pr-2">
                <div className="h-[100%] flex flex-col justify-end pl-2 pr-2">
                  <h2 className="font-semibold tracking-widest text-[10px] md:text-[13px]">
                    {element.category}
                  </h2>
                  <h1 className="text-black text-[15px] tracking-widest md:text-lg">
                    {element.name}
                  </h1>
                  <h1 className="text-sm md:text-xl text-black font-semibold">
                    {element.price * props.quantity[id]}€
                  </h1>
                  <div className="flex justify-start items-center gap-2 pt-2">
                    <button
                      onClick={() => {
                        props.reduceItem(id);
                        props.setSum(props.sum - element.price);
                        props.addStock(id);
                        props.setMoney(props.money + element.price);
                      }}
                      className="w-[10px] h-[10px] p-4 rounded-full flex justify-center items-center bg-[black] hover:bg-[#214E1Fff] text-white"
                    >
                      -
                    </button>

                    <h1>{props.quantity[id]}</h1>

                    <button
                      onClick={() => {
                        props.money >= element.price ? props.addItem(id) : "";
                        props.money >= element.price
                          ? props.setSum(props.sum + element.price)
                          : "";
                        props.money >= element.price
                          ? props.reduceStock(id)
                          : "";
                        props.stock[id] > 0,
                          props.money >= element.price
                            ? props.setMoney(props.money - element.price)
                            : "";
                      }}
                      className="w-[10px] h-[10px] p-4 rounded-full flex justify-center items-center bg-[black] hover:bg-[#214E1Fff] text-white"
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        props.setMoney(
                          props.money + props.quantity[id] * element.price
                        ),
                          props.setSum(
                            props.sum - props.quantity[id] * element.price
                          ),
                          props.restorestock(id),
                          props.deleteQuantity(id);
                      }}
                    >
                      <img className="w-[25px] h-[25px]" src={BIN} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <h1 className="text-black text-lg">TOTAL: {props.sum}</h1>
          {/* if not enough money to keep buying: message appears */}
          <h1>
            {props.money <= 0 ? `NOT ENOUGH MONEY` : `MONEY: ${props.money}`}
          </h1>
        </div>
      </div>
    </div>
  );
}
