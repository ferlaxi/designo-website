import { Link } from "react-router-dom"

const HomeFourthSection = () => {
  return (
    <div className="absolute flex 2xl:mx-96 xl:flex-row flex-col md:flex-col items-center xl:w-[71rem] w-[23.5rem] h-[25rem] mt-16 mx-5 md:w-[49rem] xl:h-[20rem] md:h-[25rem] xl:mx-[150px] md:mx-5 xl:mt-[150px] md:mt-[100px] bg-dmp-peach rounded-2xl overflow-hidden gap-y-7">
      <svg className="absolute ml-[260px]" width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><g transform="matrix(-1 0 0 1 876 0)" fill="url(#a)" fillRule="evenodd" opacity=".309"><g transform="translate(0 292)"><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146" /><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146" /><circle transform="matrix(0 1 1 0 584 -584)" cx="730" cy="146" r="146" /></g><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146" /><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146" /></g></svg>

      <div className="text-white xl:ml-28 md:mt-16 xl:mt-0 mt-7 xl:text-left md:text-center text-center items-center flex md:flex-col flex-col xl:items-start md:items-center">
        <div className="text-[40px] leading-[50px]">Hablemos de tu proyecto</div>
        <div className="xl:w-[500px] md:w-[350px] w-[200px] xl:text-left md:text-center md:ml-0 md:mt-5 mt-5">¿Listo para llevarlo al siguiente nivel? Contáctenos hoy y descubra cómo nuestra experiencia puede ayudar a que su negocio crezca.</div>
      </div>
      <Link  to={'/contact'}
       className='bg-white px-5 py-4 rounded-lg font-medium tracking-[1px] xl:ml-[250px] z-10 hover:bg-dmp-peach-light hover:text-white transition-all duration-200 md:mt-9'>CONTACTANOS</Link>
    </div>
  )
}

export default HomeFourthSection