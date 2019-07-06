import React from 'react'
import AppMenu from '../common/AppMenu';

export default function (props) {
    return (
        <div>
            <AppMenu history={props.history} />
            {props.children}
        </div>
    )
}
