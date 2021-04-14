import Header from '../components/Header'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title && title + ' |'} BloggyPress</title>
            </Head>
            <div className="wrapper">
                <Header />
                <ToastContainer/>
                {children}
            </div>
        </>
    )
}

export default Layout;