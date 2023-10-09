import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import AviaTicketSingle from "../components/AviaTicketSingle";
import AviaTicketDouble from "../components/AviaTicketDouble";

const AviaInfoPage: React.FC = () => {
    let cityFrom = useSelector((state: RootState) => state.avia.cityFrom);
    let cityTo = useSelector((state: RootState) => state.avia.cityTo);

    let dateFrom = useSelector((state: RootState) => state.avia.dateFrom);
    let dateTo = useSelector((state: RootState) => state.avia.dateTo);

    let navigate = useNavigate();

    useEffect(() => {
        if (!cityFrom || !cityTo || !dateFrom) {
            navigate("/avia");
        }
    }, []);

    if (dateTo) {
        return (
            <div className="aviaInfo">
                <AviaTicketDouble />
            </div>
        );
    }

    return (
        <div className="aviaInfo">
            <AviaTicketSingle />
        </div>
    );
};

export default AviaInfoPage;
