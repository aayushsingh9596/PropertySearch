import './globals.css';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext';


interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: "Property Search",
  keywords: "rental,property,real State",
  description: "Search any property"
}

const layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default layout