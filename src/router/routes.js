const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/components",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/components/QuasarCard",
        component: () => import("pages/components/QuasarCard.vue"),
      },
      {
        path: "/components/CustomTable",
        component: () => import("pages/components/CustomTable.vue"),
      },
    ],
  },
  {
    path: "/portfolio",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/portfolio/CardPoket",
        component: () => import("pages/portfolio/CardPoket.vue"),
      },
      {
        path: "/portfolio/CustomTable",
        component: () => import("pages/portfolio/CustomTable.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
