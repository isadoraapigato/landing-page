import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function PlansPage() {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <div className="headerOptionsAligner">
          <p className="plano">Planos</p>
          <div className="button">
            <p>Cadastre-se</p>
          </div>
        </div>
      </header>
      <section>
        <div className="plansPageTextAligner">
          <h1>Escolha o seu plano</h1>
          <p>
            Descubra a experiência digital essencial para atingir seus objetivos e manter uma vida saudável, de forma
            prática, divertida e acessível.
          </p>
        </div>
        <div className="plansOptionsAligner">
          <div className="plansOption">
            <h3>Gratuito</h3>
            <h1>R$0</h1>
            <div className="ad">
              <p>Possui propagandas</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Acesso a todas as funcionalidades do nosso aplicativo</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Realizar o seu sonho de evoluir e alcançar suas metas e objetivos. </p>
            </div>
            <div className="button marginTopAuto">Começar agora</div>
          </div>
          <div className="plansOption planOptionCenter">
            <div className="recommend">
              <p>Recomendado</p>
            </div>
            <h3>Pessoal</h3>
            <h1>
              R$1,99<span className="span2">/mês</span>
            </h1>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Acesso a todas as funcionalidades do nosso aplicativo</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Realizar o seu sonho de evoluir e alcançar suas metas e objetivos. </p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Treino com vídeos para ter a melhor execução dos exercícios.</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>As melhores indicações e contatos de especialistas para dar suporte e cuidar dos seus habitos .</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Acesso à receitas saudavéis para compor a sua dieta.</p>
            </div>
            <div className="secondaryButton marginTopAuto">Começar agora</div>
          </div>
          <div className="plansOption">
            <h3>Profissional</h3>
            <h1>
              R$200<span className="span2">/mês</span>
            </h1>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>Aba personalizada para ser indicado dentro do nosso aplicativo.</p>
            </div>
            <div className="infoAligner">
              <img src="../check.png"></img>
              <p>
                Perfil personalizavel para colocar meios de contatos , breve biografia, localização de onde atende e
                especialidades (público alvo).
              </p>
            </div>
            <div className="button marginTopAuto">Converse com a gente</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlansPage;
