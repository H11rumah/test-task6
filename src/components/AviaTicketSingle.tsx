import React, { useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import logo from "../imgs/logo.png";
import scheme from "../imgs/scheme.png";
import bags from "../imgs/bags.png";

let possibleTime = [
    ["09:20", "11:05"],
    ["10:20", "12:05"],
    ["11:20", "13:05"],
];

const AviaTicketSingle: React.FC = () => {
    let cityFrom = useSelector((state: RootState) => state.avia.cityFrom);
    let cityTo = useSelector((state: RootState) => state.avia.cityTo);

    let dateFrom = useSelector((state: RootState) => state.avia.dateFrom);
    let dateTo = useSelector((state: RootState) => state.avia.dateTo);

    let [selectedTime, setSelectedTime] = useState([possibleTime[0][0], possibleTime[0][1]]);

    return (
        <div className="aviaInfo_ticket">
            <div className="aviaInfo_ticket_part">
                <div className="aviaInfo_ticket_info">
                    <div className="aviaInfo_ticket_info_type">Невозвратный</div>
                    <div className="aviaInfo_ticket_info_company">
                        <img src={logo} alt="logo" />
                        <span>S7 Airlines</span>
                    </div>
                    <div className="aviaInfo_ticket_info_description">
                        <div className="aviaInfo_ticket_info_description_fromTo">
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>{selectedTime[0]}</span>
                                <span>{cityFrom}</span>
                                <span>{dateFrom}</span>
                            </div>
                            <img
                                className="aviaInfo_ticket_info_description_fromTo_timeline"
                                src={scheme}
                                alt="scheme"
                            />
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>{selectedTime[1]}</span>
                                <span>{cityTo}</span>
                                <span>{dateTo ? dateTo : dateFrom}</span>
                            </div>
                            <img className="aviaInfo_ticket_info_description_fromTo_bags" src={bags} alt="bags" />
                        </div>
                        <div className="aviaInfo_ticket_info_description_times">
                            {possibleTime.map((elem, id) => {
                                return (
                                    <div
                                        className={`aviaInfo_ticket_info_description_times_time`.concat(
                                            selectedTime[0] === elem[0] && selectedTime[1] === elem[1]
                                                ? " selected"
                                                : ""
                                        )}
                                        key={id}
                                        onClick={() => setSelectedTime(elem)}
                                    >
                                        <span>{elem[0]}</span>
                                        <span>-</span>
                                        <span>{elem[1]}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="aviaInfo_ticket_price">4150 ₽</div>
        </div>
    );
};

export default AviaTicketSingle;
