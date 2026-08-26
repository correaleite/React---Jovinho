import { useState, useEffect } from 'react';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // inicializa "logado" já lendo o localStorage
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true';
  });

  // se já tinha um email salvo, recupera ele também (pra mostrar "logado como fulano@...")
  useEffect(() => {
    const emailSalvo = localStorage.getItem('emailLogado');
    if (emailSalvo) {
      setEmail(emailSalvo);
    }
  }, []);

  function logar() {
    const emailTrim = email.trim();
    const senhaTrim = senha.trim();

    if (emailTrim === "jovinho@fiap.com.br" && senhaTrim === "123") {
      setLogado(true);
      localStorage.setItem('logado', 'true');
      localStorage.setItem('emailLogado', emailTrim);
    }
    else if (emailTrim.indexOf("@") === -1 && senhaTrim.length >= 5) {
      alert('Email inválido');
      console.log(`email inválido: ${emailTrim}`);
    }
    else if (emailTrim.indexOf("@") !== -1 && senhaTrim.length <= 5) {
      alert('A senha precisa de no mínimo 5 caracteres');
      console.log(`senha inválida: ${senhaTrim}`);
    }
    else {
      alert('Email ou senha incorretos');
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
            <div className='logado'>
              <h2>Bem-vindo!</h2>
              <p>Você está logado como <strong>{email}</strong></p>
              <button onClick={sair}>Sair</button>
            </div>
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
                </div>
              </div>
              <button id="btnLogar" onClick={logar}>Entrar</button>
              <div className="report-linha">
                <p>Problemas de login?</p>
                <button id="btnReportar" onClick={reportar}>Reporte aqui</button>
              </div>
              <p>Email: jovinho@fiap.com.br<br />Senha: 123</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginSection;