import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client
  },
  {
    path: 'comments',
    renderMode: RenderMode.Server
  },
  {
    path: 'todos',
    renderMode: RenderMode.Prerender
},
];
