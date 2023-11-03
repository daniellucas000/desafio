import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer } from './styled';
import { AlignRight, ArrowLeftFromLine } from 'lucide-react';
import { useSetorContext } from '../../context/SetorContext';

export function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const value = pathSegments[1];

  const { isMenuVisible, setIsMenuVisible } = useSetorContext();

  return (
    <HeaderContainer>
      {value.length === 0 ? (
        <h1>Início</h1>
      ) : (
        <div>
          <Link to={'/'}>
            <ArrowLeftFromLine strokeWidth={1} />
          </Link>{' '}
          <h1>{value}</h1>
        </div>
      )}

      <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <AlignRight strokeWidth={1} size={30} />
      </button>
    </HeaderContainer>
  );
}
