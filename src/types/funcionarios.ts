export interface FuncionarioData {
  nome: string;
  cargo: string;
  salario: number;
}

export interface FuncionariosContextType {
  funcionarios: FuncionarioData[];
  novoFuncionario: FuncionarioData;
  setNovoFuncionario: (newEmployee: FuncionarioData) => void;
  editingIndex: number | null;
  isModalOpen: boolean;
  addFuncionario: () => void;
  editFuncionario: (index: number, data: FuncionarioData) => void;
  confirmEdit: () => void;
  deleteFuncionario: (index: number) => void;
  openModal: () => void;
  closeModal: () => void;
}
