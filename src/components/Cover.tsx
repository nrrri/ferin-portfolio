import portrait from '../assets/ferin.jpeg'

function Cover() {
    return <div className="items-center text-grey400 my-36">
        <div className="flex justify-center">
            {/* // my info */}
            <section className="w-128">
                <div className="text-left text-9xl font-semibold font-alata">
                    
                    <h1 className="bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-medium absolute">FERIN</h1>
                    <h1 id='shadow' className=" text-white pl-9 pt-9 font-bold">FERIN</h1>
                    <h1 className="bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-medium absolute">CHOWARUN</h1>
                    <h1 id='shadow' className=" text-white pl-9 pt-9 font-bold">CHOWARUN</h1>
                </div>

                <h4 className="my-8 mx-16 font-alata text-center text-pretty font-light">“Newly graduated from computer science, I'm transitioning from architectural design, blending design proficiency with technological innovation.
                    Specializing in user-centric mobile development, web development, and web design,
                    <br />I'm eager to collaborate with forward-thinking companies, driving seamless and efficient projects that marry creativity with cutting-edge technology.”</h4>
                <div className="flex justify-between font-alata text-xl">
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2 rounded-2xl">Software Developer</div>
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2  rounded-2xl">Web Designer</div>
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2  rounded-2xl">Architectural Designer</div>
                </div>
            </section>
            {/* // picture */}
            <section className="justify-center my-auto p-16">
                <img id='portrait-shadow' className='max-w-80 min-w-80' src={portrait} alt="" />
            </section>
        </div>

    </div>
}

export default Cover