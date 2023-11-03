/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';
import { CargoContextType, CargoData } from '../types/cargos';

const CargoContext = createContext<CargoContextType | undefined>(undefined);

export const useCargoContext = () => {
  const context = useContext(CargoContext);
  if (!context) {
    throw new Error('useCargoContext deve estar dentro do Provider');
  }
  return context;
};

interface CargoProviderProps {
  children: ReactNode;
}

export function CargoProvider({ children }: CargoProviderProps) {
  const [cargos, setCargos] = useState<CargoData[]>([]);
  const [novoCargo, setNovoCargo] = useState<CargoData>({
    cargo: '',
    descricao: '',
    salario: 0,
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adicionarCargo = () => {
    if (
      novoCargo.cargo.trim() === '' ||
      novoCargo.descricao.trim() === '' ||
      novoCargo.salario === 0
    ) {
      alert(
        'Por favor, preencha todos os campos antes de adicionar um novo cargo.'
      );
      return;
    }

    setCargos([...cargos, novoCargo]);
    setNovoCargo({ cargo: '', descricao: '', salario: 0 });
    setIsModalOpen(false);
  };

  const editarCargo = (index: number, data: CargoData) => {
    setEditingIndex(index);
    setNovoCargo(data);
    setIsModalOpen(true);
  };

  const confirmarEdicao = () => {
    if (editingIndex !== null) {
      const updatedCargos = [...cargos];
      updatedCargos[editingIndex] = novoCargo;
      setCargos(updatedCargos);
      setEditingIndex(null);
      setNovoCargo({ cargo: '', descricao: '', salario: 0 });
      setIsModalOpen(false);
    }
  };

  const excluirCargo = (index: number) => {
    const updatedCargos = cargos.filter((_, i) => i !== index);
    setCargos(updatedCargos);
  };

  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const contextValue: CargoContextType = {
    cargos,
    novoCargo,
    setNovoCargo,
    editingIndex,
    isModalOpen,
    adicionarCargo,
    editarCargo,
    confirmarEdicao,
    excluirCargo,
    abrirModal,
    fecharModal,
  };

  return (
    <CargoContext.Provider value={contextValue}>
      {children}
    </CargoContext.Provider>
  );
}
