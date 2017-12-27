import { Component, OnInit } from '@angular/core';
import { FuncionarioDTO } from '../dto/FuncionarioDTO';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'add-new-component',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  funcionario : FuncionarioDTO = new FuncionarioDTO(); 

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    
  }

  salvar(): void {
    this.funcionario.createdByAdmin.id = 1;
    this.funcionarioService.salvar(this.funcionario).subscribe({
      next: resp => {
      },
      error: error => {},
      complete: () => {}
    });
  }

}
