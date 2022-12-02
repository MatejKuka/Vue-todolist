import {createRouter, createWebHistory} from "vue-router";

import DeletedTodos from "../views/DeletedTodos";
import HomePage from "../views/HomePage";

const routes = [
    {
        path: "/deleted-todos",
        name: "DeletedTodos",
        component: DeletedTodos
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;