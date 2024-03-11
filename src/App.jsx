import { useState, useRef } from 'react';
import './App.css';
import linkedin from './images/linkedin-icon.png';
import github from './images/github-icon.png';
import aluraicone from './images/iconealura.png';
import { AluraSvg } from './components/alura.jsx';
import { Alert } from './components/alert.jsx';
import { Footer } from './components/footer.jsx';
import { RightSide } from './components/rightside.jsx';
import { LeftSide } from './components/leftside.jsx';

function App() {
  const [textAreaInicial, setTextAreaInicial] = useState('');
  const [textoInserido, setTextoInserido] = useState('');
  const [textoModificado, setTextoModificado] = useState('');
  const [dark, setDark] = useState(false);

  const handleCodificar = () => {
    const textoModificado = textoInserido.replace(/a|e|i|o|u/g, (vogais) => {
      switch (vogais) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return vogais;
      }
    });
    setTextoModificado(textoModificado);
  };
  const handleDecodificar = () => {
    const textoModificado = textoInserido.replace(/ai|enter|imes|ober|ufat/g, (silabas) => {
      switch (silabas) {
        case 'ai':
          return 'a';
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return silabas;
      }
    });
    setTextoModificado(textoModificado);
  };
  const handleCopiarTexto = () => {
    navigator.clipboard.writeText(textoModificado);
  };
  const handleRestringirTexto = (event) => {
    const regex = /^[a-z\s]*$/;
    const inputText = event.target.value;
    if (regex.test(inputText) || inputText === '') setTextoInserido(inputText);
  };
  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  const transfTexto = () => {
    return setTextoInserido(textoModificado);
  };

  return (
    <>
      <header className={dark ? 'header dark' : 'header'}>
        <a href="https://www.alura.com.br/" target="_blank">
          <AluraSvg />
        </a>
      </header>
      <div className={dark ? 'trilho dark' : 'trilho'} onClick={toggleDarkMode}>
        <div className="indicador"> </div>
      </div>
      <div className="container">
        <LeftSide
          textoInserido={textoInserido}
          handleRestringirTexto={handleRestringirTexto}
          setDark={setDark}
          dark={dark}
          handleCodificar={handleCodificar}
          handleDecodificar={handleDecodificar}
        />

        <RightSide
          textoModificado={textoModificado}
          setTextoInserido={setTextoInserido}
          setTextoModificado={setTextoModificado}
          handleCopiarTexto={handleCopiarTexto}
          dark={dark}
          textoInserido={textoInserido}
          transfTexto={transfTexto}
        />
      </div>
      <Footer dark={dark} />
    </>
  );
}

export default App;
