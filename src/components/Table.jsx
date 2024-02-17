// Table.js
import React from 'react';
import classNames from 'classnames';

const Table = ({ data }) => {
  return (
    <table className="w-full overflow-x-scroll">
      <thead className='bg-gray-100 w-full dark:bg-[#0A1027]'>
        <tr>
          <th className="px-6 py-4 bg-gray-50 dark:bg-[#0A1027] text-left leading-4 dark:text-[#6B6B6B] font-medium text-gray-500 tracking-wider">
            Name/Company
          </th>
          <th className="px-6 py-4 bg-gray-50 dark:bg-[#0A1027] text-left leading-4 dark:text-[#6B6B6B]  font-medium text-gray-500 tracking-wider">
            Contacts
          </th>
          <th className="px-6 py-4 bg-gray-50 dark:bg-[#0A1027] text-left leading-4 dark:text-[#6B6B6B]  font-medium text-gray-500 tracking-wider">
            Method
          </th>
          <th className="px-6 py-4 bg-gray-50 dark:bg-[#0A1027] text-left leading-4 dark:text-[#6B6B6B]  font-medium text-gray-500 tracking-wider">
            Value
          </th>
          <th className="px-6 py-4 bg-gray-50 dark:bg-[#0A1027] text-left leading-4 dark:text-[#6B6B6B]  font-medium text-gray-500 tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={classNames({
              'bg-white dark:bg-[#5547D70D]': index % 2 === 0,
              'bg-gray-100 dark:bg-[#0A1027]': index % 2 !== 0,
            })}
          >
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column1}
            </td>
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column2}
            </td>
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column3}
            </td>
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column4}
            </td>
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column5}
            </td>
            <td className="pl-6 py-4 whitespace-no-wrap text-sm leading-5 text-[#000000C9] dark:text-[#CECACA]">
              {row.column6}
            </td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
