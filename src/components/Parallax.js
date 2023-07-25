import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function ParallaxTest() {
  const ref = useRef();
  return (
    <div className="text-8xl">
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2} //span multiple pages
          style={{
            backgroundImage: `url("../images/shark.png")`,
            backgroundSize: "cover",
          }}
        >
          <p>parallax 1</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={1}>
          <p>Parallax</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <p>OP bhai OP website</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(0)}
        >
          <p>my website</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img src="../images/cat.gif" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxTest;
