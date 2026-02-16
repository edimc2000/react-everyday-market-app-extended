import type { JSX } from "react"
import './header.css'
import { useNavigate } from "react-router-dom"
import { Icons } from '../../../helpers/display-helper'

interface HeaderProps {
    title: string
    cartCount?: number
}

const Header = ({ title, cartCount = 0 }: HeaderProps): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className="header-container">
            <header className="app-header app-bg">
                <div className="maxHeight flex flex-align-items--center">
                    <div className="logo-menu-container">
                        <div className="shop-logo" onClick={() => navigate('/')} data-testid = "header-logo"> {title}</div>
                        <div className="menu-dummy">
                            <img src="/assets/images/cad.png" alt="" className="menu-icon" />
                            EN (CAD) | Find a Store | Sign in | Create an Account |

                            <span className="heart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d={Icons.wishList} />
                                </svg>
                            </span>
                            
                            <span className="shoppingbag" onClick={() => navigate('/cart')} data-testid = "cart-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d={Icons.shoppingCart} />
                                </svg>
                                                                {cartCount > 0 && (
                                                                    <span className="cart-counter" data-testid="cart-counter" id="cart-counter">
                                                                        <span className="cart-counter-value" key={cartCount}>{cartCount}</span>
                                                                    </span>
                                                                )}
                            </span>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header