import React from 'react';
import { FaClipboardList } from 'react-icons/fa6';
import { FaChevronDown } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaClipboardList />,
    down: false,
    cName: 'nav-text'
  },
  {
    title: 'Wallet',
    path: '/wallet',
    down: false,
    icon: <IoMdWallet />,
    cName: 'nav-text',
  },
  {
    title: 'Activities',
    path: false,
    icon: <FaBoxesStacked />,
    cName: 'nav-text',
    down: <FaChevronDown/>,
    subMenu: true,
    subMenuItems: [
        { title: 'Contracts', to: '/activities/contracts' },
        { title: 'Deals', to: '/activities/deals' },
      ],
  },
  {
    title: 'Analytics',
    path: '/analytics',
    down: false,
    icon: <FaChartPie  />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    down: false,
    icon: <FaGear />,
    cName: 'nav-text'
  },
  {
    title: 'Get Help',
    path: '/gethelp',
    down: false,
    icon: <FaCircleQuestion />,
    cName: 'nav-text'
  }
];