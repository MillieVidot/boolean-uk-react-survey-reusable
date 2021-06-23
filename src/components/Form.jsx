import { useState } from "react"
import CheckBoxGroup from "../Hooks/CheckBoxHook"
import RadioGroup from "../Hooks/RadioHook"

function Form({ setAnswers }) {
  const initialAnswerData = {
    bestFeatures: [],
    worstFeatures: [],
    consistency: "",
    colour: "",
    logo: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  }

  const [answerData, setAnswerData] = useState(initialAnswerData)

  function handleSubmit(event) {
    event.preventDefault()
    setAnswers(currentAnswers => [...currentAnswers, answerData])
    setAnswerData(initialAnswerData)
  }

  function handleChange(event) {
    setAnswerData({
      ...answerData,
      [event.target.name]: event.target.value,
    })
  }

  function handleChangeChecked(event) {
    const updatedArray = event.target.checked
      ? [...answerData[event.target.name], event.target.value]
      : answerData[event.target.name].filter(
          feature => feature !== event.target.value
        )

    setAnswerData({ ...answerData, [event.target.name]: updatedArray })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <CheckBoxGroup
        name="bestFeatures"
        options={{
          colour: "It's yellow!",
          sound: "It squeaks!",
          logo: "It has a logo!",
          size: "Its big!",
        }}
        handleChangeChecked={handleChangeChecked}
      >
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
      </CheckBoxGroup>

      <CheckBoxGroup
        name="worstFeatures"
        options={{
          colour: "It's yellow!",
          sound: "It squeaks!",
          logo: "It has a logo!",
          size: "Its big!",
        }}
        handleChangeChecked={handleChangeChecked}
      >
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
      </CheckBoxGroup>

      <RadioGroup
        name="consistency"
        values={[1, 2, 3, 4]}
        handleChangeChecked={handleChange}
        answerData={answerData}
      >
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
      </RadioGroup>

      <label className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        {/* <ConsistencyRadioButtons/> */}
        <ul>
          <li>
            <input
              id="consistency1"
              type="radio"
              name="consistency"
              value="1"
              checked={answerData.consistency === "1"}
              onChange={handleChange}
            />
            <label htmlFor="consistency1">1</label>
          </li>
          <li>
            <input
              id="consistency2"
              type="radio"
              name="consistency"
              value="2"
              checked={answerData.consistency === "2"}
              onChange={handleChange}
            />
            <label htmlFor="consistency2">2</label>
          </li>
          <li>
            <input
              id="consistency3"
              type="radio"
              name="consistency"
              value="3"
              checked={answerData.consistency === "3"}
              onChange={handleChange}
            />
            <label htmlFor="consistency3">3</label>
          </li>
          <li>
            <input
              id="consistency4"
              type="radio"
              name="consistency"
              value="4"
              checked={answerData.consistency === "4"}
              onChange={handleChange}
            />
            <label htmlFor="consistency4">4</label>
          </li>
        </ul>
      </label>
      <label className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <colourRadioButtons/> */}
        <ul>
          <li>
            <input
              id="colour1"
              type="radio"
              name="colour"
              value="1"
              checked={answerData.colour === "1"}
              onChange={handleChange}
            />
            <label htmlFor="colour1">1</label>
          </li>
          <li>
            <input
              id="colour2"
              type="radio"
              name="colour"
              value="2"
              checked={answerData.colour === "2"}
              onChange={handleChange}
            />
            <label htmlFor="colour2">2</label>
          </li>
          <li>
            <input
              id="colour3"
              type="radio"
              name="colour"
              value="3"
              checked={answerData.colour === "3"}
              onChange={handleChange}
            />
            <label htmlFor="colour3">3</label>
          </li>
          <li>
            <input
              id="colour4"
              type="radio"
              name="colour"
              value="4"
              checked={answerData.colour === "4"}
              onChange={handleChange}
            />
            <label htmlFor="colour4">4</label>
          </li>
        </ul>
      </label>
      <label className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        {/* <logoRadioButtons/> */}
        <ul>
          <li>
            <input
              id="logo1"
              type="radio"
              name="logo"
              value="1"
              checked={answerData.logo === "1"}
              onChange={handleChange}
            />
            <label htmlFor="logo1">1</label>
          </li>
          <li>
            <input
              id="logo2"
              type="radio"
              name="logo"
              value="2"
              checked={answerData.logo === "2"}
              onChange={handleChange}
            />
            <label htmlFor="logo2">2</label>
          </li>
          <li>
            <input
              id="logo3"
              type="radio"
              name="logo"
              value="3"
              checked={answerData.logo === "3"}
              onChange={handleChange}
            />
            <label htmlFor="logo3">3</label>
          </li>
          <li>
            <input
              id="logo4"
              type="radio"
              name="logo"
              value="4"
              checked={answerData.logo === "4"}
              onChange={handleChange}
            />
            <label htmlFor="logo4">4</label>
          </li>
        </ul>
      </label>
      <CheckBoxGroup
        name="spendTime"
        options={{
          swimming: "Swimming",
          bathing: "Bathing",
          chatting: "Chatting",
          noTime: "I don't like to spend time with it",
        }}
        handleChangeChecked={handleChangeChecked}
      >
        <h3>How do you like to spend time with your rubber duck? </h3>
      </CheckBoxGroup>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={answerData.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={answerData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={answerData.email}
          onChange={handleChange}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}
export default Form
