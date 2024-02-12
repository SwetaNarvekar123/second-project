import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectnew';
  list: any[] = [];
  data: boolean = false;
  addTask(item:string)
  {
   
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list);
  }
  updateTask(id:number)
  {
   
    this.list=this.list.filter(item=>item.id==id)
    console.warn(this.list);
  }
  
  removeTask(id:number)
  {
   
    console.warn(this.list);
    this.list=this.list.filter(item=>item.id!==id)
  }
  onToggle()
  {
    this.data = !this.data;
  }
}
