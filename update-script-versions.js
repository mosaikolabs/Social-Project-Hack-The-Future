const fs = require('fs');
const path = require('path');

// Función para actualizar las versiones de los scripts
function updateScriptVersions(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Actualizar el script del popup
        content = content.replace(
            /src="[^"]*auto-data-notice\.js"/g,
            'src="$&?v=1.0"'
        );
        
        // Escribir el archivo actualizado
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ ${filePath} - Versión del script actualizada`);
    } catch (error) {
        console.error(`❌ Error procesando ${filePath}:`, error.message);
    }
}

// Función para procesar recursivamente un directorio
function processDirectory(dirPath) {
    try {
        const items = fs.readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Procesar subdirectorios recursivamente
                processDirectory(fullPath);
            } else if (item.endsWith('.html') && !item.includes('BACKUP')) {
                // Procesar archivos HTML (excluyendo archivos de respaldo)
                updateScriptVersions(fullPath);
            }
        }
    } catch (error) {
        console.error(`❌ Error procesando directorio ${dirPath}:`, error.message);
    }
}

// Función principal
function main() {
    console.log('🚀 Actualizando versiones de scripts en todas las páginas...\n');
    
    // Procesar el directorio raíz
    processDirectory('.');
    
    console.log('\n✅ Proceso completado!');
    console.log('\n📝 Resumen:');
    console.log('- Se agregó el parámetro ?v=1.0 a todos los scripts del popup');
    console.log('- Esto forzará a Vercel a cargar la nueva versión');
    console.log('- Se excluyeron los archivos BACKUP');
}

// Ejecutar el script
if (require.main === module) {
    main();
}

module.exports = { updateScriptVersions, processDirectory }; 