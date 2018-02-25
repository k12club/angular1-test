import { Routes } from "@angular/router";
import { UserComponent } from "./page/user/user.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";

export const routes:Routes = [
    {path:'', component: UserComponent},
    {path:'dash', component: DashboardComponent}


]