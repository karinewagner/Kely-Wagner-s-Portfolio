import React, { useState } from "react";
import IconPsic from "../../assets/icons/icons-psychology.png";

interface MenuItem {
    title: string;
    label: string;
    icon: string;
}

const menuItems: MenuItem[] = [
    { title: 'about', label: 'Sobre mim', icon: 'pi pi-fw pi-user' },
    { title: 'areaOfExpertise', label: 'Área de Atuação', icon: 'pi pi-fw pi-map' },
    { title: 'benefits', label: 'Benefícios', icon: 'pi pi-fw pi-star' },
    { title: 'myAppointments', label: 'Meus atendimentos', icon: 'pi pi-fw pi-calendar' },
    { title: 'onsiteOrOnline', label: 'Presencial e/ou Online', icon: 'pi pi-fw pi-globe' },
    { title: 'contact', label: 'Meus Contatos', icon: 'pi pi-fw pi-comments' }
];

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false); // Fecha o menu após clicar
    };

    return (
        <nav className="relative bg-off-white border-b-2 border-terracota shadow-sm px-6 py-4 z-50">
            {/* Topo da navbar */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 w-full">
                    <img
                        src={IconPsic}
                        alt="Ícone de cérebro com um coração azul"
                        className="w-2 h-10 md:w-14 md:h-14"
                    />
                    <h3 className="text-terracota font-extrabold text-xl md:text-2xl tracking-tight w-full">
                        Kely Wagner Psicóloga
                    </h3>
                </div>

                {/* Botão hamburguer (mobile) */}
                <button
                    className="md:hidden text-marrom"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu de navegação */}
            <ul
                className={`
                    ${isOpen ? 'flex' : 'hidden'} 
                    absolute md:static top-full left-0 w-full bg-off-white z-50 
                    flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 
                    md:mt-0 p-4 md:p-0 shadow-md md:shadow-none border-t md:border-0 border-terracota
                `}
            >
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleScroll(item.title)}
                            className="flex items-center gap-2 text-marrom hover:bg-bege rounded p-1 transition-colors text-xl md:text-base lg:text-2xl w-full text-left"
                            aria-label={`Ir para a seção ${item.label}`}
                        >
                            <i className={item.icon}></i>
                            <span className="text-base md:text-base lg:text-lg">{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
