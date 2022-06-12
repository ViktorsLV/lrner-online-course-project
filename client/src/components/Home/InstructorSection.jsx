import React, { useEffect, useState } from 'react'
// import { getInstructors } from '../../api/queries/instructors';
import { client } from '../../utils/client';
import Loader from '../common/Loader'
import InstructorCard from '../InstructorCard'

const InstructorSection = () => {
  const [state, setState] = useState({ instructors: [], error: '', loading: true });

  const { loading, error, instructors } = state;
  // const query = getInstructors()

  useEffect(() => {
    setState({loading: false})
    // const fetchInstructors = async () => {
    //   try {
    //     const instructors = await client.fetch(query);
    //     // console.log('InstructorsSS,', instructors)

    //     setState({ instructors, loading: false });
    //   } catch (err) {
    //     setState({ loading: false, error: err.message });
    //   }
    // };
    // fetchInstructors();
  }, []);

  return (
    <div className='custom-layout mb-10'>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <section>
          <section className='mb-5'>

            <h2>Instructors on this platform</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
              <InstructorCard />
              <InstructorCard />
              <InstructorCard />
              <InstructorCard />
              <InstructorCard />
              <InstructorCard />
            </div>
          </section>
        </section>

      )}
    </div>
  )
}

export default InstructorSection