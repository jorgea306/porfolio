import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
    return (
        <div className="is-preload">
        <div className="fondo" id="page-wrapper">


				<header id="header">
                    <h1><Link className="enlace" to="/">Porfolio</Link> by Albornos Jorge</h1>
                    <nav id="nav">
                        <ul>
                            <li><Link className="enlace" to="/">Home</Link></li>                         
                        </ul>
                    </nav>
				</header>

		
				<section id="main" class="container">
					<header>
						<h2>Generic</h2>
						<p>A generic page for every non-generic situation.</p>
					</header>
					<div class="box">
						<span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
						<h3>This is a subheading</h3>
						<p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
						<div class="row">
							<div class="row-6 row-12-mobilep">
								<h3>And now a subheading</h3>
								<p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
							</div>
							<div class="row-6 row-12-mobilep">
								<h3>And another subheading</h3>
								<p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
							</div>
						</div>
					</div>
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
