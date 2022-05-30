import React, { useEffect, useRef, useState } from 'react'
import { client } from '../../../utils/client';
import CategoryCard from '../../CategoryCard/CategoryCard'
import { motion } from "framer-motion"
import { NavLink, useNavigate } from 'react-router-dom';
import { getCategories } from '../../../api/queries/categories';
import Loader from '../../common/Loader';

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
    <div className='custom-layout mb-10'>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <div>
          <h2 className=''>Categories</h2>
          <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className='cursor-grab overflow-y-hidden'>
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex'>

              {/* TODO: add smth if there are no courses in this category */}
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