import React, { useState, useEffect } from "react";
import LayoutComponent from "../src/components/reusableComponents/LayoutComponent";
import TechButton from "../src/components/reusableComponents/TechButton";
import styles from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import SearchComponent from "../src/components/reusableComponents/SearchComponent";
import SearchPostoppsett from "../src/components/reusableComponents/SearchPostoppsett";

interface SearchResultProps {
  poster: {
    length: {
      filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
      startRings: [
        {
          input: {
            type: number;
          };
        }
      ];
      rawInput: [
        {
          input: {
            type: number;
          };
          ring: {
            type: number;
          };
          shims: {
            type: number;
          };
          shims2: {
            type: number;
          };
          shims3: {
            type: number;
          };
        }
      ];
      endRings: [
        {
          input: {
            type: number;
          };
        }
      ];
      blades: {
        bladStamme: {
          type: number;
        };
      };
      header: {
        type: string;
      };
      prosent: {
        type: string;
      };
      planker: {
        type: string;
      };
      spes: {
        type: string;
      };
      nameClass: {
        type: string;
      };
      date: {
        type: Date;
      };
      editDate: {
        type: Date;
      };
    };
    filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
    startRings: [
      {
        input: {
          type: number;
        };
      }
    ];
    rawInput: [
      {
        input: {
          type: number;
        };
        ring: {
          type: number;
        };
        shims: {
          type: number;
        };
        shims2: {
          type: number;
        };
        shims3: {
          type: number;
        };
      }
    ];
    endRings: [
      {
        input: {
          type: number;
        };
      }
    ];
    blades: {
      bladStamme: {
        type: number;
      };
    };
    header: {
      type: string;
    };
    prosent: {
      type: string;
    };
    planker: {
      type: string;
    };
    spes: {
      type: string;
    };
    nameClass: {
      type: string;
    };
    date: {
      type: Date;
    };
    editDate: {
      type: Date;
    };
  };
}
[];

const Search = ({ poster }: SearchResultProps) => {
  const [searchResult, setSearchResult] = useState<any>();
  const [input, setInput] = useState();
  useEffect(() => {
    if (poster) {
      setSearchResult(
        poster.filter((item: any) => item.header.includes(input))
      );
    }
  }, [input, poster]);
  return (
    <>
      <div className={styles.container}>
        <LayoutComponent>
          <>
            <div className="inner-container">
              <div className="btn-container">
                <h1 className={styles.header}>Søk i postarkiv</h1>
                <TechButton
                  title="Tilbake"
                  link="/"
                  icon={<IoIosArrowBack style={{ marginRight: "2rem" }} />}
                />
                <SearchComponent setInput={setInput} />
                <div className="text-container">
                  <p className="text">
                    {` Antall poster: ${poster && poster.length}`}
                  </p>
                  <p className="text">
                    {` Antall treff: ${searchResult && searchResult.length}`}
                  </p>
                </div>
              </div>

              <div className="post-container">
                <SearchPostoppsett searchResult={searchResult} />
              </div>
            </div>
          </>
        </LayoutComponent>
      </div>
      <style jsx>{`
        .header {
          color: var(--text-primary);
        }
        .inner-container {
          display: grid;
          grid-template-columns: 40rem 1fr;
          height: 90vh;
        }
        .post-container {
          height: 100%;
          overflow: scroll;
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
        .text {
          color: var(--text-primary);
        }
        .text-container {
          margin-top: 2rem;
        }

        @media only screen and (max-width: 2100px) {
          .inner-container {
            grid-template-columns: 25rem 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Search;
