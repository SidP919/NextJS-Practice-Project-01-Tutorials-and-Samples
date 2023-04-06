import Footer from '../home/Footer';
import Header from '../home/Header';

const Layout = ({children}) => {
    return(
        <>
        <Header/>
        <main style={{paddingTop: '50px'}}>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout;