import styled from "styled-components";

export const Container = styled.main`
    max-width: 310px;
    padding: 1rem;
    padding-bottom: 3rem;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

export const ImgContainer = styled.div`
    display: flex;
    border-radius: 10px;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
`

export const ContentContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #1f3251;
`

export const Description = styled.p`
    color: #68778d;
`