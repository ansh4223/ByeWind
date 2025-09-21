// Application constants
export const APP_NAME = 'ByeWind';
export const APP_VERSION = '1.0.0';

// API endpoints (for future use)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'byewind_theme',
  SIDEBAR_STATE: 'byewind_sidebar',
  USER_PREFERENCES: 'byewind_preferences',
};

// Theme constants
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Breakpoints
export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 960,
  LG: 1280,
  XL: 1920,
};

// Status colors mapping
export const STATUS_COLORS = {
  'Complete': 'success',
  'In Progress': 'info',
  'Pending': 'warning',
  'Approved': 'success',
  'Rejected': 'error',
  'Draft': 'default',
};

// Activity types
export const ACTIVITY_TYPES = {
  BUG: 'bug',
  USER: 'user',
  SUBSCRIPTION: 'subscription',
  RELEASE: 'release',
  DATA: 'data',
  DELETE: 'delete',
  UPDATE: 'update',
  LOGIN: 'login',
  PAYMENT: 'payment',
  EXPORT: 'export',
  BACKUP: 'backup',
  SECURITY: 'security',
};

// User status
export const USER_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  BUSY: 'busy',
  AWAY: 'away',
};

// Chart colors
export const CHART_COLORS = {
  PRIMARY: '#1976d2',
  SECONDARY: '#dc004e',
  SUCCESS: '#2e7d32',
  WARNING: '#ed6c02',
  ERROR: '#d32f2f',
  INFO: '#0288d1',
};

// Table pagination options
export const PAGINATION_OPTIONS = [5, 10, 25, 50, 100];

// Routes
export const ROUTES = {
  DASHBOARD: '/dashboard',
  ECOMMERCE: '/ecommerce',
  ORDERS: '/orders',
  PROJECTS: '/projects',
  COURSES: '/courses',
  PROFILE: '/profile',
  ACCOUNT: '/account',
  CORPORATE: '/corporate',
  BLOG: '/blog',
  SOCIAL: '/social',
};
