import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkEstilizado = styled.div`


.link {
    display: flex;
    align-items: center;
    color: var(--preto);
    text-decoration: none;
    font-size: 18px;
    padding: 0.2em 0.5em;
    border-bottom: 2px solid var(--branco);
    transition: 0.3s all;
    

    &:hover {
    transition: 0.3s all;
    border-bottom: 2px solid var(--verde-principal);
}
}

.normal  {
    text-decoration: none;
    color: currentColor;
}

`


export default function MenuLink({ to, children, estilizado }) {
    return (
        <LinkEstilizado>
            <Link className={estilizado ? 'link' : 'normal'} to={to}>{children}</Link>
        </LinkEstilizado>

    )
}
