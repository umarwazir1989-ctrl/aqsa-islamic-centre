import { access } from 'node:fs/promises';
const files=['index.html','education.html','welfare.html','about.html','donate.html','contact.html','assets/style.css','assets/premium.css','assets/app.js','assets/academy.jpg','assets/section-scenes.webp','assets/photos/quran-class.webp','assets/photos/students-blue.webp','assets/photos/students-group.webp','assets/photos/management.webp','assets/photos/centre-exterior.webp','assets/photos/masjid-exterior.webp','assets/photos/community-group.webp','assets/photos/welfare-poster.webp','assets/photos/admission-poster.webp'];
for(const name of files)await access(new URL('./dist/'+name,import.meta.url));
console.log('All pages and assets are ready.');
