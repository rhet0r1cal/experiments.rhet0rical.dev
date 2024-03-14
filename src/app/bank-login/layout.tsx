// Imports
import '../../../public/styles/login.css';

// Init
function Template({children}: Readonly<{children: React.ReactNode}>){return(

  <html lang = 'en' className='flexbox-center'>
    <head>
      <link rel = 'icon' href = '/images/bank-login/icon.svg'></link>
    </head>
    <body>{children}</body>
  </html>

)}

// Export
export default Template;