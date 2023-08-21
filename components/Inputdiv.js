import React from 'react'

const Inputdiv = ({ data }) => {
    return (
        <>
            {/* input field div  */}
            {data.map((e, i) => (
                <div key={i}>
                    <label
                        htmlFor={e.name}
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        {e.title}{e.required && (<span className='text-red-600 text-xl'>*</span>)}
                    </label>
                    <input
                        type={e.type}
                        name={e.name}
                        id={e.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder={e.placeholder}
                        required={e.required}
                    />
                </div>
            ))}
            {/* input field div end */}
        </>
    )
}

export default Inputdiv