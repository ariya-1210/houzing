import styled from "styled-components";
import {ReactComponent as setting } from '../../assets/icon/setting.svg'
import {ReactComponent as search} from '../../assets/icon/search.svg'
import {ReactComponent as houses} from '../../assets/icon/inputhome.svg'


const Container=styled.div`
max-width: 1440px;
padding:var(--padding);
margin: 0 auto;
`
const Wrapper=styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`
const Setting=styled(setting)`

`
const Search=styled(search)`

`
const Houses=styled(houses)`

`

const Box=styled.div`
height: 420px;
width: 920px;
padding: 20px;
`
const Content=styled.div`
display: flex;
gap: 25px;
margin-bottom: 30px;
`

export {Container,Wrapper,Setting,Search,Houses,Box,Content}