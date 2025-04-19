import resumeIcon from '../assets/resume-4-svgrepo-com.svg'
import githubIcon from '../assets/github-svgrepo-com.svg'
import logo from '../assets/LOGO.svg'


function NavBar() {
    // todo: add tooltip
    return <div className="flex items-center h-28 bg-gradient-to-b backdrop-blur from-bgday200 w-100 justify-between pl-4 pr-6">
        {/* logo */}
        <a href="/">
            <img src={logo} className='' alt="" />
        </a>
        {/* menu */}
        <div className="flex gap-16 justify-around items-center">
            <div>
                <a href="https://www.canva.com/design/DAGEyz0j_a0/Jn-xNqfac8LDS14UU7n-PQ/view?utm_content=DAGEyz0j_a0&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    <img className="max-h-8" src={resumeIcon} alt="" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/ferin-chowarun/" className='text-4xl font-ntr'>in</a>

            </div>
            <div>
                <a href="https://github.com/nrrri">
                    <img className="max-h-8" src={githubIcon} alt="" />
                </a>
            </div>
        </div>

    </div>
}

export default NavBar