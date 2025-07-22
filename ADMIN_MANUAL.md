# 📖 MANUAL DE ADMINISTRACIÓN - HACK THE FUTURE

## 🎯 INTRODUCCIÓN

Este manual está diseñado para el equipo de Hack The Future que administrará el sitio web. Incluye instrucciones paso a paso para realizar cambios básicos, monitorear el sitio y mantenerlo actualizado.

## 🏠 ESTRUCTURA DEL SITIO

### **Páginas Principales**
1. **Homepage** - Página principal con misión y llamadas a la acción
2. **Programs Hub** - Explorador de programas de capacitación
3. **Get Involved** - Plataforma de participación y voluntariado
4. **Impact Stories** - Casos de éxito y testimonios
5. **About** - Información organizacional y transparencia
6. **Resource Center** - Recursos educativos y materiales
7. **Community Platform** - Red de conexiones y networking
8. **Contact** - Canales de comunicación
9. **Donation Experience** - Portal de donaciones
10. **Events Calendar** - Calendario de eventos

### **Archivos Importantes**
- `index.html` - Página de entrada (redirección automática)
- `pages/` - Carpeta con todas las páginas del sitio
- `css/main.css` - Estilos del sitio
- `public/` - Archivos públicos (imágenes, favicon, etc.)

## 🔧 CAMBIOS BÁSICOS

### **Cambiar Texto en Páginas**

#### **Paso 1: Identificar la Página**
- Abrir el archivo HTML correspondiente en la carpeta `pages/`
- Usar Ctrl+F para buscar el texto que quieres cambiar

#### **Paso 2: Editar el Contenido**
```html
<!-- Ejemplo: Cambiar título en homepage -->
<h1 class="text-4xl md:text-6xl font-inter font-bold text-text-primary mb-6 leading-tight">
    Tu Acción Crea 
    <span class="text-gradient-primary">Cambio Duradero</span>
</h1>
```

#### **Paso 3: Guardar y Verificar**
- Guardar el archivo
- Abrir en navegador para verificar cambios
- Probar en móvil y desktop

### **Cambiar Imágenes**

#### **Paso 1: Preparar la Nueva Imagen**
- Formato recomendado: JPG o PNG
- Tamaño optimizado: máximo 1MB
- Resolución: 1920x1080 para imágenes grandes

#### **Paso 2: Subir la Imagen**
- Colocar en carpeta `public/images/`
- Nombre descriptivo: `nueva-imagen.jpg`

#### **Paso 3: Actualizar el HTML**
```html
<!-- Cambiar src de la imagen -->
<img src="../public/images/nueva-imagen.jpg" alt="Descripción de la imagen" />
```

### **Cambiar Enlaces**

#### **Enlaces Internos**
```html
<!-- Enlaces a otras páginas del sitio -->
<a href="programs_hub_interactive_impact_explorer.html">Programas</a>
```

#### **Enlaces Externos**
```html
<!-- Enlaces a sitios externos -->
<a href="https://ejemplo.com" target="_blank" rel="noopener">Sitio Externo</a>
```

## 📊 MONITOREO DEL SITIO

### **Verificar Performance**

#### **Google PageSpeed Insights**
1. Ir a https://pagespeed.web.dev/
2. Ingresar URL del sitio
3. Revisar puntuación (objetivo: >85)
4. Revisar sugerencias de mejora

#### **Lighthouse Testing**
```bash
# En la terminal del proyecto
npm run test:lighthouse
```

### **Verificar Analytics**

#### **Acceder a Analytics**
1. Abrir herramientas de desarrollador (F12)
2. Ir a pestaña Console
3. Buscar logs de "Performance Metrics" y "User Interaction"

#### **Métricas Importantes**
- Tiempo de carga de página
- Interacciones de usuarios
- Errores reportados
- Conversiones (donaciones, voluntariado)

## 🚨 SOLUCIÓN DE PROBLEMAS

### **Problema: Página no carga**
1. Verificar conexión a internet
2. Revisar URL correcta
3. Limpiar cache del navegador
4. Contactar al equipo técnico

### **Problema: Imágenes no se muestran**
1. Verificar que la imagen existe en la carpeta correcta
2. Revisar la ruta en el HTML
3. Verificar formato de imagen (JPG, PNG)
4. Optimizar tamaño de imagen

### **Problema: Formularios no funcionan**
1. Verificar conexión a internet
2. Revisar que todos los campos requeridos estén completos
3. Verificar que el email sea válido
4. Contactar al equipo técnico si persiste

### **Problema: Sitio lento**
1. Optimizar imágenes (reducir tamaño)
2. Verificar conexión a internet
3. Limpiar cache del navegador
4. Contactar al equipo técnico

## 📝 ACTUALIZACIONES REGULARES

### **Contenido Semanal**
- [ ] Revisar testimonios y casos de éxito
- [ ] Actualizar eventos del calendario
- [ ] Verificar enlaces externos
- [ ] Revisar formularios de contacto

### **Contenido Mensual**
- [ ] Actualizar estadísticas de impacto
- [ ] Revisar y actualizar recursos educativos
- [ ] Verificar información de contacto
- [ ] Revisar políticas de privacidad

### **Contenido Trimestral**
- [ ] Auditoría completa de contenido
- [ ] Actualizar información organizacional
- [ ] Revisar y actualizar programas
- [ ] Evaluar feedback de usuarios

## 🔒 SEGURIDAD

### **Buenas Prácticas**
- No compartir credenciales de acceso
- Usar contraseñas fuertes
- Hacer backup antes de cambios grandes
- Verificar cambios antes de publicar

### **Mantenimiento de Seguridad**
- [ ] Revisar enlaces externos regularmente
- [ ] Verificar que formularios funcionen correctamente
- [ ] Monitorear reportes de errores
- [ ] Mantener información de contacto actualizada

## 📞 CONTACTO Y SOPORTE

### **Equipo Técnico**
- **Email**: tech@hackthefuture.org
- **Slack**: #hack-the-future-web
- **Documentación**: TECHNICAL_DOCUMENTATION.md

### **Proceso de Solicitud de Cambios**
1. **Solicitud**: Enviar email con descripción detallada
2. **Evaluación**: Equipo técnico evalúa complejidad
3. **Desarrollo**: Implementación de cambios
4. **Testing**: Verificación en ambiente de pruebas
5. **Publicación**: Despliegue a producción
6. **Confirmación**: Verificación final

### **Emergencias**
- **Sitio caído**: Contactar inmediatamente al equipo técnico
- **Errores críticos**: Reportar con capturas de pantalla
- **Problemas de seguridad**: Reportar inmediatamente

## 📚 RECURSOS ADICIONALES

### **Herramientas Útiles**
- **Editor de código**: Visual Studio Code
- **Navegadores**: Chrome, Firefox, Safari
- **Optimización de imágenes**: TinyPNG, Squoosh
- **Testing**: Google PageSpeed Insights

### **Documentación**
- [Guía de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Guía de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Accesibilidad Web](https://www.w3.org/WAI/)
- [SEO Básico](https://developers.google.com/search/docs)

### **Capacitación Recomendada**
- Curso básico de HTML/CSS
- Taller de accesibilidad web
- Seminario de SEO básico
- Workshop de optimización de imágenes

## ✅ CHECKLIST DE MANTENIMIENTO

### **Diario**
- [ ] Verificar que el sitio esté funcionando
- [ ] Revisar emails de contacto
- [ ] Monitorear analytics básicos

### **Semanal**
- [ ] Revisar performance del sitio
- [ ] Actualizar contenido dinámico
- [ ] Verificar formularios
- [ ] Revisar enlaces externos

### **Mensual**
- [ ] Auditoría de contenido
- [ ] Revisar analytics detallados
- [ ] Actualizar recursos
- [ ] Backup de cambios importantes

### **Trimestral**
- [ ] Revisión completa del sitio
- [ ] Actualización de información organizacional
- [ ] Evaluación de feedback
- [ ] Planificación de mejoras

---

**Última actualización**: Enero 2024
**Versión**: 1.0.0
**Para uso interno del equipo de Hack The Future** 