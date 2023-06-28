const CardTitle = ({ title, description, imageFormat, svg }) => {
    return (
        <>
            <div className="relative flex items-center justify-center 2xl:mx-auto xl:w-[71rem] md:w-[49rem] md:mx-5 md:h-[15rem] h-[20rem] xl:mx-[150px] md:mt-[50px] bg-dmp-peach md:rounded-2xl overflow-hidden">
                <div className={`absolute ${imageFormat}`}>
                    {svg}
                </div>

                <div className="text-white text-center z-10">
                    <div className="text-[48px] font-medium">{title}</div>
                    <div className="md:w-[500px] w-[400px]">{description}</div>
                </div>
            </div>
            <div className="md:hidden hidden xl:block relative w-[71rem]">
                <svg className='absolute -mt-[130px] -z-10' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502" /></svg>
            </div>
        </>
    )
}

export default CardTitle