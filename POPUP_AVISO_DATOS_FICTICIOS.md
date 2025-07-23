# Popup de Aviso sobre Datos Ficticios

## Descripción

Se ha implementado un popup fijo que aparece en todas las páginas del sitio web para informar a los usuarios que los datos mostrados son ficticios y están destinados para demostración e interacción con stakeholders.

## Características

### Diseño y Posicionamiento
- **Posición**: Esquina inferior izquierda (bottom-left)
- **Estilo**: Similar al popup de cookies, con diseño moderno y responsive
- **Animación**: Aparece con animación slide-up y desaparece con slide-down
- **Responsive**: Se adapta a dispositivos móviles

### Funcionalidad
- **Persistencia**: Se guarda en localStorage, por lo que solo aparece una vez por usuario
- **Accesibilidad**: Incluye aria-labels y navegación por teclado (Escape)
- **Cierre**: Botón "Entendido" o tecla Escape
- **Automático**: Se agrega automáticamente a todas las páginas HTML

### Mensaje
```
¡Aviso Importante! Este sitio web contiene datos ficticios para demostración y interacción con stakeholders. Los datos definitivos se implementarán próximamente.
```

## Archivos Implementados

### 1. CSS (`css/main.css`)
```css
/* Estilos para el popup de aviso sobre datos ficticios */
.data-notice-wrapper {
  animation: slideInUp 0.5s ease-out;
  transition: all 0.3s ease;
}

.data-notice-wrapper.hide-notice {
  animation: slideOutDown 0.5s ease-in;
  opacity: 0;
  transform: translateY(100%);
}

/* Animaciones y estilos responsive incluidos */
```

### 2. JavaScript (`public/auto-data-notice.js`)
- Script que se ejecuta automáticamente en todas las páginas
- Crea el HTML del popup dinámicamente
- Maneja la lógica de localStorage
- Incluye manejo de eventos y accesibilidad

### 3. Script de Automatización (`add-popup-to-all-pages.js`)
- Agrega automáticamente el script a todas las páginas HTML
- Excluye archivos BACKUP
- Verifica duplicados

## Implementación

### En cada página HTML
```html
<!-- Script para el popup de aviso sobre datos ficticios -->
<script src="/public/auto-data-notice.js"></script>
```

### Para páginas en subdirectorios
```html
<!-- Script para el popup de aviso sobre datos ficticios -->
<script src="../public/auto-data-notice.js"></script>
```

## Comportamiento

1. **Primera visita**: El popup aparece después de 1 segundo
2. **Aceptación**: Al hacer clic en "Entendido" se guarda en localStorage
3. **Visitas posteriores**: El popup no aparece si ya fue aceptado
4. **Navegación**: Funciona en todas las páginas del sitio

## Personalización

### Cambiar el mensaje
Editar en `public/auto-data-notice.js`:
```javascript
const popupHTML = `
    <aside class="data-notice-wrapper fixed bottom-4 left-4 z-50 max-w-md" id="data-notice-popup">
        <div class="data-notice-container bg-surface border border-border rounded-lg shadow-card p-4">
            <div class="data-notice-content">
                <div class="message-block mb-4">
                    <p class="text-text-primary text-sm leading-relaxed">
                        <strong>¡Aviso Importante!</strong> [TU MENSAJE AQUÍ]
                    </p>
                </div>
                <!-- ... resto del código ... -->
            </div>
        </div>
    </aside>
`;
```

### Cambiar estilos
Editar en `css/main.css` las clases `.data-notice-wrapper`, `.data-notice-container`, etc.

## Eliminación

Cuando los datos definitivos estén listos:

1. **Eliminar el script** de todas las páginas HTML
2. **Eliminar los estilos CSS** relacionados con el popup
3. **Eliminar el archivo** `public/auto-data-notice.js`

### Comando para eliminar automáticamente
```bash
# Crear script de eliminación
echo 'const fs = require("fs");
const path = require("path");

function removePopupScript(filePath) {
    let content = fs.readFileSync(filePath, "utf8");
    content = content.replace(/<!-- Script para el popup de aviso sobre datos ficticios -->\s*<script src="[^"]*auto-data-notice\.js"><\/script>\s*/g, "");
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ ${filePath} - Script del popup eliminado`);
}

// Procesar todos los archivos HTML
function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (item.endsWith(".html") && !item.includes("BACKUP")) {
            removePopupScript(fullPath);
        }
    }
}

processDirectory(".");
console.log("✅ Proceso de eliminación completado");' > remove-popup.js

# Ejecutar
node remove-popup.js
```

## Notas Técnicas

- **Compatibilidad**: Funciona en todos los navegadores modernos
- **Performance**: Script ligero, no afecta el rendimiento
- **SEO**: No afecta el SEO del sitio
- **Accesibilidad**: Cumple con estándares WCAG
- **Responsive**: Se adapta a todos los tamaños de pantalla

## Estado Actual

✅ **Implementado en todas las páginas**
✅ **Funcionalidad completa**
✅ **Estilos responsive**
✅ **Accesibilidad incluida**
✅ **Persistencia con localStorage**
✅ **Animaciones suaves**

El popup está listo para uso en producción y aparecerá automáticamente en todas las páginas del sitio web. 