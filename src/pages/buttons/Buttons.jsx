// https://dcode.domenade.com/tutorials/easily-create-buttons-with-icons-html-and-css
import './Buttons.css'

export default function Buttons() {

  return (
    <div className="container">
      <h2>Buttons</h2>
      <div className="buttons">
        <button type="button" class="button">
          <span class="button__text">Download</span>
          <span class="button__icon">
            <ion-icon name="cloud-download-outline"></ion-icon>
          </span>
        </button>
      </div>      
    </div>
  )
}