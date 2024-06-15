import {
    PanInfo,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
  } from "framer-motion";
//   import { useMediaQuery } from "hooks/useMediaQuery";
import styled from "styled-components";
  
  const IMGS = [
    "https://images.unsplash.com/photo-1718119128153-645258b5b814?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718121279036-13650f74640b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718113361290-35ca503e6092?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718113360777-8aadd1985ecd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717844519228-40f041234a7d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717844519137-62f09a0cbcc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718034363286-999f294f8523?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718046254440-77bb25734514?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718046254335-d9ff832c9c3c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718070360743-d7103c38b266?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717960432608-b6faf49eaeb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717968368310-1110eae34644?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718058248054-5e7704c3c8ad?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1716890385566-dee802c56d2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  export default function Experiments() {
    // const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    // const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const cylinderWidth = 1100;
    const faceCount = IMGS.length;
    const faceWidth = cylinderWidth / faceCount;
    const dragFactor = 0.05;
    const radius = cylinderWidth / (2 * Math.PI);
  
    const rotation = useMotionValue(0);
    const controls = useAnimation();
  
    const handleDrag = (_, info) => {
      rotation.set(rotation.get() + info.offset.x * dragFactor);
    };
  
    const handleDragEnd = (_, info) => {
      controls.start({
        rotateY: rotation.get() + info.velocity.x * dragFactor,
        transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
      });
    };
  
    const transform = useTransform(rotation, (value) => {
      return `rotate3d(0, 1, 0, ${value}deg)`;
    });
  
    return (
      <>
        <Parent>
          <Child1
            style={{
              background:
                "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(26, 25, 27) 100%)",
            }}
          />
          <Child2
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(26, 25, 27) 100%)",
            }}
          />
          <Child3
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transform: "rotateX(0deg)",
            }}
          >
            <Child4
              drag="x"
              style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
              }}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              animate={controls}
            >
              {IMGS.map((url, i) => {
                return (
                  <Child5
                    key={i}
                    style={{
                      width: `${faceWidth}px`,
                      transform: `rotateY(${
                        i * (360 / faceCount)
                      }deg) translateZ(${radius}px)`,
                    }}
                  >
                    <img
                      src={url}
                      alt="img"
                    />
                  </Child5>
                );
              })}
            </Child4>
          </Child3>
        </Parent>
      </>
    );
  }


const Parent = styled.div`
    position: relative;
    height: 480px;
    width: 100%;
    overflow: hidden;
`

const Child1 = styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    height: 100%;
    width: 12px;
`

const Child2 = styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    height: 100%;
    width: 12px;
`

const Child3 = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: pink;
`
const Child4 = styled(motion.div)`
    position: relative;
    display: flex;
    height: 100%;
    transform-origin: center;
    cursor: grab;
    justify-content: center;

    &:active{
        cursor: grabbing;
    }
`

const Child5 = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    transform-origin: center;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    padding: 8px;

    img{
        pointer-events: none;
        height: 48px;
        width: 100%;
        border-radius: 32px;
        object-fit: cover;
    }
`

