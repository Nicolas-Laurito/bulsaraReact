import React from 'react';
import './QuienesSomos.css'



const QuienesSomos = () => {
    return (
        <div>
            <section id="quien" class="sec sec2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 logo " data-aos="fade-right" data-aos-duration="1500">
                        <img src="./img/logoOk1.jpg" alt="logo Bulsara GRow Shop"/>
                    </div>
                    <div className="col-sm-6 col-lg-8 quienSomos" data-aos="fade-left" data-aos-duration="1500">
                        <h2>Quienes Somos?</h2>
                        <p>Somos Flor y Javi... en este espacio web te ayudamos, asesoramos y ofrecemos los mejores
                            productos para tu cultivo. Trabajamos con productos 100% naturales. </p>
                    </div>
                </div>
            </div>

        </section>
        </div>
    );
}

export default QuienesSomos;
