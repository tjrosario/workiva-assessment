import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  { path: 'products', renderMode: RenderMode.Prerender },
  { path: 'products/:id', renderMode: RenderMode.Prerender },
];
