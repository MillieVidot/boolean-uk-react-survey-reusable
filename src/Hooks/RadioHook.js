export default function RadioGroup({
  children,
  name,
  values,
  handleChange,
  answerData,
}) {
  console.log("values", values)
  console.log("name", name)
  console.log("answerData", answerData)

  const optionradio = values.map(value => (
    <li key={value}>
      <input
        id={(name, value)}
        type="radio"
        name={name}
        value={value}
        checked={{ answerData, name } === { value }}
        onChange={handleChange}
        s
      />
      <label htmlFor={(name, value)}>{value}</label>
    </li>
  ))

  return (
    <div className="form__group radio">
      {children}
      <ul>{optionradio}</ul>
    </div>
  )
}
