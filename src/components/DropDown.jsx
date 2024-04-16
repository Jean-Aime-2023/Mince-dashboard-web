import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({ icon }) => {
    return (
        <div><details className="dropdown">
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <Link
                    to=""
                    className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
                >
                    <div>
                        {icon}
                    </div>
                    <p>Account Profile</p>
                </Link>
                <Link
                    to=""
                    className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
                >
                    <div>
                        {icon}
                    </div>
                    <p>Account Profile</p>
                </Link>
            </ul>
        </details></div>
    )
}

export default DropDown