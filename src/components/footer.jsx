import linkedin from '../images/linkedin-icon.png';
import github from '../images/github-icon.png';
import aluraicone from '../images/iconealura.png';

export function Footer({ dark }) {
  return (
    <footer className={dark ? 'footer dark' : 'footer'}>
      <h6>
        Criado por <span>Welliaquim</span>
      </h6>
      <div>
        <a href="https://www.linkedin.com/in/welliaquimb/" target="_blank">
          <img src={linkedin} alt="icone linkedin" />
        </a>
        <a href="https://github.com/welliaquim" target="_blank">
          <img src={github} alt="icone github" />
        </a>
        <a href="https://cursos.alura.com.br/user/barthosouza" target="_blank">
          <img className="invertAlura" src={aluraicone} alt="icone alura" />
        </a>
      </div>
    </footer>
  );
}
