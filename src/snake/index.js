import React from 'react';
import styled from 'styled-components';

const SnakeItem = styled.div`
	position: absolute;
	height: 2rem;
	width: 2rem;
	background: mediumseagreen;
	/* border-radius: 10%; */
	/* border: 1px solid burlywood; */
	z-index: 2;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
`;

function Snake(props) {
	return props.snakeDots.map((snakeDot, i) => (
		<SnakeItem key={i} top={`${snakeDot[0]}rem`} left={`${snakeDot[1]}rem`} />
	));
}

export default Snake;
