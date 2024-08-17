import React from 'react'

function Filter({sortBy, setSortBy}) {
  return (
    <div className='bg-[#D5F8CF] text-[#0BA42D]  px-5 pb-6 pt-7 mb-11'>
      <div className='max-w-[1298px] mx-auto flex justify-between items-center font-hammersmith'>
        <h3 className='text-2xl font-normal'>Filter by:</h3>
        <select name="sortby" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='border-none text-2xl  outline-none px-1 py-1 bg-transparent'>
          <option value="sort">Sort by</option>
          <option value="cheap">Cheap</option>
          <option value="expensive">Expensive</option>
        </select>
      </div>
    </div>
  )
}

export default Filter