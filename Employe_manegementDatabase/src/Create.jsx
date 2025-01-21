import React, { useState } from 'react';

const Create = ({ setProfile, setIsToggle }) => {

    const [employeeData, setEmployeeData] = useState({
        fname: '',
        lname: '',
        email: '',
        url: '',
        bio: '',
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsToggle(false);
        setProfile(employeeData);  // Add the new employee to the profile state
    }

    return (
        <div
            className="absolute top-0 left-0 bg-[rgba(255,255,255,0.3)] w-full h-full flex flex-col gap-5 justify-center items-center"
            onClick={() => setIsToggle(false)}
        >
            <fieldset
                onClick={(e) => e.stopPropagation()}
                className="border-2 border-lime-500 bg-white shadow-lg w-[90%] z-50 max-w-lg rounded p-6">
                <legend className="font-bold text-white bg-lime-500 px-3 py-1 rounded text-lg">Create Employee</legend>

                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor='fname'>First Name</label>
                        <input
                            onChange={inputHandler}
                            type="text"
                            name='fname'
                            id='fname'
                            placeholder="Enter your first name..."
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor='lname'>Last Name</label>
                        <input
                            onChange={inputHandler}
                            type="text"
                            name='lname'
                            id='lname'
                            placeholder="Enter your last name..."
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor='email'>Email</label>
                        <input
                            onChange={inputHandler}
                            type="email"
                            name='email'
                            id='email'
                            placeholder="Enter your email..."
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor='img'>Image URL</label>
                        <input
                            onChange={inputHandler}
                            type="url"
                            id='img'
                            name='url'
                            placeholder="Enter your image URL..."
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor='bio'>Description</label>
                        <textarea
                            onChange={inputHandler}
                            name='bio'
                            id='bio'
                            placeholder="Write your description..."
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-lime-500 text-white font-medium py-2 px-4 rounded hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-400"
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
            <img
                src="https://cdn-icons-png.flaticon.com/128/1828/1828595.png"
                className='h-12 mt-10 cursor-pointer'
                alt=""
                onClick={() => setIsToggle(false)}
            />
        </div>
    );
};

export default Create;
