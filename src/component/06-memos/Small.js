import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Me renderizo :(');
    return (
        <>
        <small>{value}</small>            
        </>
    )
})
