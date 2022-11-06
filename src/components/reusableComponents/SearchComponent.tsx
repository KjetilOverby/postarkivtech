import React from "react";

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<undefined>>;
}

const SearchComponent = ({ setInput }: InputProps) => {
  return (
    <>
      <div className="container">
        <input
          onChange={(e: any) => setInput(e.target.value)}
          placeholder="Search"
          className="input "
        />
        <div className="holo-btn-fed cn">
          <span className="cta-d"></span>

          <span className="skew top"></span>
          <span className="skew bottom"></span>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 25rem;
            position: relative;
            margin-top: 5rem;
          }
          .input {
            font-size: 1rem;
            margin-left: 1.5rem;
            z-index: 1000;
            color: var(--text-primary);
            position: absolute;
            top: 1rem;
            background: transparent;
            outline: none;
            border: none;
          }
          .cn {
            color: #999;
            text-decoration: none;
            text-transform: uppercase;
            display: block;
            height: 60px;
            transition: all 330ms linear;
          }
          .cn:hover {
            color: #fff;
            text-rendering: optimizeLegibility;
          }
          .cn:hover .top {
            margin-top: -55px;
            animation: none;
            box-shadow: none;
          }
          .cn:hover .bottom {
            margin-top: -47px;
          }
          a:active .skew {
            animation: none;
            box-shadow: 0 0 22px rgba(102, 102, 102, 0.6) inset;
          }
          .cn.holo-btn-fed {
            color: #00f7ff;
          }
          .cn.holo-btn-fed:hover {
            color: #e5feff;
          }
          .cta-d {
            margin-bottom: 15px;
          }
           {
            /* .cta-d:before {
            content: "d";
          } */
          }
          .top {
            margin-top: -60px;
          }

          .bottom {
            margin-top: -42px;
          }
          .bottom:hover {
            background: #00f7ff;
            opacity: 0.5;
          }
          .skew {
            transform: skew(-45deg);
            border: 1px solid transparent;
            border-right-width: 2px;
            border-image: linear-gradient(top left, #bbb 0%, #999 100%) 1;
            animation: holox-pen 5.4s ease 1s infinite;
            padding: 24px;
            display: block;
            transition: all 330ms linear;
            box-shadow: 0 0 13px rgba(102, 102, 102, 0.6) inset;
          }
          span {
            width: 100%;
            display: block;
            padding: 0 29px;
            text-shadow: 0 0 30px #666;
            z-index: -1;
          }
          span:before {
            text-transform: none;

            font-size: 1.4em;
            display: inline-block;
            vertical-align: middle;
            margin-right: 22px;
            padding-bottom: 4px;
            transition: margin 500ms cubic-bezier(0.79, 0.01, 1, 0.21);
          }
          .holo-btn-fed span {
            text-shadow: 0 0 30px #11f1ff;
          }
          .holo-btn-fed .skew {
            border-image: linear-gradient(top left, #99fcff 0%, #00f7ff 100%) 1;
            animation-name: holox-fed;
            box-shadow: 0 0 13px rgba(17, 241, 255, 0.6) inset;
          }

          @keyframes holox-pen {
            0% {
              box-shadow: 0 0 13px rgba(102, 102, 102, 0.6) inset;
            }
            50% {
              box-shadow: 0 0 14px rgba(102, 102, 102, 1) inset;
            }
            100% {
              box-shadow: 0 0 13px rgba(102, 102, 102, 0.6) inset;
            }
          }
          @keyframes holox-fed {
            0% {
              box-shadow: 0 0 13px rgba(17, 241, 255, 0.6) inset;
            }
            50% {
              box-shadow: 0 0 14px rgba(17, 241, 255, 1) inset;
            }
            100% {
              box-shadow: 0 0 13px rgba(17, 241, 255, 0.6) inset;
            }
          }
          @media only screen and (max-width: 2100px) {
            .container {
              width: 18rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchComponent;
