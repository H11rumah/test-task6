import React from "react";
import logo from "../imgs/logo.png";
import scheme from "../imgs/scheme.png";
import bags from "../imgs/bags.png";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const AviaTicketDouble: React.FC = () => {
    let cityFrom = useSelector((state: RootState) => state.avia.cityFrom);
    let cityTo = useSelector((state: RootState) => state.avia.cityTo);

    let dateFrom = useSelector((state: RootState) => state.avia.dateFrom);
    let dateTo = useSelector((state: RootState) => state.avia.dateTo);

    return (
        <div className="aviaInfo_ticket">
            <div className="aviaInfo_ticket_part">
                <div className="aviaInfo_ticket_info border">
                    <div className="aviaInfo_ticket_info_type">Невозвратный</div>
                    <div className="aviaInfo_ticket_info_company">
                        <img src={logo} alt="logo" />
                        <span>S7 Airlines</span>
                    </div>
                    <div className="aviaInfo_ticket_info_description">
                        <div className="aviaInfo_ticket_info_description_fromTo">
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>09:20</span>
                                <span>{cityFrom}</span>
                                <span>{dateFrom}</span>
                            </div>
                            <img
                                className="aviaInfo_ticket_info_description_fromTo_timeline"
                                src={scheme}
                                alt="scheme"
                            />
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>21:20</span>
                                <span>{cityTo}</span>
                                <span>{dateFrom}</span>
                            </div>
                            <img className="aviaInfo_ticket_info_description_fromTo_bags" src={bags} alt="bags" />
                        </div>
                    </div>
                </div>
                <div className="aviaInfo_ticket_info">
                    <div className="aviaInfo_ticket_info_type">Невозвратный</div>
                    <div className="aviaInfo_ticket_info_company">
                        <img src={logo} alt="logo" />
                        <span>S7 Airlines</span>
                    </div>
                    <div className="aviaInfo_ticket_info_description">
                        <div className="aviaInfo_ticket_info_description_fromTo">
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>21:20</span>
                                <span>{cityTo}</span>
                                <span>{dateTo}</span>
                            </div>
                            <img
                                className="aviaInfo_ticket_info_description_fromTo_timeline"
                                src={scheme}
                                alt="scheme"
                            />
                            <div className="aviaInfo_ticket_info_description_fromTo_dateTime">
                                <span>09:20</span>
                                <span>{cityFrom}</span>
                                <span>{dateTo}</span>
                            </div>
                            <img className="aviaInfo_ticket_info_description_fromTo_bags" src={bags} alt="bags" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aviaInfo_ticket_price">8550 ₽</div>
        </div>
    );
};

export default AviaTicketDouble;
