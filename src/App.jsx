import './App.css';
import { useState } from 'react';
import { AluraSvg } from './components/alura.jsx';
import { Footer } from './components/footer.jsx';
import { RightSide } from './components/rightside.jsx';
import { LeftSide } from './components/leftside.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
    if (regex.test(inputText) || inputText === '') {
      setTextoInserido(inputText);
    } else {
      toast.warn('Letras maiúsculas e acentos não são permitidos.');
    }
  };
  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  const transfTexto = () => {
    return setTextoInserido(textoModificado);
  };
  const resetTexto = () => {
    setTextoInserido('');
    setTextoModificado('');
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
          dark={dark}
          handleCodificar={handleCodificar}
          handleDecodificar={handleDecodificar}
        />

        <RightSide
          textoModificado={textoModificado}
          handleCopiarTexto={handleCopiarTexto}
          dark={dark}
          transfTexto={transfTexto}
          resetTexto={resetTexto}
        />
      </div>
      <Footer dark={dark} />
      <ToastContainer position="top-center" limit={5} stacked theme={dark ? 'dark' : 'light'} />
    </>
  );
}

export default App;
