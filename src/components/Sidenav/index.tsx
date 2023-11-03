import { Link } from 'react-router-dom';
import { SideNavContainer } from './styled';
import { Building, Home, Luggage, Users } from 'lucide-react';
import { useSetorContext } from '../../context/SetorContext';

export function SideNav() {
  const { isMenuVisible } = useSetorContext();

  return (
    <SideNavContainer $isVisible={isMenuVisible}>
      <ul>
        <li>
          <Link to={'/'}>
            <Home strokeWidth={1} size={20} />
            Início
          </Link>
        </li>
        <li>
          <Link to={'/setores'}>
            <Building strokeWidth={1} size={20} />
            Setores
          </Link>
        </li>
        <li>
          <Link to={'/cargos'}>
            <Luggage strokeWidth={1} size={20} />
            Cargos
          </Link>
        </li>
        <li>
          <Link to={'/funcionarios'}>
            <Users strokeWidth={1} size={20} />
            Funcionários
          </Link>
        </li>
      </ul>
    </SideNavContainer>
  );
}
