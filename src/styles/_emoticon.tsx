import styled from '@emotion/styled'
// import { css } from '@emotion/react';

export const HomeLayout = styled.div`
position: absolute;
top: 50%; right: 50%;
transform: translate(50%, -50%);
padding: 50px 50px;
margin: 2px;
border-radius: 9px;
border: 1px solid rgb(234, 234, 234);
overflow: hidden;
box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
width: 500px;
max-width: 700px;
`

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

export const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`
export const ContainerDetail = styled.div`
  display: flex;
  gap: 12px;

`
  export const Label = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  min-width: 100px;
  `
export const Value = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`