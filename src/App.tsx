import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Home } from './routes/Home/';
import { Cargos } from './routes/Cargos/Cargos';
import { Funcionarios } from './routes/Funcionarios';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Container } from './styles/appStyled';
import { SetorProvider } from './context/SetorContext';
import { EmployeeProvider } from './context/FuncionarioContext';
import { CargoProvider } from './context/CargoContext';
import { Setores } from './routes/Setores';
import { Header } from './components/Header';
import { SideNav } from './components/Sidenav';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Container>
          <SetorProvider>
            <EmployeeProvider>
              <CargoProvider>
                <Header />
                <SideNav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/setores" element={<Setores />} />
                  <Route path="/cargos" element={<Cargos />} />
                  <Route path="/funcionarios" element={<Funcionarios />} />
                </Routes>
              </CargoProvider>
            </EmployeeProvider>
          </SetorProvider>
        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
