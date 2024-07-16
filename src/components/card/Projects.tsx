import FigmaIcon from '../../assets/figma-svgrepo-com.svg'
import GithubIcon from '../../assets/github-svgrepo-com.svg'
import WebIcon from '../../assets/web-svgrepo-com.svg'

// project pictures
import project1 from '../../assets/project-pictures/mindHome.png'

export interface Project {
    id: number;
    picture: string;
    title: string;
    icons: { name: string; logo: string; link: string }[];
    description: string;
}

export const projects: Project[] = [
    {
        id: 1,
        picture: project1,
        title: 'Mind Home',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/react-threejs-MindHome' },
            { name: 'Website', logo:  WebIcon , link: 'https://mindhome-threejs.netlify.app/' }
        ],
        description: 'Mind Home Is A React Application That Offers An Immersive Experience For Users To Explore A 3D Model Of A Private House Located In Chiang Rai, Thailand.'
    },
    {
        id: 2,
        picture: '/images/project2.png',
        title: 'Project 2',
        icons: [
            { name: 'GitHub', logo: FigmaIcon , link: 'https://github.com/project2' },
            { name: 'Website', logo:  FigmaIcon , link: 'https://project2.com' }
        ],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
        id: 3,
        picture: '/images/project2.png',
        title: 'Project 3',
        icons: [
            { name: 'GitHub', logo: FigmaIcon , link: 'https://github.com/project2' },
        ],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
];