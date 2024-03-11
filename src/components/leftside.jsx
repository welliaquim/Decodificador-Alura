export function LeftSide({ textoInserido, handleRestringirTexto, handleCodificar, handleDecodificar, dark }) {
  return (
    <div className="container__left-side">
      <textarea
        value={textoInserido}
        onChange={(event) => handleRestringirTexto(event)}
        className="left-side__textEntry"
        type="text"
        placeholder="Digite aqui seu texto para codifica-lo."
      />
      <p className={dark ? 'p dark' : 'p'}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8 4C7.87361 4.00007 7.74863 4.02662 7.63312 4.07793C7.51761 4.12924 7.41413 4.20418 7.32934 4.29791C7.24456 4.39165 7.18035 4.5021 7.14084 4.62217C7.10134 4.74223 7.08743 4.86923 7.1 4.995L7.45 8.502C7.46176 8.63977 7.5248 8.76811 7.62664 8.86164C7.72849 8.95516 7.86173 9.00705 8 9.00705C8.13827 9.00705 8.27151 8.95516 8.37336 8.86164C8.4752 8.76811 8.53824 8.63977 8.55 8.502L8.9 4.995C8.91257 4.86923 8.89866 4.74223 8.85915 4.62217C8.81965 4.5021 8.75544 4.39165 8.67066 4.29791C8.58587 4.20418 8.48239 4.12924 8.36688 4.07793C8.25137 4.02662 8.12639 4.00007 8 4ZM8.002 10C7.73678 10 7.48243 10.1054 7.29489 10.2929C7.10736 10.4804 7.002 10.7348 7.002 11C7.002 11.2652 7.10736 11.5196 7.29489 11.7071C7.48243 11.8946 7.73678 12 8.002 12C8.26722 12 8.52157 11.8946 8.70911 11.7071C8.89664 11.5196 9.002 11.2652 9.002 11C9.002 10.7348 8.89664 10.4804 8.70911 10.2929C8.52157 10.1054 8.26722 10 8.002 10Z"
            fill="#495057"
          />
        </svg>
        Apenas letras minúsculas e sem acento.
      </p>
      <div>
        <button
          className={dark ? 'cripto dark' : 'cripto'}
          type="submit"
          disabled={!textoInserido}
          onClick={() => handleCodificar()}
        >
          Criptografar
        </button>
        <button
          className={dark ? 'uncripto dark' : 'uncripto'}
          type="submit"
          disabled={!textoInserido}
          onClick={() => handleDecodificar()}
        >
          Descriptografar
        </button>
      </div>
    </div>
  );
}
