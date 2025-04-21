import portrait from '../assets/ferin.jpeg'

function Cover() {
    return <div className="items-center text-grey400 mb-24 xl:my-36">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:p-auto py-12 gap-16 xl:gap-32">
            {/* my info */}
            <section className="flex flex-col justify-center max-w-[720px] gap-6">
                <div className="flex flex-col text-left text-5xl md:text-7xl xl:text-9xl font-semibold font-alata">
                    <div className='flex justify-center xl:justify-normal'>
                        <h1 className="flex bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-medium absolute">FERIN</h1>
                        <h1 id='shadow' className=" text-white pl-6 pt-6 xl:pl-9 xl:pt-9 font-bold">FERIN</h1>
                    </div>
                    <div className='flex justify-center xl:justify-normal'>
                        <h1 className="flex bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-medium absolute">CHOWARUN</h1>
                        <h1 id='shadow' className=" text-white pl-6 pt-6 xl:pl-9 xl:pt-9 font-bold">CHOWARUN</h1>
                    </div>
                </div>

                <h4 className="min-w-[300px] font-alata text-center text-pretty font-light">“Newly graduated from computer science, I'm transitioning from architectural design, blending design proficiency with technological innovation.
                    Specializing in user-centric mobile development, web development, and web design,
                    <br />I'm eager to collaborate with forward-thinking companies, driving seamless and efficient projects that marry creativity with cutting-edge technology.”</h4>
                <div className="flex justify-between font-alata text-xl">
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2 rounded-2xl">Software Developer</div>
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2  rounded-2xl">Web Designer</div>
                    <div id='drop-shadow' className="bg-bgday200 py-3 px-5 m-2  rounded-2xl">Architectural Designer</div>
                </div>
            </section>
            {/* picture */}
            <section className="justify-center my-auto grow-3 min-w-52 w-52 md:w-72 xl:w-[320px] xl:min-w-[320px]">
                <img id='portrait-shadow' src={portrait} alt="" />
            </section>
        </div>

    </div>
}

export default Cover