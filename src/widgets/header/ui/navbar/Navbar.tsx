import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "rsuite";

// Компонент с типизированными пропсами
export const Navbar: React.FC= () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.slice(1));


  const handleSelect = (eventKey: string) => {
    setActive(eventKey)
    navigate(`/${eventKey}`); // Изменение URL
  };

  return (
    <Nav  activeKey={active} onSelect={handleSelect}>
      <Nav.Item eventKey="">Главная</Nav.Item>
      <Nav.Item eventKey="report">Отчеты</Nav.Item>
      <Nav.Item eventKey="report-list">Список отчетов</Nav.Item>
    </Nav>
  );
};