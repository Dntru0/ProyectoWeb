import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id="home" className="home">RINCÓN DEL SABOR ☕</h1>
      <div className="slider-frame">
        <ul>
          <li><img src="src/img/demostración.jpg" alt="" /></li>
          <li><img src="src/img/demostracion1.jpg" alt="" /></li>
          <li><img src="src/img/demostracion3.jpg" alt="" /></li>
        </ul>
      </div>
      <div>
        <nav className="links">
          <ul>
            <li style={{ margin: '0 15px' }}><a href="#home">Inicio</a></li>
            <li style={{ margin: '0 15px' }}><a href="#nosotros">Nosotros</a></li>
            <li style={{ margin: '0 15px' }}><a href="#menu">Menú</a></li>
            <li style={{ margin: '0 15px' }}><a href="#unete">Únete</a></li>
          </ul>
        </nav>
        <div className="textimg">
          <p class="text">Bienvenido a tu cafetería favorita "Rincón del sabor", donde podrás encontrar
            el café de tu preferencia y cualquiera que puedas imaginar, ven y disfruta.
          </p>
          <img src="src/img/cafecito.jpg" />
        </div>
      </div>
      <h2>TENDENCIAS</h2>
      <p>De acuerdo a nuestros valiosos clientes este es el top de la semana: </p>
      <br></br>
      <div className="menucafe">
        <div className="producto">
          <img src="src/img/capuchino.jpg" alt="Capuchino" />
          <p1>CAFÉ CAPUCHINO</p1>
          <p>Parecido al café con leche, es elaborado con café expreso y partes iguales de leche
            y crema o espuma de leche.</p>
        </div>
        <div class="producto">
          <img src="src/img/cafeconleche.jpg" alt="Café con Leche" />
          <p1>CAFÉ CON LECHE</p1>
          <p>Preparado con 50% café y 50% leche (de tu elección).</p>
        </div>
        <div class="producto">
          <img src="src/img/LatteCafe.jpg" alt="Café Latte" />
          <p1>CAFÉ LATTE</p1>
          <p>Preparado con uno o dos shots de espresso, leche al vapor y una fina capa de leche espumosa encima.</p>
        </div>
        <div class="producto">
          <img src="src/img/tradicional.jpg" alt="Tradicional" />
          <p1>CAFÉ TRADICIONAL</p1>
          <p>Hecho totalmente del café de tu elección.</p>
        </div>
        <div class="producto">
          <img src="src/img/mocha.jpg" alt="Café Mocha" />
          <p1>CAFÉ MOCHA</p1>
          <p>Variante del café con leche, esta preparado con 2/3 de expreso, 2/3 de leche vaporizada
            y un poco de chocolate (jarabe o en polvo).
          </p>
        </div>
        <div class="producto">
          <img src="src/img/affogato.jpg" alt="Café Affogato" />
          <p1>CAFÉ AFFOGATO</p1>
          <p>Una taza de café expreso con un poco de helado sabor vainilla con chocolate y galleta.</p>
        </div>
        <div class="producto">
          <img src="src/img/redvelvet.jpg" alt="Café Red Velvet" />
          <p1>CAFÉ RED VELVET</p1>
          <p>Preparado con: 1 ¼ taza de frambuesas congeladas, 1 ½ taza de leche de almendras, 1 taza de Colcafé clásico
            5 cucharadas de miel, ¼ de cucharadita de esencia de vainilla, 1 taza de hielo, Crema Chantilly y Ralladura de chocolate.
          </p>
        </div>
        <div class="producto">
          <img src="src/img/cafefrappe.jpg" alt="Café Frappé" />
          <p1>CAFÉ FRAPPÉ</p1>
          <p>Preparado con: 1 taza de leche (de tu preferencia), 1/2 taza de café, 1 taza de hielos y jarade de chocolate.</p>
        </div>
        <div class="producto">
          <img src="src/img/moka.jpg" alt="Café Moka" />
          <p1>CAFÉ MOKA</p1>
          <p>Preparado con: 1/3 de expreso, 2/3 de leche vaporizada y bastante chocolate en jarabe o en polvo.</p>
        </div>
      </div>
      <footer className="footer">
        <div className="footerconf">
          <h3>Nuestra Dirección</h3>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30566.769823863207!2d-93.15046942089842!3d16.734522700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9d814656e47%3A0x32e8a92cd635c11!2sPasteler%C3%ADa%20Sol%20y%20Luna%20(cafeteria)!5e0!3m2!1ses!2smx!4v1743402567088!5m2!1ses!2smx"
              width="1100" height="450" style={{ border: '0' }} allowFullScreen=""
              loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="footerconf">
          <img src="src/img/logoem.png"/>
        </div>
        <div className="footerconf">
          <h3>Contacto</h3>
          <p>📞 +52 961 123 4567</p>
          <p>📧 Ricondelsabor@hotmail.com</p>
        </div>
      </footer>
    </>
  )
}

export default App

