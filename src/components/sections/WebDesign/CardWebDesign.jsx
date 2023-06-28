const CardWebDesign = ({ src, title, description }) => {
    return (
        <div className="flex xl:flex-col md:flex-row flex-col xl:h-[500px] xl:w-[360px] md:h-[180px] xl:mx-0 mx-5 md:rounded-2xl cursor-pointer group">
            <div><img className="xl:rounded-t-2xl md:w-[415px] md:rounded-tr-none md:rounded-tl-2xl xl:rounded-bl-none md:rounded-bl-2xl rounded-t-2xl" src={src} alt="" /></div>
            <div className="flex flex-col justify-center items-center bg-dmp-grid xl:h-[800px] md:h-[363px] h-[180px] md:w-[360px] gap-y-2 xl:rounded-b-2xl xl:rounded-tr-none md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none rounded-b-2xl text-center group-hover:bg-dmp-peach transition-all duration-300">
                <div className="text-dmp-peach font-medium text-[20px] tracking-[4px] group-hover:text-white transition-all duration-300">{title}</div>
                <div className="text-dmp-black w-[300px] group-hover:text-white transition-all duration-300">{description}</div>
            </div>
        </div>
    )
}

export default CardWebDesign