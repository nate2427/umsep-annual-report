import BarChartIcon from "@material-ui/icons/BarChart";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ChatIcon from "@material-ui/icons/ChatOutlined";
import CodeIcon from "@material-ui/icons/Code";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import FolderIcon from "@material-ui/icons/FolderOutlined";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import GradeTwoTone from "@material-ui/icons/GradeTwoTone";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LockOpenIcon from "@material-ui/icons/LockOpenOutlined";
import MailIcon from "@material-ui/icons/MailOutlined";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import ReceiptIcon from "@material-ui/icons/ReceiptOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon,
};

export default [
  {
    label: "Navigation menu",
    content: JSON.parse(
      `[
  {
    "label": "Home",
    "to": "/home"
  },
  {
    "label": "About",
    "content": [
      {
        "label": "Program Introduction",
        "description": "This is a dashboard page example built using this template.",
        "to": "/about/program-introduction"
      },
      {
        "label": "Leadership",
        "description": "This is a dashboard page example built using this template.",
        "to": "/about/leadership"
      },
      {
        "label": "Program Overview",
        "description": "This is a dashboard page example built using this template.",
        "to": "/about/program-overview"
      },
      {
        "label": "History",
        "description": "This is a dashboard page example built using this template.",
        "to": "/about/history"
      }
    ]
  },
  {
    "label": "Activities",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Overview",
        "description": "This is a dashboard page example built using this template.",
        "to": "/activities/overview"
      },
      {
        "label": "Partnerships",
        "description": "This is a dashboard page example built using this template.",
        "to": "/activities/partnerships"
      },
      {
        "label": "Innovations",
        "description": "This is a dashboard page example built using this template.",
        "to": "/activities/innovations"
      }
    ]
  },
  {
    "label": "Student Stories",
    "content": [
      {
        "label": "Virtual Boot Camps",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
         "to": "/student-stories/virtual-boot-camps"
      },
      {
        "label": "Health Equity",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/student-stories/health-equity"
      }
    ]
  },
  {
    "label": "Strategic Plan",
    "to": "/strategic-plan"
  },
  {
    "label": "Preceptors",
    "to": "/preceptors"
  },
  {
    "label": "Interns",
    "to": "/interns"
  },
  {
    "label": "Highlights",
    "to": "/highlights"
  }
]`,
      (key, value) => {
        if (key === "icon") {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    ),
  },
];
