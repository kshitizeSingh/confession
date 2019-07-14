import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {ConfessionCardComponent} from './components/confession-card/confession-card.component';
import {NewConfessionComponent} from './components/new-confession/new-confession.component';
import {ConfessionComponent} from './components/confession/confession.component';

const routes: Routes = [
  {path: '', component: ConfessionCardComponent},
  {path: 'confessions', component: ConfessionCardComponent},
  {path: 'addConfession', component: NewConfessionComponent},
  {path: 'confession/:id', component: ConfessionComponent},

  {path: '**', redirectTo: 'confessions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
