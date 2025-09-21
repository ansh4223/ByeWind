// Import SVG assets
import Female15Avatar from "../assets/images/Female15.svg";
import Male8Avatar from "../assets/images/Male08.svg";
import IconSet from "../assets/images/IconSet.svg";
import Andi from "../assets/images/andi.svg";
import Koray from "../assets/images/koray.svg";
import Kate from "../assets/images/kate.svg";
import ChartPieSlice from "../assets/images/ChartPieSlice.svg";
import EcommerceIcon from "../assets/images/ecommerce.svg";
import ProjectIcon from "../assets/images/projects.svg";
import OnlineCoursesIcon from "../assets/images/OnlineCourses.svg";
import UserProfileIcon from "../assets/images/userprofile.svg";
import AccountIcon from "../assets/images/account.svg";
import CorporateIcon from "../assets/images/corporate.svg";
import BlogIcon from "../assets/images/blog.svg";
import SocialIcon from "../assets/images/social.svg";
import Avatar1 from "../assets/images/3D05.svg";
import Avatar2 from "../assets/images/Female05.svg";
import Avatar3 from "../assets/images/3D08.svg";
import Avatar4 from "../assets/images/Male07.svg";
import Avatar5 from "../assets/images/Male11.svg";

export const ordersData = [
  {
    id: "CM9801",
    orderId: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: Female15Avatar,
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "info"
  },
  {
    id: "CM9802", 
    orderId: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: Kate,
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco", 
    date: "A minute ago",
    status: "Complete",
    statusColor: "success"
  },
  {
    id: "CM9803",
    orderId: "#CM9803", 
    user: {
      name: "Drew Cano",
      avatar: Male8Avatar,
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago", 
    status: "Pending",
    statusColor: "warning"
  },
  {
    id: "CM9804",
    orderId: "#CM9804",
    user: {
      name: "Orlando Diggs", 
      avatar: IconSet,
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved", 
    statusColor: "success"
  },
  {
    id: "CM9805",
    orderId: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: Andi,
    },
    project: "App Landing Page", 
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "error"
  },
  {
    id: "CM9806",
    orderId: "#CM9806",
    user: {
      name: "Natali Craig",
      avatar: Female15Avatar,
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "info"
  },
  {
    id: "CM9807", 
    orderId: "#CM9807",
    user: {
      name: "Kate Morrison",
      avatar: Kate,
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco", 
    date: "A minute ago",
    status: "Complete",
    statusColor: "success"
  },
  {
    id: "CM9808",
    orderId: "#CM9808", 
    user: {
      name: "Drew Cano",
      avatar: Male8Avatar,
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago", 
    status: "Pending",
    statusColor: "warning"
  },
  {
    id: "CM9809",
    orderId: "#CM9809",
    user: {
      name: "Orlando Diggs", 
      avatar: IconSet,
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved", 
    statusColor: "success"
  },
  {
    id: "CM9810",
    orderId: "#CM9810",
    user: {
      name: "Andi Lane",
      avatar: Andi,
    },
    project: "App Landing Page", 
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "error"
  },
  {
    id: "CM9811",
    orderId: "#CM9811",
    user: {
      name: "Natali Craig",
      avatar: Female15Avatar,
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "info"
  },
  {
    id: "CM9812", 
    orderId: "#CM9812",
    user: {
      name: "Kate Morrison",
      avatar: Kate,
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco", 
    date: "A minute ago",
    status: "Complete",
    statusColor: "success"
  },
  {
    id: "CM9813",
    orderId: "#CM9813", 
    user: {
      name: "Drew Cano",
      avatar: Male8Avatar,
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago", 
    status: "Pending",
    statusColor: "warning"
  },
  {
    id: "CM9814",
    orderId: "#CM9814",
    user: {
      name: "Orlando Diggs", 
      avatar: IconSet,
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved", 
    statusColor: "success"
  },
  {
    id: "CM9815",
    orderId: "#CM9815",
    user: {
      name: "Andi Lane",
      avatar: Andi,
    },
    project: "App Landing Page", 
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "error"
  },
];

// Dashboard Metrics Data
export const dashboardMetrics = {
  customers: {
    value: 3781,
    change: 11.01,
    changeType: "increase",
    title: "Customers"
  },
  orders: {
    value: 1219, 
    change: -0.03,
    changeType: "decrease",
    title: "Orders"
  },
  revenue: {
    value: 695,
    currency: "$",
    change: 15.03,
    changeType: "increase", 
    title: "Revenue"
  },
  growth: {
    value: 30.1,
    unit: "%",
    change: 6.08,
    changeType: "increase",
    title: "Growth"
  }
};

// Revenue Chart Data
export const revenueChartData = {
  currentWeek: {
    label: "Current Week",
    value: 58211,
    data: [
      { month: 'Jan', value: 50000 },
      { month: 'Feb', value: 50000 },
      { month: 'Mar', value: 48000 },
      { month: 'Apr', value: 65000 },
      { month: 'May', value: 75000 },
      { month: 'Jun', value: 58211 }
    ]
  },
  previousWeek: {
    label: "Previous Week", 
    value: 68768,
    data: [
      { month: 'Jan', value: 30000 },
      { month: 'Feb', value: 50000 },
      { month: 'Mar', value: 62000 },
      { month: 'Apr', value: 55000 },
      { month: 'May', value: 60000 },
      { month: 'Jun', value: 75768 }
    ]
  }
};

// Projections vs Actuals Chart Data
export const projectionsActualsData = [
  { month: "Jan", projections: 15000000, actuals: 12000000 },
  { month: "Feb", projections: 18000000, actuals: 16000000 },
  { month: "Mar", projections: 16000000, actuals: 14000000 },
  { month: "Apr", projections: 20000000, actuals: 18500000 },
  { month: "May", projections: 17000000, actuals: 15500000 },
  { month: "Jun", projections: 19000000, actuals: 17500000 }
];

// Revenue by Location Data
export const revenueByLocation = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" }
];

// Top Selling Products Data - Extended to 12+ items
export const topSellingProducts = [
  { id: 1, name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
  { id: 2, name: "Marco Lightweight Shirt", price: 128.50, quantity: 37, amount: 4754.50 },
  { id: 3, name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { id: 4, name: "Lightweight Jacket", price: 20.00, quantity: 184, amount: 3680.00 },
  { id: 5, name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
  { id: 6, name: "Nike Air Max 270", price: 150.00, quantity: 45, amount: 6750.00 },
  { id: 7, name: "Adidas Ultraboost 22", price: 180.00, quantity: 32, amount: 5760.00 },
  { id: 8, name: "Levi's 501 Original Jeans", price: 98.00, quantity: 67, amount: 6566.00 },
  { id: 9, name: "Champion Reverse Weave Hoodie", price: 75.00, quantity: 89, amount: 6675.00 },
  { id: 10, name: "Patagonia Better Sweater", price: 99.00, quantity: 23, amount: 2277.00 },
  { id: 11, name: "The North Face Nuptse Jacket", price: 299.00, quantity: 15, amount: 4485.00 },
  { id: 12, name: "Uniqlo Heattech Crew Neck T-Shirt", price: 14.90, quantity: 156, amount: 2324.40 }
];

// Total Sales Data
export const totalSalesData = {
  current: 698.82,
  target: 800.00,
  growth: 38.6,
  breakdown: [
    { category: "Direct", value: 300.56, percentage: 43.0, color: "#1f2937" },
    { category: "Affiliate", value: 135.18, percentage: 19.4, color: "#3b82f6" },
    { category: "Sponsored", value: 154.02, percentage: 22.0, color: "#8b5cf6" },
    { category: "E-mail", value: 48.96, percentage: 7.0, color: "#06d6a0" }
  ]
};

// Activities/Notifications Data - Extended to 15+ items
export const activitiesData = [
  { id: 1, type: "bug", message: "You have a bug that needs attention", time: "Just now", icon: "AlertTriangle", user: { name: "System", avatar: Avatar1 }},
  { id: 2, type: "user", message: "New user registered", time: "59 minutes ago", icon: "UserPlus", user: { name: "System", avatar: Avatar2 }},
  { id: 3, type: "bug", message: "You have a bug that needs fixing", time: "12 hours ago", icon: "AlertTriangle", user: { name: "System", avatar: Avatar3 }},
  { id: 4, type: "subscription", message: "Andi Lane subscribed to you", time: "Today, 11:59 AM", icon: "Bell", user: { name: "Andi Lane", avatar: Avatar4 }},
  { id: 5, type: "bug", message: "Critical bug reported", time: "Just now", icon: "AlertTriangle", user: { name: "QA Team", avatar: Avatar5 }},
  { id: 6, type: "release", message: "Released a new version", time: "59 minutes ago", icon: "Rocket", user: { name: "Development Team", avatar: Kate }}
];

// Contacts/Users Data - Extended to 12+ items
export const contactsData = [
  { id: 1, name: "Natali Craig", avatar: Female15Avatar, status: "online", role: "Frontend Developer" },
  { id: 2, name: "Drew Cano", avatar: Male8Avatar, status: "busy", role: "UI Designer" },
  { id: 3, name: "Orlando Diggs", avatar: IconSet, status: "online", role: "Backend Developer" },
  { id: 4, name: "Andi Lane", avatar: Andi, status: "away", role: "Product Manager" },
  { id: 5, name: "Kate Morrison", avatar: Kate, status: "online", role: "Full Stack Developer" },
  { id: 6, name: "Koray Okumus", avatar: Koray, status: "offline", role: "DevOps Engineer" },
  { id: 7, name: "Natali Craig", avatar: Female15Avatar, status: "online", role: "Frontend Developer" },
  { id: 8, name: "Drew Cano", avatar: Male8Avatar, status: "busy", role: "UI Designer" },
  { id: 9, name: "Orlando Diggs", avatar: IconSet, status: "online", role: "Backend Developer" },
  { id: 10, name: "Andi Lane", avatar: Andi, status: "away", role: "Product Manager" },
  { id: 11, name: "Kate Morrison", avatar: Kate, status: "online", role: "Full Stack Developer" },
  { id: 12, name: "Koray Okumus", avatar: Koray, status: "offline", role: "DevOps Engineer" },
];

// Sidebar Navigation Data with Lucide Icons
export const sidebarNavigation = [
  {
    section: "Favorites",
    items: [] // Empty as shown in image
  },
  {
    section: "Recently", 
    items: [] // Empty as shown in image
  },
  {
    section: "Dashboards",
    items: [
      { id: "default", name: "Default", path: "/default", icon: ChartPieSlice, active: true },
      { id: "ecommerce", name: "eCommerce", path: "/ecommerce", icon: EcommerceIcon },
      { id: "projects-dashboard", name: "Projects", path: "/projects-dashboard", icon: ProjectIcon },
      { id: "online-courses", name: "Online Courses", path: "/courses", icon: OnlineCoursesIcon }
    ]
  },
  {
    section: "Pages",
    items: [
      {
        id: "user-profile", 
        name: "User Profile", 
        path: "/profile", 
        icon: UserProfileIcon,
        expanded: true, // Show expanded by default as in image
        subItems: [
          { name: "Overview", path: "/profile/overview", icon: "Eye" },
          { name: "Projects", path: "/profile/projects", icon: "Briefcase" },
          { name: "Campaigns", path: "/profile/campaigns", icon: "Megaphone" },
          { name: "Documents", path: "/profile/documents", icon: "FileText" },
          { name: "Followers", path: "/profile/followers", icon: "Users" }
        ]
      },
      { id: "account", name: "Account", path: "/account", icon: AccountIcon },
      { id: "corporate", name: "Corporate", path: "/corporate", icon: CorporateIcon },
      { id: "blog", name: "Blog", path: "/blog", icon: BlogIcon },
      { id: "social", name: "Social", path: "/social", icon: SocialIcon }
    ]
  }
];




export default {
  ordersData,
  dashboardMetrics, 
  revenueChartData,
  projectionsActualsData,
  revenueByLocation,
  topSellingProducts,
  totalSalesData,
  activitiesData,
  contactsData,
  sidebarNavigation
};
