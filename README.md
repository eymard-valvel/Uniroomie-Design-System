# Uniroomie Design System

Biblioteca reutilizable de componentes React + TypeScript. La página de demostración permite revisar los componentes durante el desarrollo; la biblioteca se compila desde `src/index.ts` y se distribuye mediante npm.

## Componentes exportados

- `Button`: variantes `primary` y `secondary`, tamaños, `disabled` y `loading`.
- `Checkbox`: selección controlada/no controlada y deshabilitado nativo.
- `RadioButton`: selección de opción mediante `name`, `value` y `checked`.
- `Input`: tamaños, etiqueta, helper text, error y success.
- `Toggle`: switch controlado/no controlado.
- `Dropdown`: lista de opciones, placeholder y error.
- `Navbar`: variantes `light` y `dark`, navegación y acción.
- `Card`: variantes `default`, `outlined` y `elevated`.

## Requisitos

- Node.js 18 o superior.
- npm.

## Desarrollo de la demostración

```bash
npm install
npm run dev
```

## Relación entre Figma y React

Consulta [`docs/RELACION-FIGMA-REACT.md`](docs/RELACION-FIGMA-REACT.md). La captura inicial permitió identificar los ocho componentes, pero no ofrece valores suficientes para certificar medidas y colores exactos. Inspecciona cada variante en Figma Dev Mode y actualiza los tokens y CSS correspondientes.

### Dónde ajustar

- `src/styles/tokens.css`: tokens CSS compartidos.
- `src/tokens/index.ts`: tokens exportados desde TypeScript. Mantén sincronizados ambos archivos.
- `src/components/<Componente>/<Componente>.tsx`: estructura y comportamiento.
- `src/components/<Componente>/<Componente>.css`: estilos.
- `src/components/<Componente>/<Componente>.types.ts`: props y tipos.
- `src/index.ts`: exportaciones públicas de la biblioteca.

Los recursos gráficos independientes (logotipos e íconos) sí pueden exportarse de Figma como SVG. Los componentes interactivos no deben distribuirse como imágenes SVG: se implementan en React y CSS.

## Compilar para distribución

```bash
npm run build
npm pack --dry-run
```

Vite genera JavaScript ESM/CommonJS y el CSS distribuible en `dist/`. TypeScript genera las declaraciones `.d.ts`. React se declara como `peerDependency` y se deja como dependencia externa del bundle.

## Publicar en npm

Consulta [`docs/PUBLICACION-NPM.md`](docs/PUBLICACION-NPM.md) para el proceso completo. Resumen:

```bash
npm login
npm whoami
npm publish
```

Si usas un nombre con scope y deseas que sea público, publica con `npm publish --access public`. Cambia el nombre del paquete si `uniroomie-design-system` no está disponible.

## Instalar y consumir

Después de publicar:

```bash
npm install uniroomie-design-system
```

Uso desde otro proyecto React:

```tsx
import { Button, Input, Card, Checkbox } from "uniroomie-design-system";
import "uniroomie-design-system/style.css";

function App() {
  return (
    <Card title="Uniroomie">
      <Input label="Correo" placeholder="correo@ejemplo.com" />
      <Checkbox label="Acepto los términos" />
      <Button variant="primary">Continuar</Button>
    </Card>
  );
}

export default App;
```

El consumidor no copia archivos fuente: instala y utiliza el paquete compilado. El proyecto independiente de ejemplo se entrega por separado como `uniroomie-consumer-demo`.

## Alcance visual

Los tokens que vienen en esta versión son aproximaciones iniciales basadas en la captura proporcionada. Antes de presentar la fidelidad visual como terminada, reemplaza esos valores con las medidas y variables verificadas en el archivo Figma original.
