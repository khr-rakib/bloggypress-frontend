import moment from 'moment'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { isAuth, logout } from '../actions/authAction'

Router.onRouteChangeStart     = url => NProgress.start();
Router.onRouteChangeComplete  = url => NProgress.done();
Router.onRouteChangeError     = url => NProgress.done();

const Header = () => {
    const dayName = moment().format('dddd');
    const day = moment().format('Do')
    const monthName = moment().format('MMMM')
    const year = moment().format('YYYY')
    
    return (
        <>
            <header  className="header--section">
                <div  className="header--topbar text-center text-white bg-dark fs--14">
                    <div  className="container">
                        <div  className="header--date">
                            <p>{dayName} <span  className="text-primary">{day} {monthName}</span> {year}</p>
                        </div>
                        <div  className="header--search-bar">
                            <form>
                                <input type="search" name="search" placeholder="Search..."  className="form-control" required />

                                <button type="submit"  className="btn-link"><i  className="fa fa-search"></i></button>
                            </form>
                        </div>                        
                        
                        <div  className="header--social">
                            <span>Follow Me:</span>
                            <ul className="nav">
                                <li><a href="https://github.com/khr-rakib"  target="_blank"><i  className="fa fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/khrakib/" target="_blank"><i  className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/rakib.khr/" target="_blank"><i  className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/rakib_khr" target="_blank"><i  className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <nav  className="header--navbar navbar">
                    <div  className="container">                        
                        <div  className="header--logo">
                            <Link href="/">
                                <a><img src="/img/logo.png" alt="" /></a>
                            </Link>
                        </div>

                        <div  className="navbar-header">
                            <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav">
                                <span  className="sr-only">Toggle Navigation</span>
                                <span  className="icon-bar"></span>
                                <span  className="icon-bar"></span>
                                <span  className="icon-bar"></span>
                            </button>
                        </div>

                        <div id="headerNav"  className="navbar-collapse collapse text-center">
                            <ul  className="header--nav-links nav">
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/categories"><a>Category</a></Link></li>
                                <li><Link href="/contact"><a>Contact</a></Link></li>
                                { !isAuth() && <> 
                                    <li><Link href="/login"><a>Login</a></Link></li>
                                    <li><Link href="/register"><a>Register</a></Link></li>
                                </> }
                                {isAuth() && <>
                                    <li><Link href={isAuth().role === 0 ? '/user' : '/admin' }><a style={{ marginLeft: '20px', color: 'red' }}>Dashboard</a></Link></li>
                                    <li><span style={{ cursor: "pointer", marginLeft: '20px' }} onClick={() => logout(() => Router.push('/login'))}>Logout</span></li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header