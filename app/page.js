"use client";
import ProjectContainer from "@/component/projectcard";
import ProjectHub from "@/component/projectcard";
import ProjectCard from "@/component/projectcard";
import Image from "next/image";
import styled from "styled-components";
import profile from "../public/profile.png"
import rubberhose from "../public/rubberhose.png"
import house from "../public/house.png"
import kitchen from "../public/kitchen.png"
import gengar from "../public/gengar.png"

export default function Home() {
  return (
    <Main>
      <Media>


        {/* Image of the author */}
        <Bio>
          <ImageContainer>
            <Image
              src={profile}
              width={56}
              height={56}
              style={{ borderRadius: "50%" }}
              alt="Picture of the author"
              quality={100}
              placeholder="blur"
            />
            <div>
              <p className="name">vaibhav aggarwal</p>
              <p className="bio">designer ✦ artist ✦ dreamer</p>
            </div>
          </ImageContainer>
          <SocialMediaContainer>
            <a href="https://www.linkedin.com/in/realvaibhava/" target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_72_61)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.57384 0.416504C1.15235 0.416504 0 1.57459 0 3.00315C0 4.43172 1.15235 5.5898 2.57384 5.5898C3.99533 5.5898 5.14768 4.43172 5.14768 3.00315C5.14768 1.57459 3.99533 0.416504 2.57384 0.416504ZM1.4346 3.00315C1.4346 2.37084 1.94466 1.85825 2.57384 1.85825C3.20302 1.85825 3.71308 2.37084 3.71308 3.00315C3.71308 3.63547 3.20302 4.14807 2.57384 4.14807C1.94466 4.14807 1.4346 3.63547 1.4346 3.00315Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.7131 6.01385C12.0457 6.01385 10.4466 6.67952 9.26757 7.86441C8.08852 9.04934 7.42615 10.6563 7.42615 12.3321V18.8623C7.42615 19.2604 7.7473 19.5832 8.14345 19.5832H11.8565C12.2527 19.5832 12.5738 19.2604 12.5738 18.8623V12.3321C12.5738 12.0284 12.6938 11.7372 12.9075 11.5225C13.1212 11.3078 13.4109 11.1872 13.7131 11.1872C14.0152 11.1872 14.305 11.3078 14.5187 11.5225C14.7323 11.7372 14.8523 12.0284 14.8523 12.3321V18.8623C14.8523 19.2604 15.1735 19.5832 15.5696 19.5832H19.2827C19.6788 19.5832 20 19.2604 20 18.8623V12.3321C20 10.6563 19.3377 9.04934 18.1586 7.86441C16.9796 6.67952 15.3805 6.01385 13.7131 6.01385ZM13.7131 7.45559C12.4262 7.45559 11.192 7.96936 10.282 8.88384C9.37199 9.79842 8.86074 11.0388 8.86074 12.3321V18.1414H11.1392V12.3321C11.1392 11.646 11.4104 10.9881 11.8931 10.503C12.3757 10.0179 13.0304 9.74542 13.7131 9.74542C14.3957 9.74542 15.0503 10.0179 15.5331 10.503C16.0157 10.9881 16.2869 11.646 16.2869 12.3321V18.1414H18.5654V12.3321C18.5654 11.0388 18.0542 9.79842 17.1442 8.88384C16.2342 7.96936 15 7.45559 13.7131 7.45559Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66761C0 7.26948 0.321146 6.94673 0.7173 6.94673H4.43038C4.82653 6.94673 5.14768 7.26948 5.14768 7.66761V18.8623C5.14768 19.2604 4.82653 19.5832 4.43038 19.5832H0.7173C0.321146 19.5832 0 19.2604 0 18.8623V7.66761ZM1.4346 8.3885V18.1414H3.71308V8.3885H1.4346Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_72_61">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="social-heading">Connect</p>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_72_64)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.1338 1.98336C13.0061 1.63149 13.9618 1.57076 14.8695 1.8108C15.6018 2.00447 16.2698 2.38506 16.818 2.91089C17.5123 2.6436 18.1718 2.27951 18.7787 1.82699C19.0357 1.6354 19.385 1.6245 19.6534 1.79972C19.9218 1.97493 20.0524 2.29901 19.9804 2.61137C19.6943 3.8532 19.1152 5.00039 18.2956 5.94625C18.3118 6.10713 18.3202 6.26883 18.3207 6.43073V6.43312C18.3207 11.7822 15.8877 15.7132 12.3688 17.6928C8.86225 19.6655 4.37383 19.6442 0.377383 17.2975C0.0748184 17.1198 -0.0679226 16.759 0.0312265 16.4224C0.130376 16.0858 0.445946 15.86 0.796507 15.8748C2.29415 15.9377 3.77837 15.6027 5.11638 14.9064C3.75623 14.0623 2.79618 13.0478 2.14217 11.9563C1.31418 10.5745 1.00188 9.11209 0.945333 7.79708C0.888875 6.4843 1.08622 5.30013 1.2945 4.4489C1.39905 4.0216 1.50747 3.6737 1.59087 3.42991C1.63631 3.29707 1.68424 3.16502 1.73731 3.03503L1.73832 3.0326C1.84624 2.77495 2.09351 2.59252 2.37171 2.56623C2.65211 2.53974 2.92435 2.6696 3.08022 2.90418C3.8602 4.07808 4.89972 5.02538 6.10307 5.66555C7.08337 6.18708 8.14886 6.49233 9.23567 6.5676C9.23567 5.57011 9.46217 4.60711 10.0059 3.76046C10.5213 2.95794 11.2622 2.33497 12.1338 1.98336ZM2.74534 4.95522C2.57396 5.69717 2.42707 6.67324 2.47257 7.7314C2.52097 8.85675 2.7859 10.0566 3.45344 11.1706C4.11715 12.2783 5.204 13.3438 6.96658 14.1718C7.21198 14.287 7.37793 14.5237 7.40273 14.7937C7.42753 15.0636 7.30745 15.3265 7.08717 15.4846C6.03796 16.2373 4.87413 16.78 3.65396 17.0939C6.46512 17.9713 9.31083 17.6592 11.6193 16.3605C14.607 14.6797 16.7917 11.29 16.7921 6.4345C16.7914 6.23238 16.773 6.03086 16.7372 5.83259C16.6935 5.59154 16.7681 5.3442 16.9377 5.16742C17.2185 4.87475 17.4692 4.55305 17.6867 4.20789C17.4067 4.32735 17.1213 4.43349 16.8311 4.52583C16.5332 4.62062 16.2077 4.52451 16.0091 4.28315C15.602 3.78846 15.0665 3.44411 14.4787 3.28865C13.8913 3.13333 13.2733 3.17205 12.7057 3.401C12.1376 3.63022 11.6423 4.04143 11.2921 4.58656C10.9417 5.13214 10.7558 5.78275 10.7642 6.45005L10.7644 6.45974L10.7643 7.34715C10.7643 7.76112 10.4347 8.09985 10.0209 8.1112C8.41158 8.1553 6.81885 7.77786 5.3851 7.01511C4.39572 6.48877 3.50416 5.79075 2.74534 4.95522Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_72_64">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="social-heading">Follow</p>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C12.72 0 13.06 1.24176e-08 14.12 0.06C15.18 0.1 15.92 0.28 16.56 0.52C17.2 0.78 17.76 1.12 18.32 1.68C18.88 2.22 19.22 2.78 19.48 3.44C19.72 4.08 19.9 4.8 19.94 5.88C19.98 6.94 20 7.28 20 10C20 12.72 19.98 13.06 19.94 14.12C19.9 15.18 19.72 15.9 19.48 16.54C19.22 17.2 18.88 17.76 18.32 18.32C17.76 18.88 17.2 19.22 16.56 19.48C15.92 19.72 15.18 19.88 14.12 19.94C13.06 19.98 12.72 20 10 20C7.28 20 6.94 19.98 5.88 19.94C4.82 19.88 4.08 19.72 3.46 19.48C2.8 19.22 2.24 18.88 1.68 18.32C1.12 17.76 0.78 17.2 0.52 16.54C0.28 15.9 0.12 15.18 0.06 14.12C0.02 13.06 0 12.72 0 10C0 7.28 0.02 6.94 0.06 5.88C0.1 4.8 0.28 4.08 0.52 3.44C0.78 2.78 1.12 2.22 1.68 1.68C2.24 1.12 2.8 0.78 3.46 0.52C4.08 0.28 4.82 0.1 5.88 0.06C6.94 1.24176e-08 7.28 0 10 0ZM9.1 1.8C7.24 1.8 6.88 1.8 5.96 1.86C4.98 1.9 4.46 2.06 4.1 2.2C3.64 2.38 3.3 2.6 2.96 2.94C2.62 3.28 2.38 3.62 2.2 4.1C2.06 4.44 1.9 4.98 1.86 5.96C1.82 7 1.8 7.32 1.8 10C1.8 12.66 1.82 12.98 1.86 14.04C1.9 15 2.06 15.54 2.2 15.88C2.38 16.36 2.6 16.68 2.96 17.04C3.32 17.4 3.64 17.6 4.1 17.78C4.46 17.92 4.98 18.08 5.96 18.14C7.02 18.18 7.34 18.2 10 18.2C12.68 18.2 12.98 18.18 14.04 18.14C15.02 18.08 15.54 17.92 15.9 17.78C16.36 17.6 16.7 17.38 17.04 17.04C17.4 16.7 17.62 16.36 17.8 15.88C17.94 15.54 18.1 15 18.14 14.04C18.18 12.98 18.2 12.66 18.2 10C18.2 7.32 18.18 7 18.14 5.96C18.1 4.98 17.94 4.44 17.8 4.1C17.62 3.64 17.4 3.3 17.04 2.94C16.7 2.6 16.36 2.38 15.9 2.2C15.54 2.06 15.02 1.9 14.04 1.86C12.98 1.8 12.68 1.8 10 1.8C9.66 1.8 9.38 1.8 9.1 1.8ZM15.34 3.46C16 3.46 16.54 4 16.54 4.66C16.54 5.32 16 5.86 15.34 5.86C14.68 5.86 14.14 5.32 14.14 4.66C14.14 4 14.68 3.46 15.34 3.46ZM10 4.86C12.84 4.86 15.14 7.16 15.14 10C15.14 12.84 12.84 15.14 10 15.14C7.16 15.14 4.86 12.84 4.86 10C4.86 7.16 7.16 4.86 10 4.86ZM10 6.66C8.16 6.66 6.66 8.16 6.66 10C6.66 11.84 8.16 13.32 10 13.32C11.84 13.32 13.34 11.84 13.34 10C13.34 8.16 11.84 6.66 10 6.66Z" fill="white" />
              </svg>
              <p className="social-heading">Follow</p>
            </a>
          </SocialMediaContainer>
        </Bio>

        {/* Bio of the author */}
        <AboutMe>
          <p className="about">About me</p>
          <p className="body">I am designer currently crafting cross platform consumer experiences at MakeMyTrip flights team.</p>
          <p className="body">I focus on the intersection of form and function to create experiences that users become habituated to in no time. I am driven by curiosity and chase high level of craftsmanship and excellence in my work.</p>
        </AboutMe>

        {/* Projects */}
        <Project>
          <p className="heading">Projects</p>
          <ProjectHub />
        </Project>

        {/* History */}
        <History>
          <p className="heading">History</p>
          <div className="history-list-container">
            <div className="history-list-hub">
              <p className="time">Mar 2024 - Present</p>
              <p className="company">UX Designer, MakeMyTrip</p>
            </div>
            <div className="history-list-hub">
              <p className="time">Nov 2023 - Dec 2023</p>
              <p className="company">Product Designer, Scaler</p>
            </div>
            <div className="history-list-hub">
              <p className="time">May 2023 - Nov 2023</p>
              <p className="company">UX Designer, redBus</p>
            </div>
            <div className="history-list-hub">
              <p className="time">Jun 2022 - Jul 2022</p>
              <p className="company">UI Designer, Attentive</p>
            </div>
          </div>
          <p className="special-note">I have kind of been fortunate enough that even before my graduation I got to taste all levels of companies from early stage startups to big MnCs. My innate passion lies in working in startups.</p>
        </History>

        {/* Stories */}
        <Stories>
          <p className="heading">Stories</p>
          <div className="stories-list-container">
            <a className="story-card" href="https://medium.com/@realvaibhava/my-6-months-internship-experience-at-redbus-262e6abbd1fd" target="bla
            ">
              <p className="story-heading">My 6-months internship experience at redBus</p>
              <p className="story-desc">After a long time, today I am here to tell you yet another story. In this article, I will take you through my 6-months internship experience of working at redBus. In a nut shell, it was a fun and exciting journey, meeting new folks, making new friends and taking up new challenges.</p>
              <p className="story-time">December 7, 2023 • Medium</p>
            </a>
            <a className="story-card" href="https://medium.com/@realvaibhava/5-top-learnings-from-jony-ive-the-genius-behind-apples-greatest-products-k-e7916b3c09ed" target="bla
            ">
              <p className="story-heading">5 top learnings from Jony Ive : The Genius Behind Apple Greatest Products</p>
              <p className="story-desc">It was 20th May 2023, I was on my first solo trip from Delhi to Bengaluru for the upcoming design internship at redBus when I finished this amazing book called Jony Ive : The Genius Behind Apple Greatest Products. It took me around 2.5 months to complete this book. It is an incredible book for any designer. To all those who aspire to read this book, I have shared my top 5 learning from this book.</p>
              <p className="story-time">December 7, 2023 • Medium</p>
            </a>
          </div>
        </Stories>

        {/* Art */}
        <Art>
          <h1>Art</h1>
          <div>
            <Image
              src={rubberhose}
              // fill
              quality={100}
              style={{
                borderRadius: "18px",
                boxSizing: "border-box",
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
              // priority={true}
              placeholder='blur'
              sizes="(max-width: 312px) 100%"
              alt=""
            />
            <Image
              src={house}
              // fill
              quality={100}
              style={{
                borderRadius: "18px",
                boxSizing: "border-box",
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
              // priority={true}
              placeholder='blur'
              sizes="(max-width: 312px) 100%"
              alt=""
            />
            <Image
              src={kitchen}
              // fill
              quality={100}
              style={{
                borderRadius: "18px",
                boxSizing: "border-box",
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
              // priority={true}
              placeholder='blur'
              sizes="(max-width: 312px) 100%"
              alt=""
            />
            <Image
              src={gengar}
              // fill
              quality={100}
              style={{
                borderRadius: "18px",
                boxSizing: "border-box",
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
              // priority={true}
              placeholder='blur'
              sizes="(max-width: 312px) 100%"
              alt=""
            />
          </div>
          <p>Nope, none of the above art is AI generated. All these are made with love in Blender. I have a dream of representing India in an annual Blender Conference (hopefully 2030) {`:)`}</p>
        </Art>

        {/* Things I bring to the table */}
        <Things>
          <p className="things">Things I bring to the table</p>
          <ol>
            <li className="body">Extremely strong attention to detail</li>
            <li className="body">In depth knowledge of design systems to make consistent experience</li>
            <li className="body">An artistic taste of making things look beautiful</li>
            <li className="body">Seeing & solving problems that no one sees (even the users)</li>
          </ol>
        </Things>

        {/* SayHi */}
        <SayHi>
          <p className="heading">Say Hi!</p>
          <p className="sayhi-desc">I am on the lookout for full time opportunities to build something awesome. Drop an email if you’re hiring.</p>
          <a className="sayhi-btn" href="https://x.com/realvaibhava" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.66667 1.66699C1.18054 1.66699 0 2.90159 0 4.37532V15.6253C0 17.0991 1.18054 18.3337 2.66667 18.3337H17.3333C18.8195 18.3337 20 17.0991 20 15.6253V4.37532C20 2.90159 18.8195 1.66699 17.3333 1.66699H2.66667ZM2.14934 3.48664C2.3026 3.38919 2.48089 3.33366 2.66667 3.33366H17.3333C17.5188 3.33366 17.6969 3.38903 17.85 3.48624L9.99942 9.76674L2.14934 3.48664ZM1.66667 5.23487V15.6253C1.66667 16.2141 2.13612 16.667 2.66667 16.667H17.3333C17.8638 16.667 18.3333 16.2141 18.3333 15.6253V5.23397L10.52 11.4847C10.2157 11.7281 9.78317 11.7281 9.47883 11.4847L1.66667 5.23487Z" fill="white" />
            </svg>
            <p>hi@vaibhava.me</p>
          </a>
        </SayHi>

        {/* Connect */}
        <Connect>
          <SocialMediaContainer>
            <a href="https://www.linkedin.com/in/realvaibhava/" target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_72_61)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.57384 0.416504C1.15235 0.416504 0 1.57459 0 3.00315C0 4.43172 1.15235 5.5898 2.57384 5.5898C3.99533 5.5898 5.14768 4.43172 5.14768 3.00315C5.14768 1.57459 3.99533 0.416504 2.57384 0.416504ZM1.4346 3.00315C1.4346 2.37084 1.94466 1.85825 2.57384 1.85825C3.20302 1.85825 3.71308 2.37084 3.71308 3.00315C3.71308 3.63547 3.20302 4.14807 2.57384 4.14807C1.94466 4.14807 1.4346 3.63547 1.4346 3.00315Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.7131 6.01385C12.0457 6.01385 10.4466 6.67952 9.26757 7.86441C8.08852 9.04934 7.42615 10.6563 7.42615 12.3321V18.8623C7.42615 19.2604 7.7473 19.5832 8.14345 19.5832H11.8565C12.2527 19.5832 12.5738 19.2604 12.5738 18.8623V12.3321C12.5738 12.0284 12.6938 11.7372 12.9075 11.5225C13.1212 11.3078 13.4109 11.1872 13.7131 11.1872C14.0152 11.1872 14.305 11.3078 14.5187 11.5225C14.7323 11.7372 14.8523 12.0284 14.8523 12.3321V18.8623C14.8523 19.2604 15.1735 19.5832 15.5696 19.5832H19.2827C19.6788 19.5832 20 19.2604 20 18.8623V12.3321C20 10.6563 19.3377 9.04934 18.1586 7.86441C16.9796 6.67952 15.3805 6.01385 13.7131 6.01385ZM13.7131 7.45559C12.4262 7.45559 11.192 7.96936 10.282 8.88384C9.37199 9.79842 8.86074 11.0388 8.86074 12.3321V18.1414H11.1392V12.3321C11.1392 11.646 11.4104 10.9881 11.8931 10.503C12.3757 10.0179 13.0304 9.74542 13.7131 9.74542C14.3957 9.74542 15.0503 10.0179 15.5331 10.503C16.0157 10.9881 16.2869 11.646 16.2869 12.3321V18.1414H18.5654V12.3321C18.5654 11.0388 18.0542 9.79842 17.1442 8.88384C16.2342 7.96936 15 7.45559 13.7131 7.45559Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66761C0 7.26948 0.321146 6.94673 0.7173 6.94673H4.43038C4.82653 6.94673 5.14768 7.26948 5.14768 7.66761V18.8623C5.14768 19.2604 4.82653 19.5832 4.43038 19.5832H0.7173C0.321146 19.5832 0 19.2604 0 18.8623V7.66761ZM1.4346 8.3885V18.1414H3.71308V8.3885H1.4346Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_72_61">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="social-heading">Connect</p>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_72_64)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.1338 1.98336C13.0061 1.63149 13.9618 1.57076 14.8695 1.8108C15.6018 2.00447 16.2698 2.38506 16.818 2.91089C17.5123 2.6436 18.1718 2.27951 18.7787 1.82699C19.0357 1.6354 19.385 1.6245 19.6534 1.79972C19.9218 1.97493 20.0524 2.29901 19.9804 2.61137C19.6943 3.8532 19.1152 5.00039 18.2956 5.94625C18.3118 6.10713 18.3202 6.26883 18.3207 6.43073V6.43312C18.3207 11.7822 15.8877 15.7132 12.3688 17.6928C8.86225 19.6655 4.37383 19.6442 0.377383 17.2975C0.0748184 17.1198 -0.0679226 16.759 0.0312265 16.4224C0.130376 16.0858 0.445946 15.86 0.796507 15.8748C2.29415 15.9377 3.77837 15.6027 5.11638 14.9064C3.75623 14.0623 2.79618 13.0478 2.14217 11.9563C1.31418 10.5745 1.00188 9.11209 0.945333 7.79708C0.888875 6.4843 1.08622 5.30013 1.2945 4.4489C1.39905 4.0216 1.50747 3.6737 1.59087 3.42991C1.63631 3.29707 1.68424 3.16502 1.73731 3.03503L1.73832 3.0326C1.84624 2.77495 2.09351 2.59252 2.37171 2.56623C2.65211 2.53974 2.92435 2.6696 3.08022 2.90418C3.8602 4.07808 4.89972 5.02538 6.10307 5.66555C7.08337 6.18708 8.14886 6.49233 9.23567 6.5676C9.23567 5.57011 9.46217 4.60711 10.0059 3.76046C10.5213 2.95794 11.2622 2.33497 12.1338 1.98336ZM2.74534 4.95522C2.57396 5.69717 2.42707 6.67324 2.47257 7.7314C2.52097 8.85675 2.7859 10.0566 3.45344 11.1706C4.11715 12.2783 5.204 13.3438 6.96658 14.1718C7.21198 14.287 7.37793 14.5237 7.40273 14.7937C7.42753 15.0636 7.30745 15.3265 7.08717 15.4846C6.03796 16.2373 4.87413 16.78 3.65396 17.0939C6.46512 17.9713 9.31083 17.6592 11.6193 16.3605C14.607 14.6797 16.7917 11.29 16.7921 6.4345C16.7914 6.23238 16.773 6.03086 16.7372 5.83259C16.6935 5.59154 16.7681 5.3442 16.9377 5.16742C17.2185 4.87475 17.4692 4.55305 17.6867 4.20789C17.4067 4.32735 17.1213 4.43349 16.8311 4.52583C16.5332 4.62062 16.2077 4.52451 16.0091 4.28315C15.602 3.78846 15.0665 3.44411 14.4787 3.28865C13.8913 3.13333 13.2733 3.17205 12.7057 3.401C12.1376 3.63022 11.6423 4.04143 11.2921 4.58656C10.9417 5.13214 10.7558 5.78275 10.7642 6.45005L10.7644 6.45974L10.7643 7.34715C10.7643 7.76112 10.4347 8.09985 10.0209 8.1112C8.41158 8.1553 6.81885 7.77786 5.3851 7.01511C4.39572 6.48877 3.50416 5.79075 2.74534 4.95522Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_72_64">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="social-heading">Follow</p>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C12.72 0 13.06 1.24176e-08 14.12 0.06C15.18 0.1 15.92 0.28 16.56 0.52C17.2 0.78 17.76 1.12 18.32 1.68C18.88 2.22 19.22 2.78 19.48 3.44C19.72 4.08 19.9 4.8 19.94 5.88C19.98 6.94 20 7.28 20 10C20 12.72 19.98 13.06 19.94 14.12C19.9 15.18 19.72 15.9 19.48 16.54C19.22 17.2 18.88 17.76 18.32 18.32C17.76 18.88 17.2 19.22 16.56 19.48C15.92 19.72 15.18 19.88 14.12 19.94C13.06 19.98 12.72 20 10 20C7.28 20 6.94 19.98 5.88 19.94C4.82 19.88 4.08 19.72 3.46 19.48C2.8 19.22 2.24 18.88 1.68 18.32C1.12 17.76 0.78 17.2 0.52 16.54C0.28 15.9 0.12 15.18 0.06 14.12C0.02 13.06 0 12.72 0 10C0 7.28 0.02 6.94 0.06 5.88C0.1 4.8 0.28 4.08 0.52 3.44C0.78 2.78 1.12 2.22 1.68 1.68C2.24 1.12 2.8 0.78 3.46 0.52C4.08 0.28 4.82 0.1 5.88 0.06C6.94 1.24176e-08 7.28 0 10 0ZM9.1 1.8C7.24 1.8 6.88 1.8 5.96 1.86C4.98 1.9 4.46 2.06 4.1 2.2C3.64 2.38 3.3 2.6 2.96 2.94C2.62 3.28 2.38 3.62 2.2 4.1C2.06 4.44 1.9 4.98 1.86 5.96C1.82 7 1.8 7.32 1.8 10C1.8 12.66 1.82 12.98 1.86 14.04C1.9 15 2.06 15.54 2.2 15.88C2.38 16.36 2.6 16.68 2.96 17.04C3.32 17.4 3.64 17.6 4.1 17.78C4.46 17.92 4.98 18.08 5.96 18.14C7.02 18.18 7.34 18.2 10 18.2C12.68 18.2 12.98 18.18 14.04 18.14C15.02 18.08 15.54 17.92 15.9 17.78C16.36 17.6 16.7 17.38 17.04 17.04C17.4 16.7 17.62 16.36 17.8 15.88C17.94 15.54 18.1 15 18.14 14.04C18.18 12.98 18.2 12.66 18.2 10C18.2 7.32 18.18 7 18.14 5.96C18.1 4.98 17.94 4.44 17.8 4.1C17.62 3.64 17.4 3.3 17.04 2.94C16.7 2.6 16.36 2.38 15.9 2.2C15.54 2.06 15.02 1.9 14.04 1.86C12.98 1.8 12.68 1.8 10 1.8C9.66 1.8 9.38 1.8 9.1 1.8ZM15.34 3.46C16 3.46 16.54 4 16.54 4.66C16.54 5.32 16 5.86 15.34 5.86C14.68 5.86 14.14 5.32 14.14 4.66C14.14 4 14.68 3.46 15.34 3.46ZM10 4.86C12.84 4.86 15.14 7.16 15.14 10C15.14 12.84 12.84 15.14 10 15.14C7.16 15.14 4.86 12.84 4.86 10C4.86 7.16 7.16 4.86 10 4.86ZM10 6.66C8.16 6.66 6.66 8.16 6.66 10C6.66 11.84 8.16 13.32 10 13.32C11.84 13.32 13.34 11.84 13.34 10C13.34 8.16 11.84 6.66 10 6.66Z" fill="white" />
              </svg>
              <p className="social-heading">Follow</p>
            </a>
          </SocialMediaContainer>
          <p className="thought">stay hungry stay foolish</p>
        </Connect>
      </Media>
    </Main>
  );
}


//CSS starts here

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`

const Media = styled.div`
    margin: 80px auto;
    display: flex;
    width: 640px;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;

    @media screen and (max-width: 640px) {
    width: calc(100% - 32px); /* Full width minus the horizontal margins */
    margin: 32px 16px; /* Apply horizontal margin of 16px */
    padding: 0; 
    box-sizing: border-box; /* Include padding in width calculation */
  }
`

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    Image{
      border-radius: 50%;
    }

    div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .name{
        color: #ffffff;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 125% */
        letter-spacing: -0.2px;
      }

      .bio{
        color: #808080;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        letter-spacing: -0.2px;
      }
    }
`

const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    a{
      display: flex;
      padding: 12px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      background: #1E1E1E;
      color: #FFFFFF;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.2px;
      cursor: pointer;

      @media screen and (max-width: 640px){
        width: 100%;
      }

      @media screen and (max-width: 360px){
      .social-heading{
          display: none;
        }
      }
    }

    @media screen and (max-width: 640px){
      width: 100%;
      justify-content: space-between;
    }
`

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .about{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }

    .body{
      color: #808080;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      align-self: stretch;
    }

    @media screen and (max-width: 640px){
      .about{
        align-self: stretch;
      }
      .body{
        align-self: stretch;
      }
    }
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .heading{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }
`

const History = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .heading{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }

    .history-list-container{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
    }

    .history-list-hub{
      display: flex;
      align-items: flex-start;
      align-self: stretch;
    }

    .time{
      color: #808080;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      flex: 1 0 0;
    }

    .company{
      color: #808080;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      flex: 1 0 0;
    }

    .special-note{
      color: #FFFFFF;
      font-size: 14px;
      font-style: italic;
      font-weight: 500;
      line-height: 23px; /* 164.286% */
      align-self: stretch;
    }
`

const Stories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .heading{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }

    .stories-list-container{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      position: relative;
    }
    
    .story-card{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      padding: 12px 0px;

      .story-heading{
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
      }

      .story-desc{
        color: #808080;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
        display: -webkit-box;
        align-self: stretch;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .story-time{
        color: #545454;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 114.286% */
      }

      /* &::before{
        content: "";
        border-radius: 16px;
        background: #1E1E1E;
        display: block;
        position: absolute;
        z-index: -1;
        inset: -2px;
        opacity: 0;
        transform: scale(0.95);
        transition: all 0.3s ease;
      }

      &:hover::before{
        transition: all 0.3s ease;
        opacity: 1;
        transform: scale(1.03);
    } */
    }
`

const Art = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: column;

    h1{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }

    div{
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(312px, auto));
    }

    p{
      color: #FFFFFF;
      font-size: 14px;
      font-style: italic;
      font-weight: 500;
      line-height: 23px; /* 164.286% */
      align-self: stretch;
    }
`

const Things = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .things{
      color: #FFFFFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      letter-spacing: -0.2px;
    }

    ol{
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-sizing: border-box;
    }

    ol > li{
      margin-left: 20px;
    }

    .body{
      color: #808080;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      align-self: stretch;
    }

    @media screen and (max-width: 640px){
      .about{
        align-self: stretch;
      }
      .body{
        align-self: stretch;
      }
    }
`

const SayHi = styled.div`
    display: flex;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 20px;
    background: #1E1E1E;

    @media screen and (max-width: 640px){
      padding: 32px;
    }

    .heading{
      color: #FFF;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 125% */
      letter-spacing: -0.2px;
    }

    .sayhi-desc{
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      align-self: stretch;
    }

    .sayhi-btn{
      display: flex;
      padding: 12px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 125% */
      letter-spacing: -0.2px;
      border-radius: 999px;
      background: #D12929;
    }
`

const Connect = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 100%;
    border-top: 1px solid #353535;

    @media screen and (max-width: 640px){
      padding: 24px 0px 0px 0px;
    }

    .thought{
      color: #545454;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 114.286% */
      margin-top: 48px;
    }
`