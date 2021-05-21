import React from 'react'
import styled from 'styled-components'

const Card = ({ children }) => {
	return <SCard>{children}</SCard>
}

const SCard = styled.div`
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
`

export default Card
