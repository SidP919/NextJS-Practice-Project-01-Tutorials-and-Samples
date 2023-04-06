import Footer from '../home/Footer';
import Header from '../home/Header';
import {Roboto_Mono} from 'next/font/google'

const robotoMono = Roboto_Mono({
  weight:['200','400', '700'],
  style:['italic'],
  display:'swap',
  subsets: ['latin']
})

const Layout = ({children}) => {
    return(
        <>
        <Header/>
        <main style={{paddingTop: '50px'}} className={robotoMono.className}>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout;