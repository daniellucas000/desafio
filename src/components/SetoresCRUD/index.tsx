import { TableContainer } from '../../styles/tableStyled';
import { FileEdit, Trash } from 'lucide-react';
import { useSetorContext } from '../../context/SetorContext';

import { defaultTheme } from '../../styles/themes/default';

import '../../styles/modal.css';
import { Button } from '../Button';
import { CrudContainer } from '../../styles/appStyled';

export function SetoresCRUD() {
  const {
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
  } = useSetorContext();

  return (
    <CrudContainer>
      <div>
        <Button margin="2rem 0" onClick={abrirModal}>
          Adicionar Setor
        </Button>
      </div>

      <div>
        <h3>Lista de setores</h3>
        <TableContainer>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {setores.map((setor, index) => (
              <tr key={index}>
                <td>{setor.nome}</td>
                <td>{setor.descricao}</td>
                <td>
                  <span>
                    <button onClick={() => editarSetor(index, setor)}>
                      <FileEdit strokeWidth={1} size={20} />
                    </button>
                    <button onClick={() => excluirSetor(index)}>
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
              {editingIndex !== null ? 'Editar Setor' : 'Adicionar Novo Setor'}
            </h3>
            <input
              type="text"
              required
              placeholder="Nome"
              value={novoSetor.nome}
              onChange={(e) =>
                setNovoSetor({ ...novoSetor, nome: e.target.value })
              }
            />
            <input
              type="text"
              required
              placeholder="Descrição"
              value={novoSetor.descricao}
              onChange={(e) =>
                setNovoSetor({ ...novoSetor, descricao: e.target.value })
              }
            />
            {editingIndex === null ? (
              <Button
                bgColor={defaultTheme['green-100']}
                color={defaultTheme['gray-800']}
                onClick={adicionarSetor}
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
