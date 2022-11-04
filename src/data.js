import artesenatoImage from './images/artesenato.jpeg';
import alfabetizacaoImage from './images/alfabetizacao.jpeg';
import mktDigitalImage from './images/marketing-digital.jpeg';
import associativismoImage from './images/associativismo.jpeg';
import voluntariese from './images/voluntariese.png';
import doacoes from './images/coracao.png';
import saibaMais from './images/casa.png';

export const cursos = [
    {
        id: 1,
        title: 'Alfabetização de Jovens e Adultos',
        hours: 10,
        teatcher: 'Prof. Alainy',
        image: alfabetizacaoImage,
    },
    {
        id: 2,
        title: 'Associativismo e Empreendedorismo',
        hours: 10,
        teatcher: 'Prof. Alainy',
        image: associativismoImage,
    },
    {
        id: 3,
        title: 'Marketing Digital',
        hours: 10,
        teatcher: 'Prof. Alainy',
        image: mktDigitalImage,
    },
    {
        id: 4,
        title: 'Artesenato',
        hours: 10,
        teatcher: 'Prof. Alainy',
        image: artesenatoImage,
    },
];

export const facaParteData = [
    {
        id: 1,
        title: 'VOLUNTARIE-SE',
        image: voluntariese,
        alt: 'Mão aberta com coração',
        description: 'Faça parte da nossa equipe, torne-se uma pessoa voluntária',
        btnText: 'Saiba mais',
    },
    {
        id: 2,
        title: 'DOAÇÕES',
        image: doacoes,
        alt: 'Mão aberta com coração',
        description: 'Contribua com a realização do nosso trabalho.',
        btnText: 'Saiba mais',
    },
    {
        id: 3,
        title: 'SAIBA MAIS',
        image: saibaMais,
        alt: 'Casa com coração',
        description: '',
        btnText: 'Saiba mais',
    }
];
