import React, {Component} from 'react'
import L from './Layout.module.css'


class Layout extends Component {
    render() {
        return (
            <div className={L.div}>
                <main className={L.main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout