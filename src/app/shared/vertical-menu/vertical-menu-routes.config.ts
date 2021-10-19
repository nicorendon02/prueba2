import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/calculator', title: 'Calculator', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Challenge', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      {
        path: '/challenge/images', title: 'Images', icon: 'ft-image', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/media-player', title: 'Media Player', icon: 'ft-video', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/text-editor', title: 'Text Editor', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/data-tables', title: 'Data Tables', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/org-chart', title: 'Organization Chart', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
},
];
