/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  FuncionarioData,
  FuncionariosContextType,
} from '../types/funcionarios';

const FuncionarioContext = createContext<FuncionariosContextType | undefined>(
  undefined
);

export const useFuncionarioContext = () => {
  const context = useContext(FuncionarioContext);
  if (!context) {
    throw new Error(
      'FuncionarioContext deve estar dentro do Provider'
    );
  }
  return context;
};

interface FuncionariosProviderProps {
  children: ReactNode;
}

export const EmployeeProvider: React.FC<FuncionariosProviderProps> = ({
  children,
}) => {
  const [funcionarios, setFuncionarios] = useState<FuncionarioData[]>([]);
  const [novoFuncionario, setNovoFuncionario] = useState<FuncionarioData>({
    nome: '',
    cargo: '',
    salario: 0,
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFuncionario = () => {
    if (
      novoFuncionario.nome.trim() === '' ||
      novoFuncionario.cargo.trim() === '' ||
      novoFuncionario.salario === 0
    ) {
      alert(
        'Por favor, preencha todos os campos antes de adicionar um novo funcionário.'
      );
      return;
    }

    setFuncionarios([...funcionarios, novoFuncionario]);
    setNovoFuncionario({ nome: '', cargo: '', salario: 0 });
    setIsModalOpen(false);
  };

  const editFuncionario = (index: number, data: FuncionarioData) => {
    setEditingIndex(index);
    setNovoFuncionario(data);
    setIsModalOpen(true);
  };

  const confirmEdit = () => {
    if (editingIndex !== null) {
      const updatedEmployees = [...funcionarios];
      updatedEmployees[editingIndex] = novoFuncionario;
      setFuncionarios(updatedEmployees);
      setEditingIndex(null);
      setNovoFuncionario({ nome: '', cargo: '', salario: 0 });
      setIsModalOpen(false);
    }
  };

  const deleteFuncionario = (index: number) => {
    const updatedEmployees = funcionarios.filter((_, i) => i !== index);
    setFuncionarios(updatedEmployees);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue: FuncionariosContextType = {
    funcionarios,
    novoFuncionario,
    setNovoFuncionario,
    editingIndex,
    isModalOpen,
    addFuncionario,
    editFuncionario,
    confirmEdit,
    deleteFuncionario,
    openModal,
    closeModal,
  };

  return (
    <FuncionarioContext.Provider value={contextValue}>
      {children}
    </FuncionarioContext.Provider>
  );
};
