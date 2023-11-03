export interface SetorData {
  nome: string;
  descricao: string;
}

export interface SetorContextType {
  setores: SetorData[];
  novoSetor: SetorData;
  setNovoSetor: (novoSetor: SetorData) => void;
  editingIndex: number | null;
  isModalOpen: boolean;
  adicionarSetor: () => void;
  editarSetor: (index: number, data: SetorData) => void;
  confirmarEdicao: () => void;
  excluirSetor: (index: number) => void;
  abrirModal: () => void;
  fecharModal: () => void;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
