import Skills from "./Skills"
import ProjectCard from "./WebDevProject/card/ProjectCards"

function WebDevProject() {
    const jobSkill = ['web Developer', 'mobile application Developer', 'ux/ui designer']
    const skillTitle = 'web development projects'

    const checkScreenCondition = (idx: number) => {
        return idx !== jobSkill.length - 1 && window.innerWidth >= 768
    }

    const skillHeader = () => {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="md:mt-20 mt-12 mb-4 uppercase text-wrap text-5xl text-center font-antonio-extend">
                    <p className="text-secondary200 absolute">{skillTitle}</p>
                    <p className="m-2px text-primary100">{skillTitle}</p>
                </div>
                {<hr className={`sm:hidden border border-b-[1px] border-[#EFEBE5] w-2/3 mb-2`} />}
                <div className="mb-4 flex md:flex-row items-center flex-col uppercase text-xl text-grey300 text-light gap-3">
                    {jobSkill.map((job, idx) => {
                        return (
                            <div key={idx}>
                                <p >{job}</p>
                                {checkScreenCondition(idx) && <p>|</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div className="font-alata flex flex-col items-center justify-center">
            {skillHeader()}

            <Skills />

            <ProjectCard />


        </div >
    )
}

export default WebDevProject