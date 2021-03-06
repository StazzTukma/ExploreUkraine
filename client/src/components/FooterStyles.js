import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 0px;
background: rgba(0, 0, 0, 0.7);
position: relative;
padding: "20px",
position: "fixed",
left: "0",
bottom: "0",
height: "100px",
width: "100%",


@media (max-width: 1000px) {
	padding: 10px 30px;
	height: 204px;
	margin-top: -204px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 900px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: gray;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 22px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;
