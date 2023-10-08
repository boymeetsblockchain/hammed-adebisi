import { GiAchievement } from 'react-icons/gi';

function Honours() {
  return (
    <div className="honours my-10 py-5 px-3">
      <h1 className='font-bold text-lg md:text-4xl text-center mb-4'>Awards and Certificates</h1>
      <div className="flex flex-col items-start justify-center shadow-2xl py-4 px-3 space-y-2">
        <div className="flex items-start text-gray-700">
          <span className="inline-flex text-green-700 mr-2"><GiAchievement size={24} /></span>
          <p>
            <span>Oyo</span> State Scholarship Award - Offered by Ministry of Education, Oyo State Scholarship Scheme (2010).
          </p>
        </div>
        <div className="flex items-start text-gray-700">
          <span className="inline-flex text-green-700 mr-2"><GiAchievement size={24} /></span>
          <p>
            <span>Certificate</span> of Honour as Member Advisory Committee – Offered by Anatomical Society of Bayero University Kano (ASOBUK) Faculty of Medicine (2008/2009 sessions)
          </p>
        </div>
        <div className="flex items-start text-gray-700">
          <span className="inline-flex text-green-700 mr-2"><GiAchievement size={24} /></span>
          <p>
            <span>Certificate</span> of Honour as Member Mosque Committee – Offered by Islamic Medical Association Bayero University Kano Chapter (ISMA BUK) (2010 to 2011)
          </p>
        </div>
        <div className="flex items-start text-gray-700">
          <span className="inline-flex text-green-700 mr-2"><GiAchievement size={24} /></span>
          <p>
            <span>Certificate</span> of Meritorious Service – Offered by National Youth Service Corps, Corps Medical Team (COMET) (2015)
          </p>
        </div>
        <div className="flex items-start text-gray-700">
          <span className="inline-flex text-green-700 mr-2"><GiAchievement size={24} /></span>
          <p>
            <span>Certificate</span> of Excellence for being Conscientious, Empathic, and Professional -  Offered by Department of Physiotherapy, University of Benin Teaching Hospital, Benin City, Edo State (2022).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Honours;
