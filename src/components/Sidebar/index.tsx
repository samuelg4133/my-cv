import React from "react";
import {
  FaUserTie,
  FaCity,
  FaLanguage,
  FaLinkedinIn,
  FaWallet,
} from "react-icons/fa";
import { BsCalendarDateFill, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { MdComputer, MdMail } from "react-icons/md";

import SidebarItem from "./SidebarItem";
import SidebarItemTopic from "./SidebarItemTopic";

import "./styles.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <SidebarItem title="INFO">
        <SidebarItemTopic title="Nome" content="Samuel Gomes">
          <FaUserTie size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic title="Data de nascimento" content="29/05/1999">
          <BsCalendarDateFill size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic
          title="Cidade atual"
          subtitle="Buritizeiro-MG"
          content="*Disponível para mudanças*"
        >
          <FaCity size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic title="Celular" content="+55 (38) 9 9982-1505">
          <BsTelephoneFill size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic title="E-mail" content="leosgv.sv@gmail.com">
          <MdMail size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic title="Habilitação" content="CNH A e B">
          <FaWallet size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic
          title="Idiomas"
          subtitle="Espanhol e Inglês"
          content="Intermediário"
        >
          <FaLanguage size={18} />
        </SidebarItemTopic>
      </SidebarItem>

      <SidebarItem title="EDUCAÇÃO">
        <SidebarItemTopic
          title="Curso Téc. Informática"
          subtitle="IFNMG - Campus Pirapora"
          content="fev 2015 - jul 2016"
        >
          <MdComputer size={18} />
        </SidebarItemTopic>
        <SidebarItemTopic
          title="Sistemas de Informação"
          subtitle="IFNMG - Campus Pirapora"
          content="jul 2017 - presente"
        >
          <MdComputer size={18} />
        </SidebarItemTopic>
      </SidebarItem>

      <SidebarItem title="SOCIAL">
        <SidebarItemTopic title="GitHub" content="samuelg4133">
          <BsGithub size={24} />
        </SidebarItemTopic>
        <SidebarItemTopic title="Linkedin" content="samuel-gomes-325175147">
          <FaLinkedinIn size={24} />
        </SidebarItemTopic>
      </SidebarItem>
    </aside>
  );
};

export default Sidebar;
