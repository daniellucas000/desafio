export interface CargoData {
  cargo: string;
  descricao: string;
  salario: number;
}

export interface CargoContextType {
  cargos: CargoData[];
  novoCargo: CargoData;
  setNovoCargo: (novoCargo: CargoData) => void;
  editingIndex: number | null;
  isModalOpen: boolean;
  adicionarCargo: () => void;
  editarCargo: (index: number, data: CargoData) => void;
  confirmarEdicao: () => void;
  excluirCargo: (index: number) => void;
  abrirModal: () => void;
  fecharModal: () => void;
}
