import styled from 'styled-components';
import { colors } from '../assets/styles';
import Card from './components/Card';

const PlusPlanWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
    width: 100%;
    height: auto;
`;

export default function ChangePlan() {
    return (
        <PlusPlanWrapper>
            <Card
                plan="FREE"
                price="0"
                color={colors.pri}
            />
            <Card
                plan="DIAMOND"
                price="5"
                color={colors.sec}
            />
            <Card
                plan="PLUS"
                price="1"
                color={colors.pri}
            />
        </PlusPlanWrapper>
    )
}
