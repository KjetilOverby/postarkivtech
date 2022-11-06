import React from "react";
import Link from "next/link";

interface BtnProps {
  title: string;
  icon: JSX.Element;
  link?: string;
  info?: string;
}

const TechButton = ({ title, icon, link, info }: BtnProps) => {
  return (
    <>
      <div className="container">
        <a className="holo-btn-fed" href={link}>
          <span className="cta-d">
            {icon}
            {title} {info}
          </span>
          <span className="skew top"></span>
          <span className="skew bottom"></span>
        </a>
      </div>

      <style jsx>
        {`
          .container {
            width: 25rem;
            margin-bottom: 2rem;
          }
          a {
            color: #999;
            text-decoration: none;
            text-transform: uppercase;
            display: block;
            height: 60px;
            transition: all 330ms linear;
          }
          a:hover {
            color: #fff;
            text-rendering: optimizeLegibility;
          }
          a:hover .top {
            margin-top: -55px;
            animation: none;
            box-shadow: none;
          }
          a:hover .bottom {
            margin-top: -47px;
          }
          a:active .skew {
            animation: none;
            box-shadow: 0 0 22px rgba(102, 102, 102, 0.6) inset;
          }
          a.holo-btn-fed {
            color: #00f7ff;
          }
          a.holo-btn-fed:hover {
            color: #e5feff;
          }
          .cta-d {
            margin-bottom: 20px;
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

export default TechButton;
