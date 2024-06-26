import { Component } from '@angular/core';
import { TarefasService } from '../../services/tarefas.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefas-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  tarefas: Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({});
  constructor(private tarefaService: TarefasService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      nomeTarefa: ['', Validators.required],
      descricao: ['', Validators.required],
      dataLimite: ['', Validators.required],
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir() {
    if (this.tarefaForm.valid) {
      const taskNovo: Tarefa = {
        id: this.generateRandomString(3),
        nomeTarefa: this.tarefaForm.value.nomeTarefa,
        descricao: this.tarefaForm.value.descricao,
        dataLimite: this.tarefaForm.value.dataLimite
      }
      this.tarefaForm.reset();
      this.tarefaService.add(taskNovo);
      alert("Cadastro feito com sucesso!")
    } else {
      alert("Dados invalidos");
      return;
    }
  }

  listar(): void {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: string): void {
    this.tarefaService.remover(id);
    alert("Cadastro feito com sucesso!!");
  }

  ngOnInit(): void {
    this.listar();
  }
}
