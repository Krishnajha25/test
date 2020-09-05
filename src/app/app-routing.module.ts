import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { NewsComponent } from './components/news/news.component'
import { VisitorComponent } from './components/visitor/visitor.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'visitor',
    component: VisitorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
