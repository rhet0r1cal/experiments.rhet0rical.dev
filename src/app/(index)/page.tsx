// Imports
import type {Metadata} from 'next';
import Button from '../components/button';

// Manifest
export const metadata: Metadata = {
  title: 'Home ~ Rhexperiments'
}

// Init
function Index(){return(

  <>

    <div id = 'introDiv' className='border'>
      <p className='special-text' style={{marginTop: 10}}>Rhexperiments 🛠️</p>
      <p id = 'introLabel' style={{width: 450, marginTop: -20}}>
        Looking for something to prove my <i>amazing</i> design skills? You'll probably find it here.
      </p>

      <Button text='Bank Login Page' url='bank-login'></Button>

      <p id = 'footer'>
        None of these examples are actually functioning. These only exist to show CSS skills and technology. More will be coming soon.
      </p>
    </div>

    <p id = 'attributeLabel'>{'<'}- This tab will redirect you to my website!</p>
    <script src = 'https://cdn.rhet0rical.dev/scripts/attribute.js'></script>
  </>

)}

// Export
export default Index;