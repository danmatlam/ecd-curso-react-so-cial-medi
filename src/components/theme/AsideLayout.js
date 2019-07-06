import React from 'react'
import styled from 'styled-components'

import { screens, colors } from './uiConstants'
export default function AsideLayout(props) {
    return (
        <_Container>

            <_MainSide>
                {props.children[0]}
            </_MainSide>
            <_SecondarySide>
                {props.children[1]}
            </_SecondarySide>

        </_Container>
    )
}



const _Container = styled.div`    
    display: flex;
    flex-direction:row;
    @media only screen and (max-width: ${screens.small.to}) and (min-width: ${screens.small.from})  {
        flex-direction:column-reverse
   }
`
const _MainSide = styled.section`
    padding: 3vh;
    flex:9;
    @media only screen and (max-width: ${screens.small.to}) and (min-width: ${screens.small.from})  {
        padding:0;
        flex:1;
    }
`

const _SecondarySide = styled.section`
 background-color: ${colors.secondary}
  flex:3;
      padding: 3vh;

  @media only screen and (max-width: ${screens.small.to}) and (min-width: ${screens.small.from})  {
        padding:0;
        flex:1
   }

`



