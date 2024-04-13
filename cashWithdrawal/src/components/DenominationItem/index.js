import './index.css'

const DenominationItem = props => {
  const {amt, change} = props
  const {value} = amt

  const onChange = () => {
    change(value)
  }

  return (
    <li>
      <button type="button" onClick={onChange}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
