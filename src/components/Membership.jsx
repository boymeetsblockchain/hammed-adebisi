import { GiAchievement } from 'react-icons/gi';

function Membership() {
  return (
    <div className="honours my-10 py-5 px-3">
      <h1 className='font-bold text-lg md:text-4xl text-center mb-2'>Membership in Professional Organizations/Bodies</h1>
      <div className="flex flex-col justify-center shadow-2xl py-4 px-3 space-y-1">
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span> Member, Nigeria Society of Physiotherapy (NSP)</p>
          <p className="text-right">2012 to date</p>
        </div>
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span>Medical Rehabilitation Therapist Board of Nigeria (MRTBN)</p>
          <p className="text-right">2012 to date</p>
        </div>
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span>Health and Care Professionals Council-Physiotherapist (HCPC)	</p>
          <p className="text-right">2022 to date</p>
        </div>
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span>Member, Nigeria Association of Sports Science and Medicine (NASSM)</p>
          <p className="text-right">2017 to date</p>
        </div>
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span>Member, Society for the Study of Pain Nigeria (SSPN)</p>
          <p className="text-right">2022 to date</p>
        </div>
        <div className="flex justify-between items-center">
          <p> <span className='inline-flex text-green-700 mr-2 '><GiAchievement size={24} /></span>Member, Nigeria Association for Physical and Health Education, Recreation, 
Sports, and Dance (NAPHER-SD)	</p>
          <p className="text-right">2021 to date</p>
        </div>
      </div>
    </div>
  )
}

export default Membership;
