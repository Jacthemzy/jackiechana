import React from 'react'

const Upload = () => {
  return (
    <div>
      <div className='flex justify-between my-10'>
        <div></div>
        <span className='flex '><h3 className='text-white px-2'>Status</h3><h4 className='bg-white px-2'>PENDING</h4></span>
      </div>
      <div className="w-[69vw] text-white h-60 bg-transparent">
        <div className='flex justify-between'>
          <h4 className="text-lg mb-4">Recently Uploaded</h4>
          <span className='flex'><h3 className='text-white px-2'>Total</h3><h4 className='bg-white px-2 h-6 text-black'>3</h4></span>
        </div>

        <div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b-2 pb-2">VIDEO</th>
                <th className="border-b-2 pb-2">TITLE</th>
                <th className="border-b-2 pb-2">UPLOADED DATE</th>
                <th className="border-b-2 pb-2">VIEWS</th>
                <th className="border-b-2 pb-2">REVENUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">hkgk</td>
                <td className="py-3">jkgbkjbj</td>
                <td className="py-3">gbgnfhn</td>
                <td className="py-3">egfnhhnf</td>
                <td className="py-3">frewwgbwg</td>
                <td className='flex gap-2 p-3'>
                  <button className='bg-black px-2 text-white'>Exit</button>
                  <button className='bg-red-600 px-2 text-white'>Remove</button>
                  <button className='bg-green-600 px-2 text-white'>Approve</button>
                </td>
              </tr>
              <tr>
                <td className="py-2">hkgk</td>
                <td className="py-2">jkgbkjbj</td>
                <td className="py-2">gbgnfhn</td>
                <td className="py-2">egfnhhnf</td>
                <td className="py-2">frewwgbwg</td>
                <td className='flex gap-2 p-3'>
                  <button className='bg-black px-2 text-white'>Exit</button>
                  <button className='bg-red-600 px-2 text-white'>Remove</button>
                  <button className='bg-green-600 px-2 text-white'>Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="w-[69vw] text-white h-60 bg-transparent">
        <div className='flex justify-between'>
          <h4 className="text-lg mb-4">Recently Uploaded</h4>
          <span className='flex'><h3 className='text-white px-2'>Total</h3><h4 className='bg-white px-2 h-6 text-black'>3</h4></span>
        </div>
        <div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b-2 pb-2">VIDEO</th>
                <th className="border-b-2 pb-2">TITLE</th>
                <th className="border-b-2 pb-2">UPLOADED DATE</th>
                <th className="border-b-2 pb-2">VIEWS</th>
                <th className="border-b-2 pb-2">REVENUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">hkgk</td>
                <td className="py-2">jkgbkjbj</td>
                <td className="py-2">gbgnfhn</td>
                <td className="py-2">egfnhhnf</td>
                <td className="py-2">frewwgbwg</td>
              </tr>
              <tr>
                <td className="py-2">hkgk</td>
                <td className="py-2">jkgbkjbj</td>
                <td className="py-2">gbgnfhn</td>
                <td className="py-2">egfnhhnf</td>
                <td className="py-2">frewwgbwg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-[69vw] text-white h-60 bg-transparent">
        <div className='flex justify-between'>
          <h4 className="text-lg mb-4">Recently Uploaded</h4>
          <span className='flex'><h3 className='text-white px-2'>Total</h3><h4 className='bg-white px-2 h-6 text-black'>3</h4></span>
        </div>
        <div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b-2 pb-2">VIDEO</th>
                <th className="border-b-2 pb-2">TITLE</th>
                <th className="border-b-2 pb-2">UPLOADED DATE</th>
                <th className="border-b-2 pb-2">VIEWS</th>
                <th className="border-b-2 pb-2">REVENUE</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>



    </div>
  )
}

export default Upload
