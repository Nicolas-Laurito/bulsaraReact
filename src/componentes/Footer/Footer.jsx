import React from 'react';
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';






const Footer = () => {
    return (
        
         
  <div className="container-fluid estilosFooter">
    <div className="row">
      <div className="col-sm-12 col-lg-4 ">
        <div className="centrarIframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52510.46751875694!2d-58.7264766573952!3d-34.65712174389688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf7809861d5d%3A0x6bc97859fd9d3d86!2sItuzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1651085521430!5m2!1ses!2sar"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="col-sm-12 col-lg-4">
        <div>
          <h2>Envios y Puntos de Encuentro</h2>
          <h3>Ituzaingo</h3>
          <h3>Padua</h3>
          <h3>Moron</h3>
          <h3>Castelar</h3>
          <h2>Medios de Pago</h2>
          <h3>Efectivo</h3>
          <h3>Mercado Pago</h3>
          <h3>Transferencia Bancaria</h3>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4 ">
        <div className="enlacesRedes">
          <Link to="https://api.whatsapp.com/send?phone=541122542983" target="blanck">
          <FontAwesomeIcon icon={faWhatsapp}/>
          </Link>
          <Link to="https://www.instagram.com/bulsaragrowshop/" target="blanck">
          <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="mailto:bulsara_cactus@gmail.com?subject=Consulta" target="blanck">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </div>
    </div>
  </div>


       
    );
}

export default Footer;
