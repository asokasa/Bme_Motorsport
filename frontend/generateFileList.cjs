const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/assets/Aktiv_Tagok');
const jsonFilePath = path.join(__dirname, 'src/Tagok_List.json');

// Step 1: Clear the file by writing an empty array
fs.writeFileSync(jsonFilePath, '[]'); // Clears the file by overwriting with an empty array

// Step 2: Read the directory and prepare the file list
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    const fileList = files.map(file => {
        const sections = file.split('_').map((section, index) => {
            // Replace hyphens with spaces in each section
            let cleanedSection = section.replace(/-/g, ' ');

            // Remove ".webp" from the last section (third section) if present
            if (index === 2 && cleanedSection.endsWith('.webp')) {
                cleanedSection = cleanedSection.replace('.webp', '');
            }
            return cleanedSection;
        });

        return {
            originalName: file,
            sections,
        };
    });

    // Step 3: Write the new file list to fileList.json
    fs.writeFileSync(jsonFilePath, JSON.stringify(fileList, null, 2));
    console.log('File list generated successfully.');
});

