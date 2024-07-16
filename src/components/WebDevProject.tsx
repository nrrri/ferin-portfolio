

function WebDevProject() {
    return (
        <div className="font-alata">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-20 mb-4 uppercase text-5xl font-antonio-extend">
                    <p className="text-secondary200 absolute">web development projects</p>
                    <p className="m-2px text-primary100">web development projects</p>
                </div>

                <div className="flex space-x-4 uppercase text-xl text-grey300 text-light">
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

            {/* skills */}
            <div className="uppercase m-8">
                <p className="m-2">Skill sets:</p>
                <div id="drop-shadow" className="bg-bgday200 p-4 rounded-2xl min-w-lg max-w-2xl">
                    <div className="grid grid-cols-8 gap-6 justify-items-center items-center">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>5</p>
                        <p>5</p>
                        <p>5</p>
                        <p>5</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WebDevProject