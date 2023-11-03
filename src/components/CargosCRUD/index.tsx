import { TableContainer } from '../../styles/tableStyled';
import { FileEdit, Trash } from 'lucide-react';
import { useCargoContext } from '../../context/CargoContext';
import { Button } from '../Button';

import { defaultTheme } from '../../styles/themes/default';
import { CrudContainer } from '../../styles/appStyled';

export function CargosCRUD() {
  const {
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
  } = useCargoContext();

  return (
    <CrudContainer>
      <div>
        <Button margin="2rem 0" onClick={abrirModal}>
          Adicionar Cargo
        </Button>
      </div>

      <div>
        <h3>Lista de cargos</h3>
        <TableContainer>
          <thead>
            <tr>
              <th>Cargo</th>
              <th>Descrição</th>
              <th>Salário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map((cargo, index) => (
              <tr key={index}>
                <td>{cargo.cargo}</td>
                <td>{cargo.descricao}</td>
                <td>
                  {cargo.salario.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td>
                  <span>
                    <button onClick={() => editarCargo(index, cargo)}>
                      <FileEdit strokeWidth={1} size={20} />
                    </button>
                    <button onClick={() => excluirCargo(index)}>
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
              {editingIndex !== null ? 'Editar Cargo' : 'Adicionar Novo Cargo'}
            </h3>
            <input
              type="text"
              id="cargo"
              required
              placeholder="Cargo"
              value={novoCargo.cargo}
              onChange={(e) =>
                setNovoCargo({ ...novoCargo, cargo: e.target.value })
              }
            />
            <input
              type="text"
              id="descCargo"
              required
              placeholder="Descrição"
              value={novoCargo.descricao}
              onChange={(e) =>
                setNovoCargo({ ...novoCargo, descricao: e.target.value })
              }
            />

            <input
              type="number"
              id="cargoSalario"
              min={0}
              required
              placeholder="Salário"
              value={novoCargo.salario || ''}
              onChange={(e) => {
                const parsedValue = parseFloat(e.target.value);
                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setNovoCargo({
                    ...novoCargo,
                    salario: parsedValue,
                  });
                }
              }}
            />

            {editingIndex === null ? (
              <Button
                bgColor={defaultTheme['green-100']}
                color={defaultTheme['gray-800']}
                onClick={adicionarCargo}
              >
                Adicionar
              </Button>
            ) : (
              <Button
                bgColor={defaultTheme['green-100']}
                color={defaultTheme['gray-800']}
                onClick={confirmarEdicao}
              >
                Confirmar Edição
              </Button>
            )}
            <Button
              bgColor={defaultTheme['red-100']}
              color={defaultTheme['gray-800']}
              onClick={fecharModal}
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </CrudContainer>
  );
}
