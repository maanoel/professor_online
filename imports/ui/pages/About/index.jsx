import React from "react";
import SiderBar from "../../components/SiderBar";
import "./styles.css";

const About = () => {
  return (
    <div>
      <SiderBar />
      <div className="about">
        <div className="bg-light">
          <div className=" container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">SOBRE O PROFFY</h1>
                <p className="lead text-muted mb-0">
                  O Proffy chega ao mundo virtual inovando a melhora da sua
                  educação!
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">
                  A nossa plataforma é totalmente online e fornece professores
                  em tempo real
                </h2>
                <p className="font-italic text-muted mb-4">
                  sim, é exatamente o que você entendeu: se quer uma aula neste
                  exato momento, você terá e com professores, que passaram por
                  nossa equipe de aprovação, disponíveis imediatamente.
                </p>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">E não para por aí! </h2>
                <p className="font-italic text-muted mb-4">
                  O Proffy também inclui a opção de ter aulas agendadas com
                  nossos melhores professores, o foco é no aluno que possui a
                  sua rotina organizada e entende a sua disponibilidade. Aqui
                  você encontrará as matérias que desejar, com professores
                  certificados e aprovados, em uma plataforma desenvolvida
                  inteiramente para a aprendizagem, com a escolha da opção que
                  melhor atender o seu nível de urgência.
                </p>
                <a
                  href="#"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light">Nosso time</h2>
                <p className="font-italic text-muted">
                  Nossa equipe é multidisciplinar, com foco em tecnologia e
                  educação.
                </p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Vitor Brito</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <a href="#" className="Instagram">
                      <img
                        className="list-inline-item"
                        src="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
                        alt="Minha Figura"
                      ></img>
                    </a>

                    <a href="#" className="LinkedIn">
                      <img
                        className="list-inline-item2"
                        src="https://cdn.iconscout.com/icon/free/png-256/linkedin-42-151143.png"
                        alt="Minha Figura"
                      ></img>
                    </a>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Nadine Gubert</h5>
                  <span className="small text-uppercase text-muted">
                    Diretora de Educação
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <a href="#" className="Instagram">
                      <img
                        className="list-inline-item"
                        src="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
                        alt="Minha Figura"
                      ></img>
                    </a>

                    <a href="#" className="LinkedIn">
                      <img
                        className="list-inline-item2"
                        src="https://cdn.iconscout.com/icon/free/png-256/linkedin-42-151143.png"
                        alt="Minha Figura"
                      ></img>
                    </a>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                    alt=""
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Matheus Ribeiro</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>

                  <ul className="social mb-0 list-inline mt-3">
                    <a href="#" className="Instagram">
                      <img
                        className="list-inline-item"
                        src="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
                        alt="Minha Figura"
                      ></img>
                    </a>

                    <a href="#" className="LinkedIn">
                      <img
                        className="list-inline-item2"
                        src="https://cdn.iconscout.com/icon/free/png-256/linkedin-42-151143.png"
                        alt="Minha Figura"
                      ></img>
                    </a>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Tomas Miseravão</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>

                  <ul className="social mb-0 list-inline mt-3">
                    <a href="#" className="Instagram">
                      <img
                        className="list-inline-item"
                        src="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
                        alt="Minha Figura"
                      ></img>
                    </a>

                    <a href="#" className="LinkedIn">
                      <img
                        className="list-inline-item2"
                        src="https://cdn.iconscout.com/icon/free/png-256/linkedin-42-151143.png"
                        alt="Minha Figura"
                      ></img>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-light pb-5">
          <div className="container text-center">
            <p className="font-italic text-muted mb-0">
              &copy; Copyrights Company.com All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
