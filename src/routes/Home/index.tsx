import { Link } from 'react-router-dom';
import { useCargoContext } from '../../context/CargoContext';
import { useFuncionarioContext } from '../../context/FuncionarioContext';
import { useSetorContext } from '../../context/SetorContext';
import { BoxContainer, HomeContainer } from './styled';
import { PlusCircle } from 'lucide-react';
import { Tooltip } from '../../components/Tooltip';

export function Home() {
  const { setores } = useSetorContext();
  const { cargos } = useCargoContext();
  const { funcionarios } = useFuncionarioContext();
  return (
    <HomeContainer>
      <BoxContainer>
        <div>
          <h2>Visão Geral da Empresa</h2>
          <ul>
            <li>Total de funcionários: {funcionarios.length}</li>
            <li>Total de setores: {setores.length}</li>
            <li>Total de cargos: {cargos.length}</li>
          </ul>
        </div>
        <div>
          <h2>Setores da Empresa</h2>
          {setores.length === 0 ? (
            <Link to={'/setores'}>
              <PlusCircle strokeWidth={1} />
              Adicione setores
            </Link>
          ) : (
            <ul>
              {setores.map((setor, i) => (
                <Tooltip key={i} text={setor.descricao}>
                  <li>{setor.nome}</li>
                </Tooltip>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>Funcionários da Empresa</h2>
          {funcionarios.length === 0 ? (
            <Link to={'/funcionarios'}>
              <PlusCircle strokeWidth={1} />
              Adicione funcionários
            </Link>
          ) : (
            <ul>
              {funcionarios.map((funcionario, i) => (
                <Tooltip
                  key={i}
                  text={`Salário: ${funcionario.salario.toLocaleString(
                    'pt-br',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    }
                  )}`}
                >
                  <li>
                    <span>{funcionario.nome}:</span>
                    <p>{funcionario.cargo}</p>
                  </li>
                </Tooltip>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2>Cargos da Empresa</h2>
          {cargos.length === 0 ? (
            <Link to={'/cargos'}>
              <PlusCircle strokeWidth={1} />
              Adicione cargos
            </Link>
          ) : (
            <ul>
              {cargos.map((cargo, i) => (
                <Tooltip key={i} text={cargo.descricao}>
                  <li>{cargo.cargo}</li>
                </Tooltip>
              ))}
            </ul>
          )}
        </div>
      </BoxContainer>
    </HomeContainer>
  );
}
