import styled from 'styled-components/macro';
import media from './media';

const Main = styled.main`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  padding: 80px;
  ${media.desktop`
    padding: 60px 50px;
  `};
  ${media.tablet`
    padding: 50px 40px;
  `};
  ${media.phablet`
    padding: 30px 25px;
  `};
  h2 {
    ${media.tablet`
      text-align: center;
    `};
  }
`;

export default Main;