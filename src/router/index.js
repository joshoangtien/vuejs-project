import Vue from "vue";
import VueRouter from "vue-router";
import Client from "@/layouts/Client.vue";
import Admin from "@/layouts/Admin.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  //Router Client
  {
    path: "/",
    name: "Client",
    component: Client,
    children: [
      {
        path: "",
        name: "HomePage",
        component: () =>
          import(/* webpackChunkName: "HomePage" */ "@/views/client/Home.vue"),
      },
      {
        path: "about",
        name: "Introduce",
        component: () =>
          import(
            /* webpackChunkName: "Introduce" */ "@/views/client/Introduce.vue"
          ),
      },
      {
        path: "product-detail/:id",
        name: "ProductDetailPage",
        component: () =>
          import(
            /* webpackChunkName: "produtDetail" */ "@/views/client/ProductDetail.vue"
          ),
      },
      {
        path: "categories/:id",
        name: "ProductsByCategory",
        component: () =>
          import(
            /* webpackChunkName: "produtDetail" */ "@/views/client/ProductsByCategory.vue"
          ),
      },
      {
        path: "login",
        name: "LoginPage",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/client/Login.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.auth.isAuthenticated) {
            next("/");
          } else {
            next();
          }
        },
      },
      {
        path: "register",
        name: "RegisterPage",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "@/views/client/Register.vue"
          ),
        beforeEnter: (to, from, next) => {
          if (store.state.auth.isAuthenticated) {
            next("/");
          } else {
            next();
          }
        },
      },
      {
        path: "changePassword",
        name: "ChangePassword",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "@/views/client/ChangePassword.vue"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.state.auth.isAuthenticated) {
            next("/login");
          } else {
            next();
          }
        },
      },
      {
        path: "introducePage",
        name: "Introduce",
        component: () =>
          import(
            /* webpackChunkName: "introduce" */ "@/views/client/Introduce.vue"
          ),
      },
      {
        path: "profile",
        name: "Profile",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "@/views/client/Profile.vue"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.state.auth.isAuthenticated) {
            next("/login");
          } else {
            next();
          }
        },
      },
      {
        path: "news",
        name: "NewsPage",
        component: () =>
          import(
            /* webpackChunkName: "NewsPage" */ "@/views/client/NewsPage.vue"
          ),
      },
      {
        path: "post-detail/:id",
        name: "PostDetailPage",
        component: () =>
          import(
            /* webpackChunkName: "PostDetailPage" */ "@/views/client/PostDetail.vue"
          ),
      },
      {
        path: "contact",
        name: "ContactPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/client/Contact.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () =>
          import(/* webpackChunkName: "Cart" */ "@/views/client/Cart.vue"),
      },
      {
        path: "new-products",
        name: "ProductsPage",
        component: () =>
          import(
            /* webpackChunkName: "Products" */ "@/views/client/Products.vue"
          ),
      },
      {
        path: "hot-products",
        name: "ProductsPage",
        component: () =>
          import(
            /* webpackChunkName: "Products" */ "@/views/client/Products.vue"
          ),
      },
      {
        path: "sale-products",
        name: "ProductsPage",
        component: () =>
          import(
            /* webpackChunkName: "Products" */ "@/views/client/Products.vue"
          ),
      },
      {
        path: "payment",
        name: "PaymentPage",
        component: () =>
          import(
            /* webpackChunkName: "PaymentPage" */ "@/views/client/Payment.vue"
          ),
      },
      {
        path: "search",
        name: "SearchProducts",
        component: () =>
          import(
            /* webpackChunkName: "search" */ "@/views/client/SearchProducts.vue"
          ),
      },
    ],
  },

  //Router Admin
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "",
        name: "DashboardPage",
        component: () =>
          import(
            /* webpackChunkName: "DashboardPage" */ "@/views/admin/Dashboard.vue"
          ),
      },
      {
        path: "list-products",
        name: "ListProductsPage",
        component: () =>
          import(
            /* webpackChunkName: "ListProductsPage" */ "@/views/admin/products/ListProducts.vue"
          ),
      },
      {
        path: "create-product",
        name: "CreateProductPage",
        component: () =>
          import(
            /* webpackChunkName: "CreateProductPage" */ "@/views/admin/products/CreateProduct.vue"
          ),
      },
      {
        path: "create-size",
        name: "CreateSizePage",
        component: () =>
          import(
            /* webpackChunkName: "CreateSizePage" */ "@/views/admin/products/CreateSize.vue"
          ),
      },
      {
        path: "list-categories",
        name: "ListCategoriesPage",
        component: () =>
          import(
            /* webpackChunkName: "ListCategoriesPage" */ "@/views/admin/categories/ListCategories.vue"
          ),
      },
      {
        path: "list-posts",
        name: "ListPostsPage",
        component: () =>
          import(
            /* webpackChunkName: "ListPostsPage" */ "@/views/admin/posts/ListPosts.vue"
          ),
      },
      {
        path: "create-post",
        name: "CreatePostPage",
        component: () =>
          import(
            /* webpackChunkName: "CreatePostPage" */ "@/views/admin/posts/CreatePost.vue"
          ),
      },
      {
        path: "list-oders",
        name: "ListOdersPage",
        component: () =>
          import(
            /* webpackChunkName: "ListOdersPage" */ "@/views/admin/oders/ListOders.vue"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.isAuthenticated) {
        next("/login");
      } else if (store.state.auth.user.role == "User") {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/*",
    name: "Error404Page",
    component: () =>
      import(/* webpackChunkName: "Error404Page" */ "@/views/Error404Page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router;
