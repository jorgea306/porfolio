import React from 'react';
import '../assets/css/main.css';
import '../assets/sass/main.scss';
import '../assets/css/fontawesome-all.min.css';
import { Link } from 'react-router-dom';

export const Introduccion = () => {
    return (
        <div>
            <section className="box special">
                <header className="major">
                    <div className="mini-foto"></div>
                    <h2 className="texto-principal">Hola Soy Jorge Ruben Albornos Saint Claire
                    <br />
                    soy Tecnico Superior en Desarrollo de Software</h2>
                    <p className="texto-principal">Comence mis estudios en el año 2017 y desde ese dia me enamore de la programacion, soy un perosna entusiasta que le gusta aprender cosas nuevas. Me encanta trabajar en equipo y me encantaria seguir creciendo como profesional y como persona.</p>
                </header>
                <ul className="actions fit">
                    <li><Link className="button special fit textoBtn" to="/blog">CONOCE MAS SOBRE MI</Link></li>
                </ul>
            </section>            
        </div>
    )
}
