import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

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
    <section className="min-h-screen px-s80 flex flex-col justify-center bg-white-obscure items-center max-[1024px]:px-s40 max-[680px]:px-s20" id="login">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center bg-white pt-s40 gap-6.25 h-150 w-4/5 rounded-4xl max-[1024px]:w-[65%] max-[680px]:w-9/10 max-[680px]:h-auto max-[680px]:pb-s40">
          {logado ? (
            <>
              <h2>Bem-vindo!</h2>
              <p className="text-2v">Você está logado como <strong>{emailLogado}</strong></p>
              <button onClick={sair} className="h-s30 w-1/5 border border-lighter-dark rounded-[3px] bg-white transition duration-400 hover:bg-blue hover:text-white max-[680px]:w-1/2">Sair</button>
            </>
          ) : (
            <>
              <h2 className='font-bold'>Login</h2>
              <div className="w-full px-s40 max-[680px]:px-s30">
                <div className="mt-s10">
                  <label htmlFor="IDemail">Email:</label>
                  <input
                    type="email"
                    id="IDemail"
                    name="IDemail"
                    placeholder=" Endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-s30 w-full px-s10 py-s20 rounded-3xl bg-white-obscure"
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
                    className="h-s30 w-full px-s10 py-s20 rounded-3xl bg-white-obscure"
                  />
                  {senha.length > 0 && (
                    <div className=" positon: absolute">
                      <div
                        style={{
                          height: '4px',
                        }}
                      />
                      <span style={{ color: corForca, fontSize: '0.85em' }}>
                        {textoForca}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-s90 mt-s30 mb-s40 px-s20 max-md:grid-cols-1 max-md:gap-s30'>
                <button id="btnLogar" onClick={logar} className="px-s30 py-s10 w-full rounded-3xl bg-white-obscure transition duration-400 cursor-pointer hover:text-blue">Entrar</button>
                <button id="btnReportar" onClick={reportar} className="px-s30 py-s10 w-full rounded-3xl bg-white-obscure transition duration-400 cursor-pointer hover:text-blue">Reporte problemas de login</button>
              </div>
              <div className='flex justify-between gap-s30 w-2/5 mb-s30 max-md:flex-col max-md:w-full max-md:items-center'>
                <p className="text-2v max-md:text-2p5v max-sm:text-3v">Email: "jovinho@fiap.com.br"</p>
                <p className="text-2v max-md:text-2p5v max-sm:text-3v">Senha: Qualquer</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginSection;