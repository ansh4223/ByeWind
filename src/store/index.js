import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  // Theme state
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  // Sidebar state
  sidebarOpen: true,
  sidebarMobile: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleMobileSidebar: () =>
    set((state) => ({ sidebarMobile: !state.sidebarMobile })),
  closeMobileSidebar: () => set({ sidebarMobile: false }),

  // Navigation state
  activeRoute: "/dashboard",
  setActiveRoute: (route) => set({ activeRoute: route }),

  // Orders state
  orders: [],
  ordersLoading: false,
  ordersError: null,
  setOrders: (orders) => set({ orders }),
  setOrdersLoading: (loading) => set({ ordersLoading: loading }),
  setOrdersError: (error) => set({ ordersError: error }),

  // Products state
  products: [],
  productsLoading: false,
  setProducts: (products) => set({ products }),
  setProductsLoading: (loading) => set({ productsLoading: loading }),

  // Activities state
  activities: [],
  setActivities: (activities) => set({ activities }),

  // Contacts state
  contacts: [],
  setContacts: (contacts) => set({ contacts }),

  // Dashboard metrics
  metrics: null,
  setMetrics: (metrics) => set({ metrics }),

  // Search functionality
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Right drawer state
  rightDrawerOpen: true,
  rightDrawerMobile: false,
  toggleRightDrawer: () =>
    set((state) => ({ rightDrawerOpen: !state.rightDrawerOpen })),
  toggleMobileRightDrawer: () =>
    set((state) => ({ rightDrawerMobile: !state.rightDrawerMobile })),
  closeRightDrawer: () => set({ rightDrawerOpen: false }),
  closeMobileRightDrawer: () => set({ rightDrawerMobile: false }),

  // Notifications
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: Date.now() },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
