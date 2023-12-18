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
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { faDriversLicense } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const sideMenu = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: faDashboard,
    depth: 1
  },
  {
    to: "/master-data",
    label: "Master Data",
    icon: faScroll,
    depth: 1,
    menu: [{
      to: "/Psu",
      label: "PSU",
      icon: faDatabase,
      depth: 2,
      menu: [{
        to: "/Add/",
        label: "Add",
        icon: faAdd,
        depth: 3
      },
      {
        to: "/List/",
        label: "List",
        icon: faList,
        depth: 3
      }]
    },
    {
      to: "/khana",
      label: "Khana",
      icon: faBuilding,
      depth: 2,
      menu: [{
        to: "/add",
        label: "Add",
        icon: faAdd,
        depth: 3
      },
      {
        to: "/list",
        label: "List",
        icon: faList,
        depth: 3
      }]
    },
    {
      to: "/Registerer",
      label: "Registerer",
      icon: faArchive,
      depth: 2,
      menu: [{
        to: "/Add",
        label: "Add",
        icon: faAdd,
        depth: 3
      },
      {
        to: "/List",
        label: "List",
        icon: faList,
        depth: 3
      }]
    },
    {
      to: "/question",
      label: "Question",
      icon: faBookAtlas,
      depth: 2,
      menu: [{
        to: "/schedule",
        label: "Schedule",
        icon: faTimeline,
        depth: 3,
        menu: [{
          to: "/add",
          label: "Add",
          icon: faAdd,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faList,
          depth: 4
        }]
      },
      {
        to: "/questionTopic",
        label: "Question Topic",
        icon: faDriversLicense,
        depth: 3,
        menu: [{
          to: "/Add",
          label: "Add",
          icon: faAdd,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faList,
          depth: 4
        }]
      },
      {
        to: "/question",
        label: "Question",
        icon: faReceipt,
        depth: 3,
        menu: [{
          to: "/Add",
          label: "Add",
          icon: faAdd,
          depth: 4
        },
        {
          to: "/list",
          label: "List",
          icon: faList,
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
    icon: faStore,
    depth: 1,
    menu: [{
      to: "/list",
      label: "List",
      icon: faList,
      depth: 2
    }
    ]
  },
  {
    to: "/userLocations",
    label: "User Locations",
    icon: faLocation,
    depth: 1,
    menu: [{
      to: "/Add",
      label: "Add",
      icon: faAdd,
      depth: 2
    },
    {
      to: "/List",
      label: "List",
      icon: faList,
      depth: 2
    }
    ]
  },
  {
    to: "/survey-live-locations",
    label: "Survey Live Locations",
    icon: faLocation,
    depth: 1
  },
  {
    to: "/settings",
    label: "Settings",
    icon: faServer,
    depth: 1,
    menu: [{
      to: "/auth/User",
      label: "Auth User",
      icon: faUser,
      depth: 2,
      menu: [{
        to: "/Add",
        label: "Add",
        icon: faAdd,
        depth: 3
      },
      {
        to: "/List",
        label: "List",
        icon: faList,
        depth: 3
      }]
    }]
  }
];

