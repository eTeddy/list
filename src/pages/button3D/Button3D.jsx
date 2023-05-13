import './Button3D.css'

export default function Button3D() {
  
  return (
    <div className="container">
      <h2>3D Buttons</h2>
      <div className="button3d">
        <a href="#" class="button">SEE MORE</a>
        <br /><br /><br />
        <button type="button" class="button button--secondary">CONTACT US</button>
        <br /><br /><br />
        <button type="button" class="button button--tertiary">GALLERY</button>
      </div>      
    </div>
  )
}