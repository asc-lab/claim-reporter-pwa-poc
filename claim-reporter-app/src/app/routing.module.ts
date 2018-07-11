import {NgModule} from "@angular/core";

import {RouterModule, Routes} from "@angular/router";
import {ClaimListComponent} from "./components/claim-list/claim-list.component";
import {ClaimCreateComponent} from "./components/claim-create/claim-create.component";

const appRoutes: Routes = [
  {path: '', component: ClaimCreateComponent},
  {path: 'claims', component: ClaimListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
