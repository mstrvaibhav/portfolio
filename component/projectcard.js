"use client";
import Image from "next/image"
import styled from "styled-components"
import mmtemi from '../public/mmtemi.png'
// import redbusredesign from "../public/redbusredesign.png"
import ProjectData from "@/data/projectInfo";

export default function ProjectHub() {

    // fetching project data
    const project = ProjectData.filter((el) => {
        return el.on;
    });

    return (
        <ProjectContainer>
            {
                project.map((i) => {
                    return (
                        <ProjectList href={i.url} target="blank" key={i.heading}>
                            <Image
                                src={i.image}
                                quality={100}
                                // width={4800}
                                // height={2560}
                                style={{
                                    border: "1px solid #353535",
                                    borderRadius: 18,
                                    boxSizing: "border-box",
                                    maxWidth: "100%",
                                    minWidth: "100%",
                                    height: "auto"
                                }}
                                placeholder="blur"
                                // blurDataURL={i.dataURL}
                                alt={i.heading}
                            />
                            {/* <img
                                src={project.image}
                                style={{
                                    border: "1px solid #353535",
                                    borderRadius: 18,
                                    boxSizing: "border-box",
                                    maxWidth: "100%",
                                    height: "auto"
                                }} /> */}
                            <ProjectInfo>
                                <p className="heading" key={i.heading}>{i.heading}</p>
                                <p className="info" key={i.info}>{i.info}</p>
                                <p className="time" key={i.time}>{i.time}</p>
                            </ProjectInfo>
                        </ProjectList>
                    )
                })
            }
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