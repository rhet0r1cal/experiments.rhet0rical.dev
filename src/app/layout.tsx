// Imports
import '../../public/styles/main.css';

// Init
function RootLayout({children}: Readonly<{children: React.ReactNode}>){return(

  <html lang = 'en' className='flexbox-center'>
    <head>
      <link rel = 'icon' href = '/images/favicon.png'></link>
    </head>
    <body>{children}</body>
  </html>

)}

// Export
export default RootLayout;