export default function CSS_Test() {
  return (
    <>
      <div className="container">
        <div className="content">
          <p>
            Data fetching in Next.js allows you to render your content in
            different ways, depending on your application's use case. These
            include pre-rendering with Server-side Rendering or Static
            Generation, and updating or creating content at runtime with
            Incremental Static Regeneration.
          </p>
        </div>

        <div className="bgholder">
          <div className="mask"></div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            background-color: white;
            display: flex;
            min-height: 40vh;
          }
          .content {
            display: flex;
            margin: auto;
            z-index: 11;
            background-color: transparent;
          }
          .bgholder {
            z-index: 2;
            display: block;
            position: absolute;
            background: url("/images/bg-test.jpg") 0 0 no-repeat;
            background-size: cover;
            width: 40vh;
            height: 40vh;
            margin: 0px;
            top: 0;
            left: 0;
            padding: 0px;
          }
          .mask {
            background: blue;
            z-index: 3;
            background-color: transparent;
            display: block;
            position: absolute;
            margin: 1px 0 0 1px;
            padding: 0;

            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border-color: transparent white white transparent;
            border-style: solid;
            border-width: 20vh;
          }
        `}
      </style>
    </>
  );
}
