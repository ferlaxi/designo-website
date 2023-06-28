import { useState } from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import svgbg from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import svg1 from '../../assets/shared/desktop/illustration-canada.svg'
import svg2 from '../../assets/shared/desktop/illustration-australia.svg'
import svg3 from '../../assets/shared/desktop/illustration-united-kingdom.svg'
import { Link, ScrollRestoration } from 'react-router-dom'

const Contact = () => {
  const [nameEmpty, setNameEmpty] = useState("")
  const [emailEmpty, setEmailEmpty] = useState("")
  const [telEmpty, setTelEmpty] = useState("")
  const [messageEmpty, setMessageEmpty] = useState("")
  const [verifyInputs, setVerifyInputs] = useState(0)

  const [nameValue, setNameValue] = useState(0)
  const [emailValue, setEmailValue] = useState(0)
  const [telValue, setTelValue] = useState(0)
  const [messageValue, setMessageValue] = useState(0)
  const [validEmail, setValidEmail] = useState(1)



  const name = e => {
    setNameEmpty(e.target.value)
  }
  const email = e => {
    setEmailEmpty(e.target.value)
  }
  const tel = e => {
    setTelEmpty(e.target.value)
  }
  const message = e => {
    setMessageEmpty(e.target.value)
  }

  //verify inputs
  const verify = (e) => {
    e.preventDefault()
    if (nameEmpty === "") {
      setNameValue(1)
    } else {
      setNameValue(0)
    }

    if (emailEmpty === "") {
      setEmailValue(1)
    } else {
      setEmailValue(0)
    }

    if (telEmpty === "") {
      setTelValue(1)
    } else {
      setTelValue(0)
    }

    if (messageEmpty === "") {
      setMessageValue(1)
    } else {
      setMessageValue(0)
    }

    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (emailEmpty !== "") {
      let esValido = expReg.test(emailEmpty);
      esValido ? setValidEmail(1) : setValidEmail(0);
    }
  }


  return (
    <>
      <Header />
      <div className="flex xl:flex-row md:flex-col flex-col relative xl:w-[71rem] md:w-[49rem] px-5 xl:h-[34rem] md:h-[49rem] h-[52rem] bg-dmp-peach mx-auto md:mt-8 md:rounded-2xl overflow-hidden">
        <div className="md:-mt-24 absolute"><svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><circle fill="url(#a)" transform="matrix(1 0 0 -1 0 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309" /></svg></div>
        <div className='flex flex-col md:items-center justify-center xl:items-start items-center xl:text-left text-center gap-y-11 xl:ml-24 xl:mt-0 md:mt-16 mt-16'>
          <h1 className='text-white text-[48px] font-medium md:w-[535px] leading-[50px] z-10'>Contáctenos</h1>
          <div className='text-white md:w-[450px]'>¿Listo para llevarlo al siguiente nivel? Hablemos de su proyecto o idea y descubramos cómo podemos ayudar a que su negocio crezca. Si está buscando experiencias digitales únicas con las que se puedan relacionar sus usuarios, escríbanos.</div>
        </div>
        <form className='xl:w-1/2 md:w-[49rem] xl:ml-5 md:ml-8  flex flex-col gap-y-5 mt-16 z-10'>
          {
            nameValue === 1 ? (
              <>
                <div className='relative'>
                  <input onChange={name} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white w-[23rem]' placeholder='Nombre' type="text" id="" />
                  <div className='absolute flex items-center gap-x-2 text-white text-[13px] bottom-3 xl:left-60 md:left-[520px] md:ml-0 ml-[220px]'>
                    <div>No puede estar vacío</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF" /><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" /></g></svg>
                  </div>
                </div>
              </>

            ) : (
              <input onChange={name} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white w-[23rem]' placeholder='Nombre' type="text" id="" />
            )
          }

          {
            emailValue === 1 ? (
              <>
                <div className='relative'>
                  <input onChange={email} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white  w-[23rem]' placeholder='Email' type="text" id="" />
                  <div className='absolute flex items-center gap-x-2 text-white text-[13px] bottom-3 xl:left-60 md:left-[520px] ml-[220px] md:ml-0'>
                    <div>No puede estar vacío</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF" /><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" /></g></svg>
                  </div>
                </div>
              </>
            ) : (
              <input onChange={email} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white  w-[23rem]' placeholder='Email' type="text" id="" />
            )
          }
          {
            validEmail === 0 ? (
              <div className='absolute flex items-center gap-x-2 text-white text-[13px] mt-[74px] xl:ml-[204px] md:ml-[485px] ml-[183px]'>
                <div>Formato de Email incorrecto</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF" /><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" /></g></svg>
              </div>
            ) : (
              <></>
            )
          }

          {
            telValue === 1 ? (
              <>
                <div className='relative'>
                  <input onChange={tel} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white w-[23rem]' placeholder='Telefono' type="text" id="" />
                  <div className='absolute flex items-center gap-x-2 text-white text-[13px] bottom-3 xl:left-60 md:left-[520px] ml-[220px] md:ml-0'>
                    <div>No puede estar vacío</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF" /><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" /></g></svg>
                  </div>
                </div>
              </>

            ) : (
              <input onChange={tel} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white w-[23rem]' placeholder='Telefono' type="text" id="" />
            )
          }

          {
            messageValue === 1 ? (
              <>
                <div className='relative'>
                  <textarea onChange={message} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white resize-none w-[23rem]' placeholder='Tu Mensaje' id="" cols="30" rows="5"></textarea>
                  <div className='absolute flex items-center gap-x-2 text-white text-[13px] bottom-3 xl:left-60 md:left-[520px] ml-[220px] md:ml-0'>
                    <div>No puede estar vacío</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF" /><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" /></g></svg>
                  </div>
                </div>
              </>

            ) : (
              <textarea onChange={message} className='bg-transparent border-t-transparent border-l-transparent border-r-transparent focus:ring-0 border-b-1 border border-white/50 placeholder:text-white/50 focus:border-b-2 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-white xl:w-[400px] md:w-[42rem] text-white resize-none w-[23rem]' placeholder='Tu Mensaje' id="" cols="30" rows="5"></textarea>
            )
          }




          <div className='xl:ml-[280px] md:ml-[550px] ml-[125px] mt-2'>
            <button className='bg-white px-7 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light hover:text-white transition-all duration 200' onClick={verify} type='submit'>ENVIAR</button>
          </div>
        </form>
      </div>


      <div className="flex xl:flex-row md:flex-col flex-col gap-y-32 md:gap-y-32 relative justify-between xl:w-[71rem] md:w-[49rem] h-[22rem] mx-auto mt-32">
        <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
          <div className="relative">
            <div><img className="absolute -z-10 opacity-80 -rotate-90" src={svgbg} alt="bg" /></div>
            <img src={svg1} alt="" />
          </div>
          <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">CANADA</div>
          <Link to={'/location#1'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
          <div className="relative">
            <div><img className="absolute -z-10 opacity-80 rotate-180" src={svgbg} alt="bg" /></div>
            <img src={svg2} alt="" />
          </div>
          <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">AUSTRALIA</div>
          <Link to={'/location#2'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
          <div className="relative">
            <div><img className="absolute -z-10 opacity-80 rotate-90" src={svgbg} alt="bg" /></div>
            <img src={svg3} alt="" />
          </div>
          <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">REINO UNIDO</div>
          <Link to={'/location#3'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
        </div>
      </div>
      <svg className='hidden xl:block md:hidden absolute -mt-60 -z-20 ml-[430px]' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502" /></svg>
      <div className='xl:-mt-24 md:mt-[65rem] mt-[76rem]'>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Contact