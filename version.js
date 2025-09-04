// Version utility for petREG
// This file provides easy access to version information across the application

const PetRegVersion = {
    // Version configuration
    config: {
        major: 1,
        minor: 0,
        patch: 0,
        buildNumber: 2 // Based on git commits
    },
    
    // Get formatted version string
    getVersionString: function() {
        return `${this.config.major}.${this.config.minor}.${this.config.patch}`;
    },
    
    // Get total version count (number of releases/builds)
    getVersionCount: function() {
        return this.config.buildNumber;
    },
    
    // Get detailed version information
    getVersionInfo: function() {
        return {
            version: this.getVersionString(),
            buildNumber: this.config.buildNumber,
            totalVersions: this.getVersionCount(),
            releaseDate: new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long', 
                day: 'numeric'
            })
        };
    },
    
    // Display version count (main function for the requirement)
    displayVersionCount: function() {
        const count = this.getVersionCount();
        console.log(`Número de versiones: ${count}`);
        return count;
    },
    
    // Update version count (for future use)
    incrementVersion: function(type = 'patch') {
        switch(type) {
            case 'major':
                this.config.major++;
                this.config.minor = 0;
                this.config.patch = 0;
                break;
            case 'minor':
                this.config.minor++;
                this.config.patch = 0;
                break;
            case 'patch':
                this.config.patch++;
                break;
        }
        this.config.buildNumber++;
    }
};

// Make it globally accessible
if (typeof window !== 'undefined') {
    window.PetRegVersion = PetRegVersion;
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PetRegVersion;
}