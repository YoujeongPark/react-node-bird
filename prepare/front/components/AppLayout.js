//  AppLayout -> 메뉴 
// Components => components 

import React from 'react';
import PropTypes from "prop-types";
import Link from 'next/link';

const AppLayout = ({children}) => {
    return(
        <div>
            <div>
                <div> 공통메뉴 AppLayout </div>
                <Link href = "/"><a> Node Bird </a></Link>
                <Link href = "/profile"><a> 프로필 </a></Link>
                <Link href = "/signup "><a> 회원가입 </a></Link>
            </div>
            {children}
        </div>
    )
} ;


AppLayout.proptypes = { 
    children : PropTypes.node.isRequired,
}; 


export default AppLayout; 