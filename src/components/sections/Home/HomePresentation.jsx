import cellphone from '../../../assets/home/desktop/image-hero-phone.png'

const HomePresentation = () => {
  return (
    <div className="xl:flex xl:relative xl:w-[71rem] md:w-[49rem] w-[26rem] xl:h-[40rem] bg-dmp-peach xl:mx-auto md:mx-5 xl:mt-8 md:mt-10 md:rounded-2xl md:overflow-hidden overflow-hidden">
      {/* patrons */}
      <div className='md:absolute absolute md:overflow-hidden overflow-hidden xl:w-[71rem] md:w-[49rem] xl:h-[40rem] xl:mt-0 mt-28 w-[26rem]'>
        <svg className='xl:absolute xl:ml-[500px] xl:-mt-[0px] md:ml-[250px] md:mt-[100px] z-10' width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309" /></svg>
      </div>

      <svg className='md:hidden hidden xl:absolute xl:mt-[330px] xl:-ml-[150px] -z-10' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502" /></svg>

      <div className='flex flex-col justify-center md:items-start items-center xl:text-left text-center gap-y-11 xl:ml-24 xl:mt-4 md:pt-16 mt-24 mx-5 md:ml-[115px] md:text-center z-20'>
        <h1 className='text-white md:text-[48px] text-[32px] font-medium md:w-[580px] leading-[50px] z-10'>Diseños personalizados galardonados y soluciones de marca digital</h1>
        <div className='text-white md:w-[400px] xl:ml-0 md:ml-20 z-10'>Con más de 10 años en la industria, tenemos experiencia en la creación de sitios web totalmente receptivos, diseño de aplicaciones y experiencias de marca atractivas. Obtenga más información sobre nuestros servicios.</div>
        <button className='bg-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light hover:text-white transition-all duration 200 xl:ml-0 md:ml-48 z-10'>APRENDE MAS</button>
      </div>

      <div className='xl:absolute w-[700px] h-[640px] xl:ml-[650px] md:ml-[185px] md:-mt-0 overflow-hidden'>
        <img className='xl:-mt-10 md:-ml-[100px] -ml-[100px]' src={cellphone} alt="cellphone" />
      </div>
    </div>
  )
}

export default HomePresentation