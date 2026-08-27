import { useState, useEffect } from 'react';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true';
  });

  useEffect(() => {
    const emailSalvo = localStorage.getItem('emailLogado');
    if (emailSalvo) {
      setEmail(emailSalvo);
    }
  }, []);

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
      setLogado(true);
      localStorage.setItem('logado', 'true');
      localStorage.setItem('emailLogado', emailTrim);
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
    setLogado(false);
    setEmail('');
    setSenha('');
    localStorage.removeItem('logado');
    localStorage.removeItem('emailLogado');
  }

  return (
    <section className="section-login" id="login">
      <div className="card-login-container">
        <div className="card-login">
          {logado ? (
            <>
              <h2>Bem-vindo!</h2>
              <p>Você está logado como <strong>{email}</strong></p>
              <button onClick={sair}>Sair</button>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <div className="inputs-login">
                <div className="div-email">
                  <label htmlFor="IDemail">Email:</label>
                  <input
                    type="email"
                    id="IDemail"
                    name="IDemail"
                    placeholder=" Endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="div-senha">
                  <label htmlFor="IDsenha">Senha:</label>
                  <input
                    type="password"
                    id="IDsenha"
                    name="IDsenha"
                    placeholder=" Mínimo de 5 caracteres"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  {senha.length > 0 && (
                    <div className="forca-senha">
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
              <button id="btnLogar" onClick={logar}>Entrar</button>
              <div className="report-linha">
                <p>Problemas de login?</p>
                <button id="btnReportar" onClick={reportar}>Reporte aqui</button>
              </div>
              <p>Email: "jovinho@fiap.com.br"<br />Senha: Qualquer</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginSection;