import React from "react";
import LayoutComponent from "../src/components/reusableComponents/LayoutComponent";
import TechButton from "../src/components/reusableComponents/TechButton";
import styles from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";

interface SkurlisteProps {
  skurliste: {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
    treslag: string;
  };
}

const skurliste = ({ skurliste }: SkurlisteProps) => {
  return (
    <>
      <div className={styles.container}>
        <LayoutComponent>
          <>
            <h1 className={styles.header}>Skurliste</h1>
            <TechButton
              title="Tilbake"
              icon={<IoIosArrowBack style={{ marginRight: ".5rem" }} />}
              link="/"
            />
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Treslag</th>
                    <th scope="col">Kl</th>
                    <th scope="col">Ant</th>
                    <th scope="col">m3</th>
                    <th scope="col">Status</th>
                    <th scope="col">Post</th>
                    <th scope="col">X-log</th>
                    <th scope="col">%</th>
                    <th scope="col">Anm</th>
                    <th scope="col">Vs66</th>
                    <th scope="col">Vs66 bredder</th>
                    <th scope="col">Mkv bord</th>
                    <th scope="col">Mkv bredder</th>
                    <th scope="col">Blad</th>
                  </tr>
                </thead>
                {skurliste &&
                  skurliste.map((item) => {
                    return (
                      <tbody className={`${item.progress}`} key={item._id}>
                        <td>{item.treslag}</td>
                        <td>{item.klasse}</td>
                        <td>{item.ant}</td>
                        <td>{item.m3}</td>
                        <td>{item.status}</td>
                        <td className="post">
                          {item.post}x{item.breddePost}
                        </td>
                        <td>{item.xLog}</td>
                        <td>{item.prosent}</td>
                        <td>{item.anm}</td>
                        <td>{item.vs66}</td>
                        <td>{item.vs66Br}</td>
                        <td>{item.mkvBord}</td>
                        <td>{item.mkvBr}</td>
                        <td>{item.blad}</td>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </>
        </LayoutComponent>
      </div>
      <style jsx>
        {`
          .container {
          }
          tbody {
            color: #fff;
            text-shadow: 1px 1px 10px rgba(17, 241, 255, 0.9));
          }
          .running {
            color: rgba(17, 241, 255, 0.9);
          }
          .finished {
            color: rgba(17, 241, 255, 0.3)
          }
          tr {
            color: var(--text-primary);
          }
          td,
          th {
            padding: 0 1rem 0 0;
            border-bottom: 1px solid rgba(17, 241, 255, 0.5);
            border-right: 1px solid rgba(17, 241, 255, 0.5);
            padding: 5px;
          }
          th {
            font-weight: 100;
          }
          table {
            background: rgba(17, 241, 255, 0.3);
            border: 1px solid var(--text-primary);
            padding: 5px;
            table-layout: fixed;
            box-shadow: inset 1px 1px 10px rgba(17, 241, 255, 0.9);
          }
          .post {
            transition: 0.5s;
          }
          .post:hover {
            cursor: pointer;
            color: rgba(17, 241, 255, 0.5);
          }
          @media only screen and (max-width: 1000px) {
          table {
             table-layout: auto;
             width: 100%;
            font-size: 8px;
            position: absolute;
            left: 0
           }
           td,
          th {
            
          
            padding: 5px;
          }
         
    }
          @media only screen and (max-width: 756px) {
          table {
             table-layout: auto;
             width: 100%;
            font-size: 8px;
            position: absolute;
            left: 0
           }
           td,
          th {
            
          
            padding: 0px;
          }
         
    }
        `}
      </style>
    </>
  );
};

export default skurliste;
