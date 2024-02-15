import "./main.css";

export const Head = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
         <div className="header-list">
         <div className="header-icomka">
         <i class="fa-solid fa-envelope"></i>
         <h4 className="hader-h4">aapn4535@gmail.com</h4>
         </div>
          <div className="header-item-icomka">
          <i class="fa-solid fa-map"></i>
          <h4 className="header-h4">Andijon.sh</h4>
          </div>
          <div className="header-text">
          <i class="fa-solid fa-user"></i>
          <h4 className="text-h4">
            log in
          </h4>
          <h4 className="text-item-h4">
            Register
          </h4>
          <a href="#" className="text-item-a">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-item-a">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="text-item-a">
          <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="#" className="text-item-a">
          <i class="fa-brands fa-linkedin"></i>
          </a>
          </div>
         </div>
          </div>
        </div>
      </header>
    </>
  );
};
