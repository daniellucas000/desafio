/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SetorContextType, SetorData } from '../types/setor';

const SetorContext = createContext<SetorContextType | undefined>(undefined);

export const useSetorContext = () => {
  const context = useContext(SetorContext);
  if (!context) {
    throw new Error(
      'useSetorContext deve ser usado dentro de um SetorProvider'
    );
  }
  return context;
};

interface SetorProviderProps {
  children: ReactNode;
}

export const SetorProvider: React.FC<SetorProviderProps> = ({ children }) => {
  const [setores, setSetores] = useState<SetorData[]>([]);
  const [novoSetor, setNovoSetor] = useState<SetorData>({
    nome: '',
    descricao: '',
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const adicionarSetor = () => {
    if (novoSetor.nome.trim() === '' || novoSetor.descricao.trim() === '') {
      alert(
        'Por favor, preencha todos os campos antes de adicionar um novo setor.'
      );
      return;
    }

    setSetores([...setores, novoSetor]);
    setNovoSetor({ nome: '', descricao: '' });
    setIsModalOpen(false);
  };

  const editarSetor = (index: number, data: SetorData) => {
    setEditingIndex(index);
    setNovoSetor(data);
    setIsModalOpen(true);
  };

  const confirmarEdicao = () => {
    if (editingIndex !== null) {
      const novosSetores = [...setores];
      novosSetores[editingIndex] = novoSetor;
      setSetores(novosSetores);
      setEditingIndex(null);
      setNovoSetor({ nome: '', descricao: '' });
      setIsModalOpen(false);
    }
  };

  const excluirSetor = (index: number) => {
    const novosSetores = setores.filter((_, i) => i !== index);
    setSetores(novosSetores);
  };

  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const contextValue: SetorContextType = {
    setores,
    novoSetor,
    setNovoSetor,
    editingIndex,
    isModalOpen,
    adicionarSetor,
    editarSetor,
    confirmarEdicao,
    excluirSetor,
    abrirModal,
    fecharModal,
    isMenuVisible,
    setIsMenuVisible,
  };

  return (
    <SetorContext.Provider value={contextValue}>
      {children}
    </SetorContext.Provider>
  );
};
