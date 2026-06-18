// Digamos que vamos a listar varias habilidades de un personaje del señor de los anillos

const skills: string[] = ['Dash','Counter','Healing'];

interface Charcter{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Charcter = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);
export{};