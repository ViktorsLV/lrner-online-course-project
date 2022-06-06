import React, { useEffect, useRef, useState } from 'react'
import { client } from '../../../utils/client';
import CategoryCard from '../../CategoryCard/CategoryCard'
import { motion } from "framer-motion"
import { NavLink, useNavigate } from 'react-router-dom';
import { getCategories } from '../../../api/queries/categories';
import Loader from '../../common/Loader';
import DynamicIcon from '../../common/DynamicIcon';

function CategoriesSection() {
  const [state, setState] = useState({ categories: [], error: '', loading: true });
  const [width, setWidth] = useState(0)
  // const navigate = useNavigate()

  const carousel = useRef()

  const { loading, error, categories } = state;
  const query = getCategories()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await client.fetch(query);
        console.log(categories)

        setState({ categories, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [categories, window.innerWidth, window.innerHeight])

  return (
    // TODO: create skeleton loader ??
    <div className='custom-layout'>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <div>
          <div className='flex justify-between'>
            <h2 className=''>Categories</h2>
            <div className='flex text-gray-400'>
              <p className='text-lg mr-2'>Scroll </p>
              <DynamicIcon icon="ChevronDoubleRightIcon" width="6" height="6"/>
            </div>
          </div>
          <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className='cursor-grab overflow-y-hidden'>
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex'>

              {categories && categories.map((category, index) => {
                return (
                  <div data-testid={`category-item-${index}`} key={category._id}>
                    <NavLink to={`categories/${category?.slug.current}`} key={category._id}>
                      <motion.div className='p-3' key={category._id}>
                        <CategoryCard
                          icon={category.iconName}
                          title={category.title}
                          key={category._id}
                        />
                      </motion.div>
                    </NavLink>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      )
      }
    </div >
  )
}

export default CategoriesSection