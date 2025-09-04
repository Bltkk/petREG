function $(id) {
    return document.getElementById(id);
}

// Version tracking system - Updated to use PetRegVersion utility
const VersionManager = {
    // Get total number of versions
    getVersionCount: function() {
        if (typeof PetRegVersion !== 'undefined') {
            return PetRegVersion.getVersionCount();
        }
        return 2; // fallback
    },
    
    // Get current version
    getCurrentVersion: function() {
        if (typeof PetRegVersion !== 'undefined') {
            return PetRegVersion.getVersionString();
        }
        return "1.0"; // fallback
    },
    
    // Update version info on page load
    updateVersionInfo: function() {
        const versionCountElement = $('versionCount');
        const currentVersionElement = $('currentVersion');
        const lastUpdateElement = $('lastUpdate');
        
        if (versionCountElement) {
            versionCountElement.textContent = this.getVersionCount();
        }
        if (currentVersionElement) {
            currentVersionElement.textContent = this.getCurrentVersion();
        }
        if (lastUpdateElement) {
            if (typeof PetRegVersion !== 'undefined') {
                const info = PetRegVersion.getVersionInfo();
                lastUpdateElement.textContent = info.releaseDate;
            } else {
                lastUpdateElement.textContent = new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        }
    },
    
    // Add version info to footer
    addVersionToFooter: function() {
        const footer = document.querySelector('.footer, .pie');
        if (footer) {
            const versionSpan = document.createElement('span');
            versionSpan.style.marginLeft = '10px';
            versionSpan.style.fontSize = '0.9em';
            versionSpan.style.opacity = '0.8';
            versionSpan.textContent = `v${this.getCurrentVersion()}`;
            footer.appendChild(versionSpan);
        }
    },
    
    // Main function to display version count (answers the problem statement)
    displayVersionCount: function() {
        const count = this.getVersionCount();
        console.log(`Número de versiones: ${count}`);
        
        // Also display it prominently on the page if there's a suitable element
        const versionDisplay = document.createElement('div');
        versionDisplay.id = 'versionCountDisplay';
        versionDisplay.style.position = 'fixed';
        versionDisplay.style.top = '10px';
        versionDisplay.style.right = '10px';
        versionDisplay.style.background = 'var(--primary)';
        versionDisplay.style.color = 'white';
        versionDisplay.style.padding = '8px 12px';
        versionDisplay.style.borderRadius = '6px';
        versionDisplay.style.fontSize = '14px';
        versionDisplay.style.fontWeight = 'bold';
        versionDisplay.style.zIndex = '1000';
        versionDisplay.textContent = `Versiones: ${count}`;
        
        // Only add if not already present
        if (!document.getElementById('versionCountDisplay')) {
            document.body.appendChild(versionDisplay);
            
            // Remove after 5 seconds
            setTimeout(() => {
                const element = document.getElementById('versionCountDisplay');
                if (element) {
                    element.remove();
                }
            }, 5000);
        }
        
        return count;
    }
};

// Initialize version info when page loads
document.addEventListener('DOMContentLoaded', function() {
    VersionManager.updateVersionInfo();
    VersionManager.addVersionToFooter();
    
    // Display version count prominently (answers the problem statement)
    VersionManager.displayVersionCount();
    
    // Also make it accessible via console for debugging
    if (typeof PetRegVersion !== 'undefined') {
        console.log('PetREG Version Info:', PetRegVersion.getVersionInfo());
        console.log('Ejecuta VersionManager.displayVersionCount() para mostrar el número de versiones');
    }
});

// Existing functionality
if ($('showRegister')) {
    $('showRegister').onclick = function() {
        $('loginForm').style.display = 'none';
        $('registerForm').style.display = 'block';
    };
}

if ($('cancelRegister')) {
    $('cancelRegister').onclick = function() {
        $('registerForm').style.display = 'none';
        $('loginForm').style.display = 'block';
    };
}

if ($('loginForm')) {
    $('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        $('loginForm').style.display = 'none';
        if ($('navLinks')) {
            $('navLinks').style.display = 'block';
        }
    });
}

if ($('registerForm')) {
    $('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        $('registerForm').style.display = 'none';
        if ($('navLinks')) {
            $('navLinks').style.display = 'block';
        }
    });
}