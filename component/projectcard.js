import Image from "next/image"
import styled from "styled-components"
import mmtemi from '../public/mmtemi.png'
import redbusredesign from "../public/redbusredesign.png"

export default function ProjectHub() {
    return (
        <ProjectContainer>
            <ProjectList href="https://medium.com/@realvaibhava/fly-now-pay-later-revolutionising-flight-booking-experience-through-emi-options-aad04e0375b9" target="blank">
                <Image
                    src={mmtemi}
                    quality={100}
                    style={{
                        border: "1px solid #353535",
                        borderRadius: 18,
                        boxSizing: "border-box",
                        width: "100%",
                        height: "auto"
                    }}
                    // priority={true}
                    placeholder = 'blur'
                    // sizes="100%"
                    alt=""
                />
                <ProjectInfo>
                    <p className="heading">MakeMyTrip</p>
                    <p className="info">Fly Now, Pay Later: Revolutionising flight booking experience through EMI options</p>
                    <p className="time">Mar 2024 - May 2024</p>
                </ProjectInfo>
            </ProjectList>
            <ProjectList href="https://medium.com/@realvaibhava/redesigned-redbus-bus-ticket-booking-flow-on-desktop-4abb4ee9d88b" target="blank">
                <Image
                    src={redbusredesign}
                    quality={100}
                    style={{
                        border: "1px solid #353535",
                        borderRadius: 18,
                        boxSizing: "border-box",
                        width: "100%",
                        height: "auto"
                    }}
                    // priority={true}
                    placeholder = 'blur'
                    // sizes="100%"
                    alt=""
                />
                <ProjectInfo>
                    <p className="heading">redBus</p>
                    <p className="info">Redesigned redBus bus ticket booking flow on desktop</p>
                    <p className="time">Aug 2023 - Oct 2023</p>
                </ProjectInfo>
            </ProjectList>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`

const ProjectList = styled.a`
    display: flex;
    /* padding: 20px; */
    /* width: 640px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    padding-bottom: 8px;

    @media screen and (max-width: 640px) {
        width: 100%;
    }

    &::before{
        content: "";
        border-radius: 24px;
        background: #1E1E1E;
        display: block;
        position: absolute;
        z-index: -1;
        inset: -2px;
        opacity: 0;
        transform: scale(0.98);
        transition: all 0.3s ease;
    }

    &:hover::before{
        transition: all 0.3s ease;
        opacity: 1;
        transform: scale(1.03);
    }
`
const ProjectInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;

        .heading{
        color: #FFFFFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 122.222% */
        letter-spacing: 0.2px;
    }

    .info{
        color: #808080;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        align-self: stretch;
    }

    .time{
        color: #545454;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 114.286% */
    }
`