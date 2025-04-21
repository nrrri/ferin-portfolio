// import FigmaIcon from '../assets/figma-svgrepo-com.svg'
import FigmaIcon from '../../../assets/figma-svgrepo-com.svg'
import GithubIcon from '../../../assets/github-svgrepo-com.svg'
import WebIcon from '../../../assets/web-svgrepo-com.svg'

// project pictures
import project1 from '../../../assets/project-pictures/mindHome.png'
import project2 from '../../../assets/project-pictures/portfolio.png'
import project3 from '../../../assets/project-pictures/alexandar-todov-2ZIByCEjRWU-unsplash.jpg'
import project4 from '../../../assets/project-pictures/liveMat.png'
import project5 from '../../../assets/project-pictures/shoppingApp.png'
import project6 from '../../../assets/project-pictures/NoteBlog.png'
import project7 from '../../../assets/project-pictures/weatherApp.png'
import project8 from '../../../assets/project-pictures/guessTheFlag.jpeg'
import project9 from '../../../assets/project-pictures/pomoList.png'

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
        picture: project2,
        title: 'My portfolio',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/ferin-portfolio' },
            { name: 'Figma', logo: FigmaIcon , link: 'https://www.figma.com/proto/iquLvdSP7V9JiCtCRdGff6/Portfolio-website?page-id=0%3A1&type=design&node-id=104-446&viewport=363%2C513%2C0.3&t=9y8VaJafADKQBqNI-1&scaling=scale-down&starting-point-node-id=104%3A446&show-proto-sidebar=1' },
            { name: 'Website', logo:  WebIcon , link: 'https://ferin-portfolio.netlify.app/' }
        ],
        description: 'A showcase of my web development skills, translating my design on Figma into React and typescript and deployed on Netlify'
    },
    {
        id: 3,
        picture: project3,
        title: 'Personal Blog',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/web-blogger' },
        ],
        description: 'This GitHub Repository Contains A Web Blog Application Built With Strapi, A Headless CMS, And Next.Js, A React Framework For Server-Side Rendering And Routing.'
    },
    {
        id: 8,
        picture: project8,
        title: 'Guess the flag',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/guessTheFlag' },
        ],
        description: 'Guess the Flag is a fun and educational mobile app developed in Swift. The game challenges users to identify the flags of various countries from around the world.'
    },
    {
        id: 9,
        picture: project9,
        title: 'PomoList',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/pomoList' },
            { name: 'Figma', logo: FigmaIcon , link: 'https://www.figma.com/proto/Xtimbj4CXoFUE5I5wUx685/Swift-project?t=db69IjubIN4Q1BbM-1' },
        ],
        description: 'Pomolist is a self development mobile application using Swift that combined Pomodoro method and to-do-list together'
    },
    {
        id: 5,
        picture: project5,
        title: 'Care Furniture',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/shopping-app' },
        ],
        description: 'Our React-Based Shopping Website Offers A Dynamic Homepage With Product Filtering, Easy "Add To Cart" And "Delete From Cart" Functions, And A Smooth Checkout Process For An Enjoyable And Seamless Shop'
    },
    {
        id: 6,
        picture: project6,
        title: 'NOTABLE',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/note-app' },
        ],
        description: 'This Project Is A React Application Designed To Manage Notes With Associated Tags. Leveraging Vite With React, It Provides A Seamless Development Experience For Building Modern Web Applications.'
    },
    {
        id: 7,
        picture: project7,
        title: 'WHAT WEATHER',
        icons: [
            { name: 'GitHub', logo: GithubIcon , link: 'https://github.com/nrrri/weather-app' },
        ],
        description: 'This Weather App Is A React-Based Project Created For The Purpose Of Honing API Integration Skills And Mastering The Fundamentals Of React Development.'
    },
    
    {
        id: 4,
        picture: project4,
        title: 'LiveMat',
        icons: [
            { name: 'Figma', logo: FigmaIcon , link: 'https://www.figma.com/proto/scvZaMHsrN07IGNDsJbaFi/LiveMat?type=design&node-id=1-3&t=cubCwiwYowRa7R57-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A3' },
        ],
        description: 'For The Seneca Housing Hackathon 2024, I Designed A Web Flow To Select Sustainable Materials. The LiveMat Calculator Estimates Costs And Ensures Projects Meet LEED Criteria Within Budget.'
    },
];