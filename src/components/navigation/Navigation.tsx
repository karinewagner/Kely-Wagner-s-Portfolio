import React from "react";
import "./style.css";
import IconPsic from "../../assets/icons/icons-psychology.png";

interface MenuItem {
    title: string;
    label: string;
    icon: string;
}

interface CustomTabMenuProps {
    items: MenuItem[];
}

const CustomTabMenu: React.FC<CustomTabMenuProps> = ({ items }) => {
    return (
        <ul className="nav-list">
            {items.map((item, index) => (
                <li key={index} className="nav-list-item">
                    <a href={item.title} aria-label={`Ir para a seção ${item.label}`}>
                        <i className={item.icon}></i> {/* Exibindo o ícone */}
                        <span className="tab-section-label">{item.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navigation: React.FC = () => {
    const items: MenuItem[] = [
        { title: 'about', label: 'Sobre mim', icon: 'pi pi-fw pi-user' },
        { title: 'areaOfExpertise', label: 'Área de Atuação', icon: 'pi pi-fw pi-map' },
        { title: 'beneficios', label: 'Benefícios', icon: 'pi pi-fw pi-star' },
        { title: 'myAppointments', label: 'Meus atendimentos', icon: 'pi pi-fw pi-calendar' },
        { title: 'presencialOuOnline', label: 'Presencial e/ou Online', icon: 'pi pi-fw pi-globe' },
        { title: 'contact', label: 'Meus Contatos', icon: 'pi pi-fw pi-comments' }
    ];

    return (
        <section className="section-nav">
            <div>
                <img src={IconPsic} alt="Ícone de desenho de um cérebro com um coração azul dentro." />
                <h3 className="nav-title">Psicóloga Kely Wagner</h3>
            </div>
            <CustomTabMenu items={items} />
        </section>
    );
};

export default Navigation;
