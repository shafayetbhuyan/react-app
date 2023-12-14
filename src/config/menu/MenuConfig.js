// import {
//   HomeIcon,
//   UserIcon,
//   CogIcon,
//   UserCircleIcon,
//   ShieldCheckIcon,
//   LockOpenIcon,

//   // DeviceMobileIcon,
// } from '@heroicons/react/24/solid';
// } from '@heroicons/react/outline';
import { faTable } from "@fortawesome/free-solid-svg-icons";

export const sideMenu = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: faTable,
    depth: 1
  },
  {
    to: "/master-data",
    label: "Master Data",
    icon: faTable,
    depth: 1,
    menu: [{
      to: "/Psu",
      label: "PSU",
      icon: faTable,
      depth: 2,
      menu: [{
        to: "/Add",
        label: "Add",
        icon: faTable,
        depth: 3
      },
      {
        to: "/list",
        label: "List",
        icon: faTable,
        depth: 3
      }]
    },
    {
      to: "/khana",
      label: "Khana",
      icon: faTable,
      depth: 2,
      menu: [{
        to: "/add",
        label: "Add",
        icon: faTable,
        depth: 3
      },
      {
        to: "/list",
        label: "List",
        icon: faTable,
        depth: 3
      }]
    },
    {
      to: "/registerer",
      label: "Registerer",
      icon: faTable,
      depth: 2,
      menu: [{
        to: "/add",
        label: "Add",
        icon: faTable,
        depth: 3
      },
      {
        to: "/list",
        label: "List",
        icon: faTable,
        depth: 3
      }]
    },
    {
      to: "/question",
      label: "Question",
      icon: faTable,
      depth: 2,
      menu: [{
        to: "/schedule",
        label: "Schedule",
        icon: faTable,
        depth: 3,
        menu: [{
          to: "/add",
          label: "Add",
          icon: faTable,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faTable,
          depth: 4
        }]
      },
      {
        to: "/question-topic",
        label: "Question Topic",
        icon: faTable,
        depth: 3,
        menu: [{
          to: "/add",
          label: "Add",
          icon: faTable,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faTable,
          depth: 4
        }]
      },
      {
        to: "/question",
        label: "Question",
        icon: faTable,
        depth: 3,
        menu: [{
          to: "/add",
          label: "Add",
          icon: faTable,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faTable,
          depth: 4
        }]
      }
    ]
    }
    ]
  },
  {
    to: "/submissions",
    label: "Submissions",
    icon: faTable,
    depth: 1,
    menu: [{
      to: "/list",
      label: "List",
      icon: faTable,
      depth: 2
    }
    ]
  },
  {
    to: "/user-locations",
    label: "User Locations",
    icon: faTable,
    depth: 1,
    menu: [{
      to: "/add",
      label: "Add",
      icon: faTable,
      depth: 2
    },
    {
      to: "/list",
      label: "List",
      icon: faTable,
      depth: 2
    }
    ]
  },
  {
    to: "/survey-live-locations",
    label: "Survey Live Locations",
    icon: faTable,
    depth: 1
  }
];

