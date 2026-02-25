const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const viewsDir = path.join(__dirname, 'views');
const outDir = path.join(__dirname, 'static-build');
const publicDir = path.join(__dirname, 'public');

// Create output directory
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

// Compile Layout
const layoutTemplate = fs.readFileSync(path.join(viewsDir, 'layout.hbs'), 'utf-8');
const compiledLayout = hbs.handlebars.compile(layoutTemplate);

// Define pages and their active states
const pages = [
    { name: 'index', template: 'home.hbs', data: { title: 'Mary Motors – Drive Your Dream', activeHome: true } },
    { name: 'about', template: 'about.hbs', data: { title: 'About Us – Mary Motors', activeAbout: true } },
    { name: 'all-cars', template: 'all-cars.hbs', data: { title: 'All Cars – Mary Motors', activeVehicles: true } },
    { name: 'gallery', template: 'gallery.hbs', data: { title: 'Showroom Gallery – Mary Motors', activeGallery: true } },
    { name: 'blogs', template: 'blogs.hbs', data: { title: 'Automotive Blog – Mary Motors', activeBlogs: true } },
    { name: 'contact-us', template: 'contact-us.hbs', data: { title: 'Contact Us – Mary Motors', activeContact: true } }
];

// Generate each HTML file
pages.forEach(page => {
    console.log(`Compiling ${page.name}.html...`);

    // Read and compile inner view
    const viewTemplate = fs.readFileSync(path.join(viewsDir, page.template), 'utf-8');
    const compiledView = hbs.handlebars.compile(viewTemplate);
    const bodyHtml = compiledView(page.data);

    // Inject inner view into layout
    let finalHtml = compiledLayout({ ...page.data, body: bodyHtml });

    // Fix absolute paths for static hosting
    finalHtml = finalHtml.replace(/href="\//g, 'href="./');
    finalHtml = finalHtml.replace(/src="\//g, 'src="./');

    // Append .html to relative page links
    finalHtml = finalHtml.replace(/href="\.\/about"/g, 'href="./about.html"');
    finalHtml = finalHtml.replace(/href="\.\/all-cars"/g, 'href="./all-cars.html"');
    finalHtml = finalHtml.replace(/href="\.\/gallery"/g, 'href="./gallery.html"');
    finalHtml = finalHtml.replace(/href="\.\/blogs"/g, 'href="./blogs.html"');
    finalHtml = finalHtml.replace(/href="\.\/contact-us"/g, 'href="./contact-us.html"');
    finalHtml = finalHtml.replace(/href="\.\/"/g, 'href="./index.html"');

    // Write to file
    fs.writeFileSync(path.join(outDir, `${page.name}.html`), finalHtml);
});

// Copy assets from public
console.log('Copying static assets...');
fs.copyFileSync(path.join(publicDir, 'style.css'), path.join(outDir, 'style.css'));
fs.copyFileSync(path.join(publicDir, 'script.js'), path.join(outDir, 'script.js'));

console.log('Static site successfully generated in static-build/ directory!');
