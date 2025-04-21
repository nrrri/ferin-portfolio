import resumeIcon from '../assets/resume-4-svgrepo-com.svg'
import githubIcon from '../assets/github-svgrepo-com.svg'
import logo from '../assets/LOGO.svg'

function NavBar() {

    const socialLogo = [
        {
            name: 'resume',
            link: 'https://www.canva.com/design/DAGEyz0j_a0/Jn-xNqfac8LDS14UU7n-PQ/view?utm_content=DAGEyz0j_a0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
            logo: resumeIcon,
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/ferin-chowarun/',
            logo: 'in',
        },
        {
            name: 'github',
            link: 'https://github.com/nrrri',
            logo: githubIcon,
        }
    ]

    // todo: add tooltip
    return <div className="flex items-center h-28 bg-gradient-to-b backdrop-blur from-bgday200 w-100 justify-between pl-4 pr-6 sm:pl-20 sm:pr-24">
        {/* logo */}
        <a href="/">
            <img className='scale-125' src={logo} alt="Ferin's Portfolio" />
        </a>
        {/* menu */}
        <div className="flex gap-5 sm:gap-16 justify-around items-center">
            {Object.values(socialLogo).map((item) => {
                return (
                <div className='flex flex-col items-center justify-between sm:mt-0 mt-6'>
                    <a className={`${item.name === 'linkedin' ? 'text-4xl font-ntr h-[32px]' : ''} scale-75 sm:scale-100`} href={item.link}>{item.name === 'linkedin' ? item.logo : <img className='max-h-8' src={item.logo} alt={item.name} />}
                    </a>
                    <p className='sm:hidden bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-alata font-light text-sm'>{item.name}</p>
                </div>
                )})}
    </div>

    </div >
}

export default NavBar