import styled, {css} from 'styled-components';
import {setGridItem} from '../../styles.js'

export default styled.div`
    grid-row: 2;
    background: rgba(255, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    
    
    .getstarted-button {
        color: black;
        ${setGridItem()};
    }
    .github-btn {
        color: black;
        ${setGridItem()};
    }
`;