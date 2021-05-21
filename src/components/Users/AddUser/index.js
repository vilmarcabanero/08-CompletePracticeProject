import React from 'react'
import * as S from './index.style'
import StylesProvider from "@material-ui/styles/StylesProvider";

const Index = () => {
	const addUserHandler = e => {
		e.preventDefault()
	}

	return (
		<StylesProvider injectFirst>
			<S.Container>
				<S.Form onSubmit={addUserHandler}>
					<S.Input label='Username' />
					<S.Input type='number' label='Age (Years)' />
					<S.Button variant="contained" color="primary" type='submit'>Add User</S.Button>
				</S.Form>
			</S.Container>
		</StylesProvider>
	)
}

export default Index
