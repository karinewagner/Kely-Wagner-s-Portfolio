import React, { useState } from "react";

import Psychology from "../../assets/icons/psychology.svg";

interface MenuItem {
    title: string;
    label: string;
    icon: string;
}

const menuItems: MenuItem[] = [
    { title: 'about', label: 'Sobre mim', icon: 'pi pi-fw pi-user' },
    { title: 'benefits', label: 'Benefícios', icon: 'pi pi-fw pi-star' },
    { title: 'myAppointments', label: 'Atendimentos', icon: 'pi pi-fw pi-calendar' },
    { title: 'onsiteOrOnline', label: 'Presencial/Online', icon: 'pi pi-fw pi-globe' },
    { title: 'contact', label: 'Contatos', icon: 'pi pi-fw pi-comments' }
];

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="relative bg-off-white border-b-2 border-terracota shadow-sm px-2 py-4 z-50">
            <div className="flex justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img
                        src={Psychology}
                        alt="Ícone de cérebro com um coração azul"
                        className="w-13 h-13"
                    />
                    <h1 className="text-marrom font-extrabold text-3xl lg:text-4xl tracking-tight mt-2">
                        Kely Wagner Psicóloga
                    </h1>
                </div>

                <button
                    className="lg:hidden text-marrom"
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

                <ul
                    className={`
                        ${isOpen ? 'flex' : 'hidden'} 
                    lg:flex
                    lg:justify-end
                    absolute lg:static top-full left-0 w-full lg:w-auto bg-off-white z-50 
                    flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5 
                    p-4 lg:p-0 shadow-md lg:shadow-none border-t md:border-0 border-terracota
                    `}
                >
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleScroll(item.title)}
                                className="flex items-center gap-2 text-marrom hover:bg-bege rounded p-1 
                                transition-colors text-3xl w-full text-left"
                                aria-label={`Ir para a seção ${item.label}`}
                            >
                                <i className={item.icon}></i>
                                <span className="text-xl lg:text-2xl">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
