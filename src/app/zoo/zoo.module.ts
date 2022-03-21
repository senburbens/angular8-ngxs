import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { AnimalsState } from "./state/animal.state";
import { ZooRoutingModule } from "./zoo-routing.module";
import { ZooComponent } from "./zoo/zoo.component";

@NgModule({
  declarations: [
    ZooComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AnimalsState]),
    ZooRoutingModule
  ],
  exports : [ RouterModule]
})
export class ZooModule { }
