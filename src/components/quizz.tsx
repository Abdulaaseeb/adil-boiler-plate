
import { useState } from "react"
import { Button } from "@mui/material"
import QuizzResult from "./quizzResult"
export const arrofQuizz = [
    {
        question: "HTML STANDS FOR:",
        options: ["A.Hyper Text Markup Language", "B.Java Script", "C.JS", "D.Cascading Style Sheet"],
        correctAns: 1
    },
    {
        question: "CSS STANDS FOR:",
        options: ["A.Java Script", "B.Hyper Text Markup Language", "C.JS", "D.Cascading Style Sheet"],
        correctAns: 4
    },
    {
        question: "JS STANDS FOR:",
        options: ["A.JS", "B.Cascading Style Sheet", "C.Hyper Text Markup Language", "D.Java Script"],
        correctAns: 4
    },
    {
        question: "TS STANDS FOR:",
        options: ["A.Type Script", "B.Java Script", "C.JS", "D.Cascading Style Sheet"],
        correctAns: 1
    },
    {
        question: "RAM STANDS FOR:",
        options: ["A.Hyper Text Markup Language", "B.Read Access Memory", "C.JS", "D.Cascading Style Sheet"],
        correctAns: 2
    },
    {
        question: "ROM STANDS FOR:",
        options: ["A.Hyper Text Markup Language", "B.Java Script", "C.JS", "D.Read Only Memory"],
        correctAns: 4
    },
]
export default function TSQuizz() {
    const [questionCurr, setquestionCurr] = useState(0)
    const [marks, setMarks] = useState(0)
    const [enteredOption, setenteredOption] = useState(0)
    const [result, setResult] = useState(false)
    const changeQuestion = () => {
        updateMarks()
        if (questionCurr < arrofQuizz.length - 1) {
            setquestionCurr(questionCurr + 1)
            setenteredOption(0)
        }
        else {
            setResult(true)
        }
    }
    const updateMarks = () => {
        if (enteredOption == arrofQuizz[questionCurr].correctAns) {
            setMarks(marks + 1)
            console.log(marks)
        }
    }
    return (
        <div className="mt-5">
            <div className="col-md-4 col-12 text-center mx-auto border rounded shadow-lg">
                {result ? (
                    <QuizzResult marks={marks} total={arrofQuizz.length} />
                ) : (
                    <div>
                        <h2 className="mt-5 ">QUIZZ APP</h2>
                        <hr className="mt-3" />
                        <div className="border  rounded shadow-lg p-3 w-75 bg-light   mx-auto">
                            <span id="numbeQuestion">{questionCurr + 1}</span>
                            <span>.</span>
                            <span id="question">{arrofQuizz[questionCurr].question}</span>
                        </div>
                        <div className="mt-4 ">
                            {arrofQuizz[questionCurr].options.map((x, i) => {
                                return (
                                    <Button color="primary" className={`w-75 my-2 mx-2 ${enteredOption == i + 1 ? "checked"
                                        : null}`} variant="contained" onClick={() => setenteredOption(i + 1)}>{x}</Button>
                                )
                            })}
                        </div>
                        <div>
                            <Button variant="outlined" className="mt-3 my-5" onClick={changeQuestion}>Next</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}