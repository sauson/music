export const routes = [
  {
    path: "/",
    name: "Discovery",
    component: () => import('../views/Discovery.vue')
  },
  {
    path: "/Discovery",
    name: "Discovery",
    component: () => import('../views/Discovery.vue')
  },
  {
    path: "/Playlist",
    name: "Playlist",
    component: () => import('../views/Playlist.vue')
  },
  {
    path: "/NewSong",
    name: "NewSong",
    component: () => import('../views/NewSong.vue')
  },
  {
    path: "/NewMV",
    name: "NewMV",
    component: () => import('../views/NewMV.vue')
  },
  {
    path: "/Search",
    name: "Search",
    component: () => import('../views/Search.vue')
  },
  {
    path: "/Songlist",
    name: "Songlist",
    component: () => import('../views/Songlist.vue')
  },
  {
    path: "/MV",
    name: "MV",
    component: () => import('../views/MV.vue')
  }
]