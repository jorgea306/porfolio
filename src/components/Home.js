import React from 'react';
import { Link } from 'react-router-dom';

import { Introduccion } from './Introduccion';
import { Lenguajes } from './Lenguajes';



export const Home = () => {
    return (
        <div className="landing is-preload">
            <div className="fondo" >

                <header id="header">
					<h1><Link className="enlace" to="/">Porfolio</Link> by Albornos Jorge</h1>
					<nav id="nav">
						<ul>
							<li><Link className="enlace" to="/blog">Conoceme</Link></li>
							
						</ul>
					</nav>
				</header>

                <section id="banner">
                    <h2 >Albornos Saint Claire Jorge Ruben</h2>
                    <p>Tecnico Superior en Desarrollo de Software</p>
                </section>

    
                <section id="main" class="container">

                    <Introduccion />

                    <Lenguajes />
                
                </section>

    
                <footer id="footer">
                    <h3 className="texto-secundario">Contacto</h3>
                        <ul class="icons">
                            <li><a href="https://www.facebook.com/jorge.albornos" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                            <li><a href="https://www.instagram.com/jorge_albornos/?hl=es-la" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                            <li><a href="https://github.com/jorgea306" class="icon brands fa-github"><span class="label">Github</span></a></li>
                            <li><a href="https://www.linkedin.com/in/jorge-ruben-albornos-saint-claire-5a0b261b5/" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
                            
                            
                        </ul>
                        <ul class="copyright">
                            <li className="texto-secundario">jorgea306@gmail.com</li>
                            <li className="texto-secundario">&copy;Jorge Ruben Albornos Saint Claire</li>
                        </ul>
                </footer>

            </div>
  
        </div>

    )
}
