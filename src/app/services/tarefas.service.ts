import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }
  tarefas: Tarefa[] = [
    { id: "001", nomeTarefa: "Passear com cachorro", descricao: "passear com o dog", dataLimite: "17/04/2024" },
    { id: "123", nomeTarefa: "Lavar banheiro", descricao: "deixar brilhando", dataLimite: "18/04/2024" },
    { id: "234", nomeTarefa: "Passar roupas", descricao: "tirar amassados", dataLimite: "21/04/2024" },
    { id: "999", nomeTarefa: "Limpar a casa", descricao: "deixar tinindo", dataLimite: "19/04/2024" }
  ];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  remover(id: string) {
    const tarefa = this.tarefas.find(c => c.id == id);
    if (tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
    }
  }

  add(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}
