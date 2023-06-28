const HomeCard = ({ svgCard, title, description, svgbg, rotate }) => {
    return (
        <div className="flex xl:flex-col md:flex-row flex-col justify-center items-center xl:gap-y-7 xl:gap-x-7 md:gap-x-24">
            <div className="relative">
                <div><img className={`absolute -z-10 ${rotate} opacity-80`} src={svgbg} alt="bg" /></div>
                <img src={svgCard} alt="" />
            </div>
            <div className="text-center mx-5 mt-7">
                <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">{title}</div>
                <div className="xl:text-center text-dmp-dark-gray xl:w-[350px] md:w-[400px] ">{description}</div>
            </div>
        </div>
    )
}

export default HomeCard