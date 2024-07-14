
function Cover() {
    return <div className="max-w-5xl mx-auto flex flex-col items-center p-5">
        <div className="w-128">
            {/* // my info */}
            <section>
                <div className="text-left p-16 text-8xl font-semibold">
                    <h1>Ferin</h1>
                    <h1>Chowarun</h1>
                </div>

                <h3 className="">“Newly graduated from computer science, I'm transitioning from architectural design, blending design proficiency with technological innovation.
                    Specializing in user-centric frontend, backend, full-stack, and web design,
                    I'm eager to collaborate with forward-thinking companies, driving seamless and efficient projects that marry creativity with cutting-edge technology.”</h3>
                <div className="flex justify-between p-16">
                    <div>Software Developer</div>
                    <div>Web Designer</div>
                    <div>Architectural Designer</div>
                </div>
            </section>
            {/* // picture */}
            <section className="justify-center bg-slate-200 w-128 text-5xl m-36">
                <h1 className="text-red-600 w-64 h-72">Picture</h1>
            </section>
        </div>

    </div>
}

export default Cover