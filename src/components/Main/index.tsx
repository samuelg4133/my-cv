import React from "react";
import { GiDragonBalls } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";

import Topic from "./Topic";

import "./styles.css";
import TopicItem from "./TopicItem";
import Skills from "../Skills";

const Main: React.FC = () => {
  return (
    <main className="container">
      <Topic
        title="Experiência Profissional"
        icon={<MdOutlineWork size={24} />}
      >
        <TopicItem
          date="dez 2015 - fev 2016"
          title="AK Informática"
          subtitle="Estagiário"
          list={[
            "Atendimento ao público;",
            "Atualização de Sistema ERP;",
            "Manutenção de Computadores.",
          ]}
        />
        <TopicItem
          date="ago 2018 - jan 2019"
          title="Sicoob Sertão Minas"
          subtitle="Estagiário"
          list={[
            "Atendimento ao público;",
            "Criação de Artes Gráficas (Corel Draw);",
            "Suporte de Consórcios;",
            "Suporte de Consignados;",
            "Suporte de Máquina de Cartões (SIPAG).",
          ]}
        />
        <TopicItem
          date="fev 2019 - presente"
          title="Sicoob Sertão Minas"
          subtitle="Agente de Atendimento"
          list={[
            "Apresentação de Treinamentos e Reuniões (Até abril de 2021);",
            "Atendimento ao público (Até abril de 2021);",
            "Criação de Artes Gráficas (Corel Draw);",
            "Criação de Relatórios (Python e Excel);",
            "Desenvolvimento de Aplicação Mobile (React Native e ExpressJs);",
            "Lançamentos em Contas Correntes;",
            "Manutenção de Sistema (PHP Laravel);",
            "Suporte de Consórcios (Até abril de 2021);",
            "Suporte de Consignados (Até abril de 2021);",
            "Suporte de Máquina de Cartões (SIPAG) (Até abril de 2021);",
            "Suporte em Redes e Servidores (Windows Server 2012 e Linux);",
            "Suporte e Manutenção de Computadores e outros equipamentos (Cameras, Computadores, Impressoras, Servidores).",
          ]}
        />
      </Topic>
      <Topic title="Projetos de Destaque" icon={<GiDragonBalls size={24} />}>
        <TopicItem
          date="fev 2018 - jul 2018"
          title="Empresa Jr."
          subtitle="IFNMG - Campus Pirapora"
          list={["Integração da equipe que iniciou o projeto;"]}
        />
        <TopicItem
          date="fev 2018 - dez 2018"
          title="Diretório Acadêmico Garotos de Programa."
          subtitle="IFNMG - Campus Pirapora"
          list={["Integração da equipe que iniciou o projeto;", "Secretário."]}
        />
        <TopicItem
          date="ago 2019 - dez 2019"
          title="Projeto de Sistema de Informação para o Sicoob"
          subtitle="
            https://github.com/samuelg4133/SicoobProdutos
            "
          list={[
            "Feito em JavaFX;",
            "Projeto Escolar;",
            "Não utilizado na prática;",
            "Idealizou a criação do programa seguinte que é utilizado hoje.",
          ]}
        />
        <TopicItem
          date="nov 2020 - presente"
          title="Mais de 5 projetos de Data Science"
          subtitle="
          Python e Pandas
            "
          list={[
            "Projetos criados em sua maioria para otimização e automação de processos do Sicoob;",
            "Projetos não disponibilizados por motivo de segurança.",
          ]}
        />
        <TopicItem
          date="mai 2021 - ago 2021"
          title="Scanner de Documentos para o Sicoob"
          subtitle="
          https://github.com/samuelg4133/scanner
            "
          list={[
            "Feito com React Native, Typescript e Styled Components;",
            "Back-end também desenvolvido.",
          ]}
        />
        <TopicItem
          date="jul 2021 - presente"
          title="Projeto de TCC utilizando OCR para o Sicoob"
          subtitle="
          https://github.com/samuelg4133/ocr-project-server
            "
          list={[
            "Feito com Typescript, Express, Prisma e TesseractJS;",
            "Programa em desenvolvimento para projeto de TCC.",
            "O projeto visa realizar o reconhecimento óptico de caracteres em documentos para a melhoria de processos internos.",
          ]}
        />
        <TopicItem
          date="ago 2021 - presente"
          title="Aluno Ignite - Rocketseat"
          subtitle="
          Trilhas React, React Native, Express e Elixir
            "
          list={["Concluindo a trilha React."]}
        />
      </Topic>
      <Skills />
    </main>
  );
};

export default Main;
