export const SidebarMenuOptions = [
  {
    option: "Dashboard",
    route: "/home",
  },
  {
    option: "Master",
    route: "/master",
    subOptions: [
      {
        option: "Accounts",
        route: "/master/accounts",
      },
      {
        option: "Items",
        route: "/master/items",
      },
      {
        option: "Sites",
        route: "/master/sites",
      },
      {
        option: "Users",
        route: "/master/users",
      },
    ],
  },
  {
    option: "Voucher",
    route: "/voucher",
  },
  {
    option: "Books",
    route: "/books",
  },
  {
    option: "Reports",
    route: "/reports",
  },
];

export const SidebarSettingsOptions = [
  {
    option: "Settings",
    route: "/settings",
  },
  {
    option: "Activity Log",
    route: "/activity-log",
  },
];
