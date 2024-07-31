import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="pageHeaderTwo">about saudade art</h1>
      <br />
      <div id="aboutSection">
        <p id="aboutSummary">
          "Saudade" (sao-dahj) is a Portuguese word that describes the feeling
          of melancholic longing and nostalgia for a beloved someone or
          something. It holds an understanding that the desired object will
          never be encountered again.
          <br />
          <br />
          Although at first glance "saudade" is filled with sadness, it is such
          a genuine and beautiful concept at the same time. I believe it just
          means that we are lucky to have loved someone or something so
          wholeheartedly that they are imprinted on us forever.
          <br />
          <br />
          My pieces represent stories from different walks and moments of life.
          Whether you have come here to immortalize a present moment or relive
          one from the past, the end point is the same - a recognition of
          sincere love.
        </p>
        <video
          autoPlay
          loop
          src="/ImagesVideos/PaintingWIP.MOV"
          id="vanGogh"
        ></video>
      </div>
    </div>
  );
};

export default About;
