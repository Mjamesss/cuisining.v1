const express = require('express');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// POST route for generating a certificate as a PDF
router.post('/generate-certificate', async (req, res) => {
    const { fullName, courseName, completionDate, certificateId } = req.body;

    try {
        // Validate required fields
        if (!fullName || !courseName || !completionDate || !certificateId) {
            return res.status(400).send('Missing required fields.');
        }

        // Read the HTML template
        const templatePath = path.join(__dirname, '../cert.html');
        if (!fs.existsSync(templatePath)) {
            return res.status(500).send('Certificate template file not found.');
        }
        let template = fs.readFileSync(templatePath, 'utf8');

        // Replace placeholders in the template
        template = template
            .replace('{{Full Name}}', fullName)
            .replace('{{Course/Program Name}}', courseName)
            .replace('{{Completion Date}}', completionDate)
            .replace('{{Certificate ID}}', certificateId);

        // Launch Playwright
        const browser = await chromium.launch();
        const page = await browser.newPage();

        // Set the content
        await page.setContent(template);
        
        // Generate PDF with custom dimensions (277mm × 210mm)
        const pdfBuffer = await page.pdf({
            width: '277mm',
            height: '210mm',
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            },
            printBackground: true,
            preferCSSPageSize: false // We're using our explicit dimensions
        });

        console.log('PDF Generated Successfully');
        console.log('PDF Buffer Size:', pdfBuffer.length);

        await browser.close();

        // Ensure the buffer is not empty
        if (!pdfBuffer || pdfBuffer.length === 0) {
            return res.status(500).send('Failed to generate PDF.');
        }

        // Set response headers for PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=certificate.pdf');
        
        // Send the PDF buffer directly
        res.send(pdfBuffer);

    } catch (error) {
        console.error('Error generating certificate:', error.message);
        console.error(error.stack);
        res.status(500).send('An error occurred while generating the certificate.');
    }
});

module.exports = router;