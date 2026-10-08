import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { logado, email: emailLogado, login, logout } = useAuth();
  const navigate = useNavigate();

  function forcaSenha(senha) {
    const pontos = Math.min(senha.length, 10);
    return pontos;
  }

  function statusForcaSenha(pontos) {
    if (pontos === 0) return { texto: '', cor: 'transparent' };
    if (pontos < 6) return { texto: 'Fraca', cor: 'red' };
    if (pontos < 9) return { texto: 'Média', cor: 'orange' };
    return { texto: 'Forte', cor: 'green' };
  }

  const pontosSenha = forcaSenha(senha);
  const { texto: textoForca, cor: corForca } = statusForcaSenha(pontosSenha);

  function logar() {
    const emailTrim = email.trim();
    const senhaTrim = senha.trim();

    if (emailTrim === "jovinho@fiap.com.br" && senhaTrim.length >= 5) {
      login(emailTrim);
      navigate('/dashboard');
    }
    else if (emailTrim.indexOf("@") === -1 && senhaTrim.length >= 5) {
      alert('Email inválido');
      console.log(`email inválido: ${emailTrim}`);
    }
    else if (emailTrim.indexOf("@") !== -1 && senhaTrim.length < 5) {
      alert('A senha precisa de no mínimo 5 caracteres');
      console.log(`senha inválida: ${senhaTrim}`);
    }
    else {
      alert('Email incorreto');
      console.log(`email: ${emailTrim} e senha: ${senhaTrim}`);
    }
  }

  function reportar() {
    let report = prompt("Reporte o problema em seu login", "");
    if (report != null) {
      alert(`verificaremos a sua denuncia: "${report}"`);
    }
    console.log(`Report: ${report}`);
  }

  function sair() {
    logout();
    setEmail('');
    setSenha('');
  }

  return (
    <section className="min-h-screen px-s80 flex flex-col justify-center items-center max-[1024px]:px-s40 max-[680px]:px-s20" id="login">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center border-3 border-strong-dark bg-white-obscure pt-s40 gap-6.25 h-137.5 w-2/5 rounded-2xl max-[1024px]:w-[65%] max-[680px]:w-9/10 max-[680px]:h-auto max-[680px]:pb-s40">
          {logado ? (
            <>
              <h2>Bem-vindo!</h2>
              <p className="text-[2vmin]">Você está logado como <strong>{emailLogado}</strong></p>
              <button onClick={sair} className="h-s30 w-1/5 border border-lighter-dark rounded-[3px] bg-white transition duration-400 hover:bg-blue hover:text-white max-[680px]:w-1/2">Sair</button>
            </>
          ) : (
            <>
              <h2 className='font-bold'>Login</h2>
              <div className="w-full px-s40 max-[680px]:px-s20">
                <div className="mt-s10">
                  <label htmlFor="IDemail">Email:</label>
                  <input
                    type="email"
                    id="IDemail"
                    name="IDemail"
                    placeholder=" Endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-s30 w-full pl-s10 border border-lighter-dark rounded-[3px] bg-white"
                  />
                </div>
                <div className="mt-s10">
                  <label htmlFor="IDsenha">Senha:</label>
                  <input
                    type="password"
                    id="IDsenha"
                    name="IDsenha"
                    placeholder=" Mínimo de 5 caracteres"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="h-s30 w-full pl-s10 border border-lighter-dark rounded-[3px] bg-white"
                  />
                  {senha.length > 0 && (
                    <div className="mt-s10">
                      <div
                        style={{
                          width: `${pontosSenha * 10}%`,
                          height: '4px',
                          background: corForca,
                          transition: 'width 0.2s, background 0.2s'
                        }}
                      />
                      <span style={{ color: corForca, fontSize: '0.85em' }}>
                        {textoForca}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button id="btnLogar" onClick={logar} className="h-s30 w-1/5 border border-lighter-dark rounded-[3px] bg-white transition duration-400 hover:bg-blue hover:text-white max-[680px]:w-1/2">Entrar</button>
              <div className="flex flex-col justify-center items-center w-full gap-s10">
                <p className="text-[2vmin]">Problemas de login?</p>
                <button id="btnReportar" onClick={reportar} className="h-s30 w-1/5 border border-lighter-dark rounded-[3px] bg-white transition duration-400 hover:bg-blue hover:text-white max-[680px]:w-1/2">Reporte aqui</button>
              </div>
              <p className="text-[2vmin] text-center px-s20">Email: "jovinho@fiap.com.br"<br />Senha: Qualquer</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginSection;