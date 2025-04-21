import portrait from '../assets/ferin.jpeg'

function Cover() {
    const careerTitle = ['Software Developer', 'Web Designer', 'Architectural Designer']
    const myname = {
        fname: 'Ferin',
        lname: 'Chowarun'
    }

    return <div className="items-center text-grey400 mb-16 sm:mb-24 xl:my-36">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:p-auto pt-12 gap-16 xl:gap-32">
            {/* my info */}
            <section className="flex flex-col justify-center max-w-[720px] gap-8">
                {/* my name */}
                <div className="flex flex-col text-left text-5xl md:text-7xl xl:text-9xl font-semibold font-alata">
                    <div className={styled__name}>
                        <h1 className={styled__name_text}>{myname.fname}</h1>
                        <h1 className={styled__name_shadow}>{myname.fname}</h1>
                    </div>
                    <div className={styled__name}>
                        <h1 className={styled__name_text}>{myname.lname}</h1>
                        <h1 className={styled__name_shadow}>{myname.lname}</h1>
                    </div>
                </div>

                {/* description */}
                <h4 className="min-w-[300px] px-12 font-alata text-center text-pretty font-light">“Newly graduated from computer science, I'm transitioning from architectural design, blending design proficiency with technological innovation.
                    Specializing in user-centric mobile development, web development, and web design,
                    <br />I'm eager to collaborate with forward-thinking companies, driving seamless and efficient projects that marry creativity with cutting-edge technology.”</h4>

                {/* job title */}
                <div className="flex w-auto md:flex-row flex-col md:justify-between justify-center font-alata text-xl items-center gap-6">
                    {careerTitle.map((title,idx) => {
                        return <div key={idx} className={titleBubble}>{title}</div>
                    })}
                </div>
            </section>

            {/* picture */}
            <section className="justify-center my-auto grow-3 min-w-52 w-52 md:w-72 xl:w-[320px] xl:min-w-[320px]">
                <img id='portrait-shadow' src={portrait} alt="" />
            </section>
        </div>

    </div>
}

const titleBubble = `styled__dropshadow bg-bgday200 py-3 px-5 rounded-2xl`;
const styled__name = `flex justify-center xl:justify-normal`
const styled__name_text = `flex bg-gradient-to-b from-primary300 to-primary100 text-transparent bg-clip-text font-medium absolute uppercase`
const styled__name_shadow = `styled__shadow text-white pl-6 pt-6 xl:pl-9 xl:pt-9 font-bold uppercase`

export default Cover