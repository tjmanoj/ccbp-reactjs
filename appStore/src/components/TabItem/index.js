import './index.css'

const TabItem = props => {
  const {details, isactive, changeTab} = props
  const {displayText, tabId} = details
  const selected = isactive ? 'selected-tab' : ''
  const changetab = () => {
    changeTab(tabId)
  }
  return (
    <li className={`item ${selected}`} onClick={changetab}>
      <button className={selected}>{displayText}</button>
    </li>
  )
}
export default TabItem
