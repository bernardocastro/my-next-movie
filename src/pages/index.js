import Link from 'next/link';
import styled from 'styled-components';

const LoginBg = styled.img`
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    @media (max-width: 768px) {
        width: 320%
    }
`
const LoginTitle = styled.p`
    color: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    text-align: center;
    font-weight: 500;
    @media (max-width: 768px) {
       font-size: 35px;
       width: 290px;
      }
`
const LoginSubtitle = styled.p`
    color: #FFF;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);
    font-size: 26px;
    @media (max-width: 768px) {
        width: 315px;
        top: 61%;
        left: 53%;
        font-size: 20px;
        margin-top: 15px;
       }
`
const LoginButton = styled.button`
    width: 200px;
    height: 60px;
    background: #E50914;
    color: #FFF;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    border: 1px solid #E50914;
    border-radius: 3px;
    font-size: 20px;
    opacity: .8;
    &:hover {
        cursor: pointer;
        opacity: 1;
    };
    @media (max-width: 768px) {
        margin-top: 20px;
       }
`

const Home = () => {
    return (
        <div style={{ height: '100%', overflow: 'hidden' }}>
            <LoginBg
                src={'https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/9970821c-56b1-4ead-8063-3533c09e0f17/BR-en-20230109-popsignuptwoweeks-perspective_alpha_website_medium.jpg'}
                alt="Login Background"
            />
            <div>
                <LoginTitle>
                    Unlimited Movies, TV shows, and more.
                </LoginTitle>
                <LoginSubtitle>
                    Watch anywhere. Cancel anytime.
                </LoginSubtitle>
                <Link href="/browse">
                    <LoginButton>
                        Get started
                    </LoginButton>
                </Link>
            </div>
        </div>
    )

}

export default Home