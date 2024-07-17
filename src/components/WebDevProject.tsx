import Skills from "./Skills"
import ProjectCard from "./card/ProjectCards"

function WebDevProject() {
    return (
        <div className="font-alata flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-20 mb-4 uppercase text-5xl font-antonio-extend">
                    <p className="text-secondary200 absolute">web development projects</p>
                    <p className="m-2px text-primary100">web development projects</p>
                </div>
                {/* TBD to grouping project */}
                <div className="mb-4 flex space-x-4 uppercase text-xl text-grey300 text-light">
                    <p>
                        web Developer
                    </p>
                    <p>|</p>
                    <p>
                        mobile application Developer
                    </p>
                    <p>|</p>
                    <p>
                        ux/ui designer
                    </p>
                </div>
            </div>
            <Skills />

            <ProjectCard />


        </div>
    )
}

export default WebDevProject