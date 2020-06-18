import styled from 'styled-components';
import homeImg from '../../images/homeImg.jpg'
import {setFlex} from '../../styles.js'

export default styled.div`
    grid-row: 1;
    background: url(${props => props.img || homeImg}) center no-repeat;
    ${setFlex()};
`;