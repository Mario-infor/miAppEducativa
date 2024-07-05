import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TimeComponent } from './components/time/time.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'time', component: TimeComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: MainComponent} // Wildcard route for a 404 page
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
