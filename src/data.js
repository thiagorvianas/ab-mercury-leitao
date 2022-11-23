import artesenatoImage from './images/artesenato.jpeg';
import alfabetizacaoImage from './images/alfabetizacao.jpeg';
import mktDigitalImage from './images/marketing-digital.jpeg';
import associativismoImage from './images/associativismo.jpeg';
import voluntariese from './images/voluntariese.png';
import doacoes from './images/coracao.png';
import saibaMais from './images/casa.png';
import pronadesc from './images/pronadesc-example.jpeg';

export const cursos = [
    {
        id: 1,
        title: 'Alfabetização de Jovens e Adultos',
        workload: 10,
        teacher: 'Prof. Alainy',
        date: '22/11/2022',
        image: alfabetizacaoImage,
        photos: [alfabetizacaoImage],
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.'
    },
    {
        id: 2,
        title: 'Associativismo e Empreendedorismo',
        workload: 10,
        teacher: 'Prof. Alainy',
        date: '22/11/2022',
        image: associativismoImage,
        photos: [associativismoImage],
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.'
    },
    {
        id: 3,
        title: 'Marketing Digital',
        workload: 10,
        teacher: 'Prof. Alainy',
        date: '22/11/2022',
        image: mktDigitalImage,
        photos: [mktDigitalImage],
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.'
    },
    {
        id: 4,
        title: 'Artesenato',
        workload: 10,
        teacher: 'Prof. Alainy',
        date: '22/11/2022',
        image: artesenatoImage,
        photos: [artesenatoImage],
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.'
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
        link: ''
    },
    {
        id: 2,
        title: 'DOAÇÕES',
        image: doacoes,
        alt: 'Mão aberta com coração',
        description: 'Contribua com a realização do nosso trabalho.',
        btnText: 'Saiba mais',
        link: ''
    },
    {
        id: 3,
        title: 'SAIBA MAIS',
        image: saibaMais,
        alt: 'Casa com coração',
        description: '',
        btnText: 'Saiba mais',
        link: 'institucional'
    }
];

export const projectsData = [
    {
        id: 1,
        title: 'PRONADESC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec malesuada dui. Aenean et enim rutrum, ornare mauris nec, facilisis nisl.',
        date: '22/11/2022',
        previewImage: pronadesc,
        teacher: 'Prof. Alainy',
        photos: [artesenatoImage],
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum dicta, nesciunt repudiandae reiciendis dolores distinctio cum similique animi architecto vitae voluptates quae, temporibus asperiores totam, minus culpa suscipit blanditiis.'
    }
];
