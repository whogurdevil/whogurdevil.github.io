import { Typography } from '@material-tailwind/react'
import rotateImage from '../../assets/rotate-your-phone.gif'

export default function RotateWarning() {
  return (
    <div className='h-[calc(80vh)] w-[calc(100vw)] bg-brown-50'>
    <div className='w-[calc(100vw)] bg-brown-100 container'>
      <Typography variant='h4' className='px-12 text-justify py-6' placeholder={''}>This site is not designed for mobile devices!</Typography>
      <Typography variant='h4' className='px-12 text-justify py-6' placeholder={''}>If you wish to proceed, Please ROTATE your device and REFRESH this page</Typography>
      </div>
    <div className='flex h-[calc(80vh)] w-[calc(100vw)] bg-brown-100 justify-center'>

      <img src={rotateImage} style={{height:200}} />
    </div>
    </div>
  )
}
