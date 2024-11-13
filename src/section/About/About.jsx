import {data} from '../../content/about'

const About = () => {
  return (
    <div className='space-y-4'>
        <div className='text-primaryAccent font-medium'>{data.title}</div>
        <div className='block'>{data.description}</div>
    </div>
  )
}

export default About