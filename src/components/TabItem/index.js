// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'active' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-button ${tabBtnClassName} `}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
