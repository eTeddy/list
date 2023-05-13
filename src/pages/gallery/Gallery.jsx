// https://dcode.domenade.com/tutorials/create-an-image-grid-gallery-with-html-and-css
// https://cataas.com/#/
import './Gallery.css'

export default function Gallery() {

  const refreshPage = () => {
    window.location.reload();
  } 

  return (
    <div className="container">
      <h2>Cats</h2>
      <button type="button" className='gallery_btn' onClick={() => history.go(0)}>More 😸 Cats</button>
      <div className="gallery">
        <div class="image-grid">
                    {/* 
                    <img class="image-grid-col-2 image-grid-row-2" src="https://cataas.com/cat/cute/says/hello" alt="cat" />
                    */}
          <img src="https://cataas.com/cat/says/hello" alt="architecture" />
          <img src="https://cataas.com/cat/cute/says/hello" alt="architecture" />

          <img src="https://cataas.com/cat" alt="architecture" />
          <img src="https://cataas.com/cat/cute" alt="architecture" />
          <img src="https://cataas.com/cat/gif" alt="architecture" />
          <img src="https://cataas.com/cat/says/hello?size=50&color=red" alt="architecture" />
                    {/**  
                          <img src="      
                            setTimeout(()=> {
                              document.getElementById("result").innerHTML = "Hello, I am here";
                            }
                            ,3000);" alt="architecture" 
                          />
                      */}
      </div>       
      </div>      
    </div>
  )
}