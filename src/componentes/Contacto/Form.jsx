import React from 'react';
import './Form.css'

const Form = () => {
    return (
        
            <form className="estilosForm" action="" name="miFormulario" method="post"  netlify >
            <div className="form-group ">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="nombre" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre"  data-aos="fade-right" data-aos-duration="1500"></input>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="ciudad" className="form-control" id="exampleFormControlInput1" placeholder="Pais/Localidad/Ciudad" data-aos="fade-left" data-aos-duration="1500"></input>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="telefono" className="form-control" id="exampleFormControlInput1" placeholder="Telefono" data-aos="fade-right" data-aos-duration="1500"></input>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" data-aos="fade-left" data-aos-duration="1500"></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1" data-aos="fade-right" data-aos-duration="1500">Como Nos Conocistes?</label>
                <select className="form-control" id="exampleFormControlSelect1" name="comoNosConociste"  data-aos="fade-right" data-aos-duration="1500">
                  <option></option>
                  <option>Redes Sociales</option>
                  <option>Buscador Web</option>
                  <option>Recomendacion de alguien</option>
                
                </select>
              </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="mensaje" placeholder="Ingrese Su consulta" data-aos="flip-up" data-aos-duration="1500"></textarea>
            </div>
            <input className="btn btn-success estiloBoton btnBot" type="submit" value="Enviar"></input>
        </form>
        
    );
}

export default Form;
