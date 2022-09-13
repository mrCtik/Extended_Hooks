import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import Card from "../common/Card";

const UseRefExercise = () => {
    const prevState = useRef("");
    const inputRef = useRef();
    const [otherState, setOtherState] = useState("false");

    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
        if (otherState === "true") {
            inputRef.current.style.width = "60px";
            inputRef.current.style.height = "40px";
            inputRef.current.innerText = "Блок";
        } else if (otherState === "false") {
            inputRef.current.style.width = "80px";
            inputRef.current.style.height = "150px";
            inputRef.current.innerText = "text";
        }
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <Card>
                <SmallTitle>Решение</SmallTitle>
                <Divider />
                <button
                    className="btn btn-primary mt-1"
                    onClick={toggleOtherState}
                >
                    Изменить блок
                </button>
            </Card>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
