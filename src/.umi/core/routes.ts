// @ts-nocheck
import {
    ApplyPluginsType,
    dynamic
} from '/Volumes/HaiNL_Data/At_Work/admin_web/node_modules/umi/node_modules/@umijs/runtime';
import {plugin} from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
    const routes = [
        {
            "path": "/",
            "component": dynamic({
                loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/.umi/plugin-layout/Layout.tsx'),
                loading: LoadingComponent
            }),
            "routes": [
                {
                    "path": "/user",
                    "layout": false,
                    "routes": [
                        {
                            "name": "login",
                            "path": "/user/login",
                            "component": dynamic({
                                loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/user/Login'),
                                loading: LoadingComponent
                            }),
                            "exact": true
                        },
                        {
                            "component": dynamic({
                                loader: () => import(/* webpackChunkName: 'p__404' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/404'),
                                loading: LoadingComponent
                            }),
                            "exact": true
                        }
                    ]
                },
                {
                    "path": "/home",
                    "name": "home",
                    "icon": "smile",
                    "component": dynamic({
                        loader: () => import(/* webpackChunkName: 'p__Home' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/Home'),
                        loading: LoadingComponent
                    }),
                    "exact": true
                },
                {
                    "path": "/admin",
                    "name": "admin",
                    "icon": "crown",
                    "access": "canAdmin",
                    "component": dynamic({
                        loader: () => import(/* webpackChunkName: 'p__Admin' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/Admin'),
                        loading: LoadingComponent
                    }),
                    "routes": [
                        {
                            "path": "/admin/sub-page",
                            "name": "sub-page",
                            "icon": "smile",
                            "component": dynamic({
                                loader: () => import(/* webpackChunkName: 'p__Home' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/Home'),
                                loading: LoadingComponent
                            }),
                            "exact": true
                        },
                        {
                            "component": dynamic({
                                loader: () => import(/* webpackChunkName: 'p__404' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/404'),
                                loading: LoadingComponent
                            }),
                            "exact": true
                        }
                    ]
                },
                {
                    "path": "/index.html",
                    "redirect": "/home",
                    "exact": true
                },
                {
                    "path": "/",
                    "redirect": "/home",
                    "exact": true
                },
                {
                    "component": dynamic({
                        loader: () => import(/* webpackChunkName: 'p__404' */'/Volumes/HaiNL_Data/At_Work/admin_web/src/pages/404'),
                        loading: LoadingComponent
                    }),
                    "exact": true
                }
            ]
        }
    ];

    // allow user to extend routes
    plugin.applyPlugins({
        key: 'patchRoutes',
        type: ApplyPluginsType.event,
        args: {routes},
    });

    return routes;
}
