import styled from 'styled-components';
import searchIcon from '../../assets/img/search-icon.png';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #272727;
    color: #fff;
    box-shadow: 0px 20px 18px 0px #3a3a3a;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 30px 0;

    @media screen and (min-width: 992px) {
        padding: 30px 40px;
    }

    .logo {
        width: 150px;
        padding: 0 0 80px 0;

        img {
            width: 100%;
        }
    }

    form {
        width: 100%;
        display: flex;

        @media screen and (min-width: 992px) {
            display: block;
        }

        .search {
            margin: 0px 20px 0px 0;
            width: 100%;
            
            display: flex;
            position: relative;

            @media screen and (min-width: 992px) {
                margin: 0px 0 20px 0;
            }

            input[type="text"] {
                padding: 15px 10px;
                border: none;
                width: 100%;
                border-radius: 20px;
            }

            input[type="submit"] {
                width: 60px;
                height: 100%;
                position: absolute;
                right: 0;
                border-radius: 0px 20px 20px 0px;
                border: none;
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                background: url(${searchIcon});
                background-size: 30px;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;
                background-color: #fff;
            }

        }

        .btn-open {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            justify-content: center;

            @media screen and (min-width: 992px) {
                display: none;
            }

            span {
                background: #fff;
                width: 30px;
                height: 3px;
                margin: 3px;
            }
        }
    }


    .categories {
        width: 100%;
        position: fixed;
        background: #272727;
        top: 0;
        overflow: auto;
        height: 100vh;
        display: none;

        @media screen and (min-width: 992px) {
            display: block;
            height: auto;
            position: relative;
            top: auto;
        }

        &.show {
            display: block;
        }

        .close {
            position: absolute;
            right: 0;
            width: 30px;
            height: 30px;
            border: none;
            background: transparent;

            &::after {
                content: "";
                position: absolute;
                width: 30px;
                height: 3px;
                background: #FFF;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) rotate(-45deg);
                
            }

            &::before {
                content: "";
                position: absolute;
                width: 30px;
                height: 3px;
                background: #FFF;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) rotate(45deg);
            }

            @media screen and (min-width: 992px) {
                display: none;
            }
        }

        ul {
            padding: 0;
            margin: 40px 0 0 0;

            @media screen and (min-width: 992px) {
                margin: 0;
            }
    
            li {
                list-style-type: none;
                padding: 10px 0px;
                font-size: 22px;
                position: relative;
                font-weight: 30;
                cursor: pointer;

                &:before {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    right: 0;
                    top: 50%;
                    bottom: 50%;
                    border-bottom: 2px solid;
                    border-left: 2px solid;
                    transform: translate(-50%,-50%) rotate(-135deg);
                }

                &:hover {
                    color: orange;

                    a {
                        color: orange;
                    }
                }

                a {
                    text-decoration: none;
                    color: #fff;

                }
                
            }
        }
    }
`;