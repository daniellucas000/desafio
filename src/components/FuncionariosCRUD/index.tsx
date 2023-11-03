import { TableContainer } from '../../styles/tableStyled';
import { FileEdit, Trash } from 'lucide-react';
import { useFuncionarioContext } from '../../context/FuncionarioContext';
import { Button } from '../Button';

import { defaultTheme } from '../../styles/themes/default';
import { CrudContainer } from '../../styles/appStyled';

export function FuncionariosCRUD() {
  const {
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
  } = useFuncionarioContext();

  return (
    <CrudContainer>
      <div>
        <Button margin="2rem 0" onClick={openModal}>
          Adicionar Funcinário
        </Button>
      </div>

      <div>
        <h3>Lista de funcionários</h3>
        <TableContainer>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Salário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario, index) => (
              <tr key={index}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cargo}</td>
                <td>
                  {funcionario.salario.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td>
                  <span>
                    <button onClick={() => editFuncionario(index, funcionario)}>
                      <FileEdit strokeWidth={1} size={20} />
                    </button>
                    <button onClick={() => deleteFuncionario(index)}>
                      <Trash strokeWidth={1} size={20} />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {editingIndex !== null
                ? 'Editar Funcionário'
                : 'Adicionar Novo Funcionário'}
            </h3>
            <input
              type="text"
              required
              id="nomeFuncionario"
              placeholder="Nome"
              value={novoFuncionario.nome}
              onChange={(e) =>
                setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })
              }
            />
            <input
              type="text"
              id="cargoFuncionario"
              required
              placeholder="Cargo"
              value={novoFuncionario.cargo}
              onChange={(e) =>
                setNovoFuncionario({
                  ...novoFuncionario,
                  cargo: e.target.value,
                })
              }
            />
            <input
              type="number"
              min={0}
              placeholder="Salário"
              value={novoFuncionario.salario || ''}
              onChange={(e) => {
                const parsedValue = parseFloat(e.target.value);
                if (!isNaN(parsedValue)) {
                  setNovoFuncionario({
                    ...novoFuncionario,
                    salario: parsedValue,
                  });
                }
              }}
            />

            {editingIndex === null ? (
              <Button
                bgColor={defaultTheme['green-100']}
                color={defaultTheme['gray-800']}
                onClick={addFuncionario}
              >
                Adicionar
              </Button>
            ) : (
              <Button
                bgColor={defaultTheme['green-100']}
                color={defaultTheme['gray-800']}
                onClick={confirmEdit}
              >
                Confirmar
              </Button>
            )}
            <Button
              bgColor={defaultTheme['red-100']}
              color={defaultTheme['gray-800']}
              onClick={closeModal}
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </CrudContainer>
  );
}
