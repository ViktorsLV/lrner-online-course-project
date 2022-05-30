import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({loading}) => {
    return (
        <div className='flex items-center h-96 justify-center'>
            <ClipLoader
                color={"#FFD803"}
                loading={loading}
                timeout={3000}
                position='fixed'
                center
                size={100} />
        </div>
    )
}

export default Loader