import React from 'react';
import Adebisi from '../assets/Adebisi.jpeg';
import{AiOutlineFilePdf} from 'react-icons/ai'
import cv from '../assets/cv.docx'
function Hero() {
  return (
    <div className="hero flex flex-col-reverse md:flex-row w-full gap-2  my-10 items-center">
      <div className="info flex flex-col justify-center md:w-1/2 md:mx-[100px] space-y-3 text-center md:text-left">
        <h1 className='text-2xl  md:text-4xl text-neutral-800 font-bold'>
          Hammed I. Adebisi, PhD
        </h1>
        <h2 className='text-lg  font-semibold'>
          Neurological Physiotherapist, Exercise Physiologist,Public Health Specialist and Clinical Researcher
        </h2>
        <p className="text-gray-700 text-left md:px-0 px-3">
          Dr. Hammed is a seasoned healthcare professional with a diverse background encompassing physiotherapy, exercise physiology, public health, and clinical research. With a passion for optimizing human wellness, his career has been marked by a commitment to improving the lives of human through a multifaceted approach. With over 10 years of experience, Dr. Hammed has built a reputation cemented in excellence. He specializes in neurological physiotherapy, helping patients with neurological conditions regain their mobility and functional independence. Throughout his career, he has honed his expertise in stroke prevention, acute care, and rehabilitation, working tirelessly to enhance patient outcomes and quality of life. With a solid foundation in the science of human movement through his educational background (PhD in exercise physiology), Dr. Hammed specializes in designing tailored exercise and fitness regimens that cater to the unique needs and goals of individuals to promote overall health and vitality. He is committed to fostering a culture of wellness and empowering individuals to lead active and fulfilling lives. Moreover, Dr. Hammed is a dedicated public health specialist with a profound passion for improving reproductive health outcomes. With a background in master of reproductive health (in view), he has actively contributed to addressing critical reproductive health issues, advocating for comprehensive sexual education and conducting research to inform evidence-based policies. This has allowed him to contribute to community health on a broader scale. Furthermore, Dr. Hammed’s role as a clinical researcher drives innovation and evidence-based practice within the field of medicine. He is armed with a profound passion for advancing healthcare through rigorous scientific investigations. He has also collaborated with interdisciplinary teams, published over twenty-five researches in reputable journals, and remained committed to ethical and evidence-based practices, contributing to the continuous improvement of healthcare practices and patient outcomes. This blend of skills allows him to make a meaningful impact on both individual and community health, striving for a healthier and happier world.
        </p>
      
      <div className='flex md:justify-start justify-center'>
      <a href={cv} download="" className='bg-[#ff7999] font-semibold text-lg text-white py-4 px-4 rounded-md  flex gap-2 mt-4 hover:bg-red-600 transition duration-300'>
          Download Resume <span className="inline"><AiOutlineFilePdf size={32}/></span>
        </a>
      </div>
      </div>
      <div className="image md:w-1/2 flex md:justify-end">
  <img
    src={Adebisi}
    alt="Hammed Adebisi"
    className="h-128 w-128 lg:h-128 lg:w-128 rounded-full"
  />
</div>

    </div>
  );
}

export default Hero;
