import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Page', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/prueba', title: 'Calculator', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Challenge', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      {
        path: '/challenge/images', title: 'Images', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/media-player', title: 'Media Player', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/challenge/text-editor', title: 'Text Editor', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
},
];
