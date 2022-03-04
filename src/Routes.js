import HomeIndex from './Pages/Home/HomeIndex.vue'
import HomeContent from './Pages/Home/Components/HomeContent.vue'
import ArticleContent from './Pages/Home/Components/articles/ArticleContent.vue'
import CategoryContent from './Pages/Home/Components/categories/CategoryContent.vue'
import Login from './Pages/Home/Components/register/login.vue'
import Register from './Pages/Home/Components/register/regirster.vue'
export const Routes = [
  {
    path: '',
    component: HomeIndex,
    children: [
      {
        path: "",
        component: HomeContent,
        name: "HomeContent",
      },
      {
        path: "article/:id",
        component: ArticleContent,
        name: "ArticleContent",
      },
      {
        path: "category/:id",
        component: CategoryContent,
        name: "CategoryContent",
      },
    ],
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
];
