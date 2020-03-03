import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>   

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2466239?s=460&v=4" alt="Rudy"/>
              <div className="user-info">
                <strong>Rudy</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>
              Dev Fullstack - NodeJS, ReactJs, React Native, Php, wordpress entre outros
            </p>
            <a href="https://github.com/rudolfjr">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2466239?s=460&v=4" alt="Rudy"/>
              <div className="user-info">
                <strong>Rudy</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>
              Dev Fullstack - NodeJS, ReactJs, React Native, Php, wordpress entre outros
            </p>
            <a href="https://github.com/rudolfjr">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2466239?s=460&v=4" alt="Rudy"/>
              <div className="user-info">
                <strong>Rudy</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>
              Dev Fullstack - NodeJS, ReactJs, React Native, Php, wordpress entre outros
            </p>
            <a href="https://github.com/rudolfjr">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2466239?s=460&v=4" alt="Rudy"/>
              <div className="user-info">
                <strong>Rudy</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>
              Dev Fullstack - NodeJS, ReactJs, React Native, Php, wordpress entre outros
            </p>
            <a href="https://github.com/rudolfjr">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
