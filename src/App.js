import './App.css';
import Logo from './Images/KaInk-removebg-preview.png'
import Foto from './Images/407253571_341623938511924_4552526493898086616_n.jpg'
import Foto1 from './Images/376009448_517027237288918_5479021053776977374_n.jpg'
import Foto2 from './Images/379302108_995595494986306_4921661095911704516_n.heic'
import Foto3 from './Images/387746824_1263027127749576_1891946101816022222_n.heic'
import Foto4 from './Images/395440792_1305912796727237_9011048728437088879_n.heic'
import Foto5 from './Images/409722484_880674240125156_2122114184429126613_n.heic'
import Foto6 from './Images/405494208_707611867744778_4199707633261190300_n.heic'

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <a href='#about'>Sobre</a>
        <a href='#gallery'>Galeria</a>
        <img src={Logo}/>
        <a href='#contact'>Contato</a>
        <a href='#contact'>Endereço</a>
      </nav>
      <nav className='nav-mob'>
      <img src={Logo}/>
      <div>
        <a href='#about'>Sobre</a>
        <a href='#gallery'>Galeria</a>
        <a href='#contact'>Contato</a>
        <a href='#contact'>Endereço</a>
      </div>
      </nav>
      <section className='home'>
      </section>
      <section className='about' id='about'>
        <div>
        <h3>"A arte vai consumir a todos nós"</h3>
        <p> Me chamo Kaique, sou tatuador desde 2022 e sou especialista em Pontilhismo</p>
        </div>
        <img src={Foto}/>
      </section>
      <section className='gallery' id='gallery'>
        <div className='container'>
          <div className='gallery-wrapper'>
            <div className='galeria'>
            <img src={Foto1} className='item'/>
            <img src={Foto2} className='item'/>
            <img src={Foto3} className='item'/>
            <img src={Foto4} className='item'/>
            <img src={Foto5} className='item'/>
            <img src={Foto6} className='item'/>
            </div>
          </div>
        </div>
      </section>
      <section className='contact' id='contact'>
        <div className='contato'>
        <h2>Contatos</h2>
        <div className='text'>
          <p><i class='bx bx-phone' ></i>Telefone: (22) 9 9845-3991</p>
          <div className='social'>
          <a href='https://www.instagram.com/tattoo.kaink/' target='_blank'><i class='bx bxl-instagram' ></i></a>
          <a href='https://wa.me/5522998453991' target='_blank'><i class='bx bxl-whatsapp'></i></a>
          </div>
        </div>

        </div>
        <div className='endereço'>
          <h2>Endereço</h2>
          <div>
          <h3>Mafia Tattoo Studio</h3>
          <p><i class='bx bx-map' ></i> Rua Dr. Abreu Lima<br></br>N° 251 - Loja 10<br></br>Centro, Bom Jesus do Itabapoana - RJ</p>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright <i class='bx bx-copyright'></i> 2023 Eric Moura - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
