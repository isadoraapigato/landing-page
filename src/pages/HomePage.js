import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <img src={logo}></img>
        <div className="headerOptionsAligner">
          <Link className="removeTextDecoration" to="/plans">
            Planos
          </Link>
          <div className="button">
            <p>Cadastre-se</p>
          </div>
        </div>
      </header>
      <section className="heroSection">
        <p className="heroSectionText">
          Coloque em <span>prática</span> os seus objetivos e com <span>facilidade</span> veja a sua{' '}
          <span>evolução</span>
        </p>
        <div className="secondaryButton">
          <p>Cadastre-se</p>
        </div>
        <img className="woman" src="./woman.png"></img>
      </section>
      <section className="bottomSection">
        <div className="bottomSectionWidthLimit">
          <p className="bottomSectionTitle">Nossas funcionalidades</p>
          <p className="bottomSectionParagraph">
            A <span>experiencia digital</span> que você precisa ter para encontrar a maneira certa para alcançar seu
            objetivo e manter uma vida mais saudável de forma <span>prática</span>, <span>divertida</span> e{' '}
            <span>acessível</span>.
          </p>
        </div>
        <div className="bottomSectionItems">
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./person.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">Especialistas</p>
                <p>
                  Veja as melhores indicações de especialistas na área da saúde ou você que é um excelente especialista,
                  seja indicado
                </p>
              </article>
            </div>
          </div>
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./gym.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">Treinos</p>
                <p>
                  Disponibilizamos vídeos de treinos e mobilidade para criar e/ou auxiliar o seu treino e ter uma ótima
                  execução
                </p>
              </article>
            </div>
          </div>
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./diet.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">Receitas</p>
                <p>
                  Você poderá escolher as melhores opções de receitas para transformar a sua alimentação e alcançar o
                  seu objetivo
                </p>
              </article>
            </div>
          </div>
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./meta.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">Metas</p>
                <p>
                  Você poderá criar metas e ver o seu progresso, através de registros e estatísticas. Além disso, será
                  notificado para lembrar das metas no dia a dia
                </p>
              </article>
            </div>
          </div>
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./seewiki.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">SeeWiki</p>
                <p>
                  Utilize nosso método de pesquisa prático e descubra as novidades no mundo fitness de forma intuitiva
                </p>
              </article>
            </div>
          </div>
          <div className="bottomSectionItem">
            <div className="bottomSectionItemPart1">
              <div className="bottomSectionItemFixedPart">
                <img src="./diary.svg"></img>
              </div>
              <article>
                <p className="bottomSectionItemTitle">Diário</p>
                <p>Com a opção de diário, você conseguirá descrever o seu dia e acompanhar a sua evolução</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
