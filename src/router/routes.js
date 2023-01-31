const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/IndexPage.vue"),
        }, ],
    },
    {
        path: "/portfolio",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "/portfolio/CardPoket",
                component: () =>
                    import ("pages/portfolio/CardPoket.vue"),
            },
            {
                path: "/portfolio/CustomTable",
                component: () =>
                    import ("pages/portfolio/CustomTable.vue"),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/ErrorNotFound.vue"),
    },
];

export default routes;