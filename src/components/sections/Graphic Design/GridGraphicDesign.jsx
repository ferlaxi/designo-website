import CardWebDesign from '../WebDesign/CardWebDesign'
import gd1 from '../../../assets/graphic-design/desktop/image-change.jpg'
import gd2 from '../../../assets/graphic-design/desktop/image-boxed-water.jpg'
import gd3 from '../../../assets/graphic-design/desktop/image-science.jpg'

const GridGraphicDesign = () => {
  return (
    <div className="flex justify-between flex-wrap xl:w-[71rem] xl:mx-auto md:mx-5 mt-36 xl:gap-y-28 md:gap-y-56 gap-y-16">
        <CardWebDesign src={gd1} title="TIM BROWN" description="Una portada de libro diseñada para el nuevo lanzamiento de Tim Brown, 'Change'"/>
        <CardWebDesign src={gd2} title="BOXED WATER" description="Un concepto de empaque simple hecho para agua en caja" />
        <CardWebDesign src={gd3} title="SCIENCE!" description="Un cartel realizado en colaboración con el Federal Art Project" />
    </div>
  )
}

export default GridGraphicDesign