# petREG

Sistema de registro de mascotas con funcionalidad de seguimiento de versiones.

## Funcionalidad de Versiones

Este proyecto ahora incluye un sistema completo de seguimiento de versiones que responde a la pregunta "dame el número de versiones":

### Características principales:

- **Versión actual**: 1.0.0
- **Número total de versiones**: 2
- **Sistema de tracking**: Basado en commits de git y versiones manuales

### Cómo usar el sistema de versiones:

1. **Páginas web**: Visita `informacion.html` para ver información completa de versiones
2. **Demo interactiva**: Abre `demo-versiones.html` para probar las funcionalidades
3. **JavaScript API**: 
   - `VersionManager.displayVersionCount()` - Muestra el número de versiones
   - `PetRegVersion.getVersionCount()` - Obtiene el contador de versiones
   - `PetRegVersion.getVersionInfo()` - Información completa

### Archivos del sistema de versiones:

- `version.js` - Utilidad principal de versiones
- `scripts.js` - Integración con la interfaz
- `informacion.html` - Página de información con datos de versión
- `demo-versiones.html` - Página de demostración interactiva