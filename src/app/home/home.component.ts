import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vcRef:ViewContainerRef,private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
    
  }
  async loadOrders(){
    this.vcRef.clear();
    const {OrdersComponent} = await import('../orders/orders.component');
    this.vcRef.createComponent(this.resolver.resolveComponentFactory(OrdersComponent));
    
  }

}
