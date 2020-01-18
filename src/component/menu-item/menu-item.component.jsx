import React from 'react'
import './menu-item.style.scss'
import {withRouter} from 'react-router-dom'; //(1) //////////
/*
withRouter is a higher order component it is a function that takes
a component as an argument and turns a modified component
*/

/*
(3) now we have access to history, pass "history" as argument
here we will add an argument in <div>"onClick" and pass 'history.push'
to make the item act like a link to another page
Now we want it to work dynamiaclly with all other pages => 
SOooo we will add link in the sections lead to new page for each on
*/

// (6) next, add "linkUrl" as argument
const MenuItem = ({title, imageUrl, size, history, linkUrl}) => ( 
    <div 
    className={`${size} menu-item`} 
    onClick={()=> history.push(`${linkUrl}`)}>
        <div className="background-image"
        style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem) //(2)//////////