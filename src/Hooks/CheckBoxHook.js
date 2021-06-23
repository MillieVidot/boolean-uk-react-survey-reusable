export default function CheckBoxGroup({
  name,
  options,
  handleChangeChecked,
  children,
}) {
  /*
  options = {sound: "It squeaks!", colour: "Its yellow!"}
  
  */

  const optionsLis = Object.keys(options).map(key => (
    <li key={key}>
      <label>
        <input
          name={name}
          type="checkbox"
          value={key}
          onChange={handleChangeChecked}
        />
        {options[key]}
      </label>
    </li>
  ))

  return (
    <div className="form__group">
      {children}
      <ul>{optionsLis}</ul>
    </div>
  )
}
