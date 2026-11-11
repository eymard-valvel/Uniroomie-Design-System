import { useState } from "react";
import {
  Button, Card, Checkbox, Dropdown, Input, Navbar, RadioButton, Toggle
} from "./index";

const menuItems = [
  { id: "inicio", label: "Inicio" },
  { id: "buscar", label: "Buscar" },
  { id: "perfil", label: "Perfil" }
];

export default function App() {
  const [accepted, setAccepted] = useState(true);
  const [choice, setChoice] = useState("opcion-1");
  const [enabled, setEnabled] = useState(true);
  const [course, setCourse] = useState("");
  const [active, setActive] = useState("inicio");
  const [email, setEmail] = useState("ejemplo@correo.com");

  return (
    <main className="ur-demo">
      <header className="ur-demo__header">
        <h1>Uniroomie Design System</h1>
        <p>Demostración inicial de los componentes de la biblioteca.</p>
      </header>

      <div className="ur-demo__section" style={{ marginBottom: 20 }}>
        <h2>Navbar</h2>
        <Navbar brand="Uniroomie" items={menuItems} activeItem={active} onNavigate={setActive} action={<Button size="small">Iniciar sesión</Button>} />
        <Navbar brand="Uniroomie" variant="dark" items={menuItems} activeItem={active} onNavigate={setActive} action={<Button size="small">Iniciar sesión</Button>} />
      </div>

      <div className="ur-demo__grid">
        <Card title="Buttons" description="Variantes primary y secondary">
          <div className="ur-demo__row">
            <Button onClick={() => alert("Botón primary")}>Iniciar sesión</Button>
            <Button variant="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </Card>

        <Card title="Input / text" description="Campo de texto, error y success">
          <div className="ur-demo__section">
            <Input label="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="ejemplo@correo.com" />
            <Input label="Correo electrónico" defaultValue="correo incorrecto" error="Este campo es obligatorio" />
            <Input label="Correo electrónico" defaultValue="ejemplo@correo.com" success />
          </div>
        </Card>

        <Card title="Checkbox" description="Selección independiente">
          <Checkbox checked={accepted} onChange={setAccepted} label="Aceptar términos" />
          <p className="ur-demo__muted">Estado: {accepted ? "Seleccionado" : "No seleccionado"}</p>
        </Card>

        <Card title="Radio Button" description="Selecciona una sola opción">
          <div className="ur-demo__section">
            <RadioButton name="demo-radio" value="opcion-1" checked={choice === "opcion-1"} onChange={setChoice} label="Opción 1" />
            <RadioButton name="demo-radio" value="opcion-2" checked={choice === "opcion-2"} onChange={setChoice} label="Opción 2" />
          </div>
        </Card>

        <Card title="Button toggle" description="Activar o desactivar una opción">
          <Toggle checked={enabled} onChange={setEnabled} label={enabled ? "Activado" : "Desactivado"} />
        </Card>

        <Card title="Dropdown" description="Selecciona una opción">
          <Dropdown
            label="Seleccionar curso"
            value={course}
            onChange={setCourse}
            options={[
              { label: "Diseño", value: "diseno" },
              { label: "Programación", value: "programacion" },
              { label: "Arquitectura", value: "arquitectura" }
            ]}
          />
          <p className="ur-demo__muted">Valor: {course || "Sin selección"}</p>
        </Card>

        <Card title="Card Default" description="Contenedor reutilizable">
          <p>Esta es una tarjeta de ejemplo de Uniroomie.</p>
          <div className="ur-demo__row">
            <Card variant="outlined" title="Interior" description="Otra tarjeta" />
          </div>
        </Card>
      </div>
    </main>
  );
}
