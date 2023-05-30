import styled from 'styled-components';

export let Container = styled.div`
  max-width: 1280px;
  min-width: 360px;
  margin: 0 auto;
  padding: 24px 70px 35px 70px;
  @media screen and (max-width: 760px) {
    padding: 10px 10px 20px 10px;
  }
`
export let HwTitle = styled(Container)`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 22px;
  color: #000000;
  //padding: 20px 70px 0;
  padding: 20px 0px 20px 70px;
  @media screen and (max-width: 760px) {
    padding: 10px 10px 0;
  }
`