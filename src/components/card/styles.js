import styled from 'styled-components';


export const Content = styled.div`
    width: 250px;
    display: flex;
    margin:  0 10px 40px 10px;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    cursor: pointer;

    

    a {
        text-decoration: none;
        color: inherit;
        text-align: center;
        
        .thumbnail {
            display: flex;
            align-items: stretch;
            flex: 0 0 auto;
            
            img {
                width: 100%;
                margin-bottom: 10px;

                &:hover {
                    box-shadow: 0px 10px 10px 0px #040404;
                }
            }
        }

        .title {
            font-weight: 800;
            margin-bottom: 3px;
            font-size: 18px;
            text-align: center;
        }

        .average {
            font-weight: 900;
            font-size: 24px;
            color: orange;
        }

        .release {
            font-size: 12px;
            font-weight: 400;
        }
    }

`;
