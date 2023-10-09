import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCityFrom, setCityTo, setDateFrom, setDateTo } from "../redux/slices/aviaSlice";

const AviaPage: React.FC = () => {
    let cityFrom = useSelector((state: RootState) => state.avia.cityFrom);
    let cityTo = useSelector((state: RootState) => state.avia.cityTo);

    let dateFrom = useSelector((state: RootState) => state.avia.dateFrom);
    let dateTo = useSelector((state: RootState) => state.avia.dateTo);

    let [isButtonActive, setIsButtonActive] = useState(false);
    let [isValidateError, setIsValidateError] = useState(false);

    let dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        if (cityFrom && cityTo && dateFrom) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [cityFrom, cityTo, dateFrom]);

    return (
        <div className="avia">
            <div className="avia_inputs">
                <div className="avia_inputs_data">
                    <label>
                        Откуда
                        <input
                            className={isValidateError && !cityFrom ? "error" : ""}
                            type="search"
                            placeholder="Город вылета"
                            value={cityFrom}
                            onChange={(event) => {
                                setIsValidateError(false);
                                dispatch(setCityFrom(event.target.value));
                            }}
                        />
                    </label>
                    <label>
                        Куда
                        <input
                            className={isValidateError && !cityTo ? "error" : ""}
                            type="search"
                            placeholder="Город прилёта"
                            value={cityTo}
                            onChange={(event) => {
                                setIsValidateError(false);
                                dispatch(setCityTo(event.target.value));
                            }}
                        />
                    </label>
                    <label>
                        Туда
                        <input
                            className={isValidateError && !dateFrom ? "error" : ""}
                            type="date"
                            placeholder="Город прилёта"
                            value={dateFrom}
                            onChange={(event) => {
                                setIsValidateError(false);
                                dispatch(setDateFrom(event.target.value));
                            }}
                        />
                    </label>
                    <label>
                        Обратно
                        <input
                            type="date"
                            placeholder="Город прилёта"
                            value={dateTo}
                            onChange={(event) => dispatch(setDateTo(event.target.value))}
                        />
                    </label>
                </div>
                <div className="avia_inputs_find">
                    <button
                        className={isButtonActive ? "" : "disabled"}
                        onClick={() => {
                            if (!cityFrom || !cityTo || !dateFrom) {
                                setIsValidateError(true);
                            } else {
                                navigate("/avia/info");
                            }
                        }}
                    >
                        Найти билеты
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AviaPage;
