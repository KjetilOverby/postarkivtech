import React, { useState, useEffect } from "react";
import LayoutComponent from "../src/components/reusableComponents/LayoutComponent";
import TechButton from "../src/components/reusableComponents/TechButton";
import styles from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import SearchComponent from "../src/components/reusableComponents/SearchComponent";

interface searchResultProps {
  poster: {
    header: string;
  };
}

const Search = ({ poster }: PosterProps) => {
  const [searchResult, setSearchResult] = useState();
  const [input, setInput] = useState();
  useEffect(() => {
    if (poster) {
      setSearchResult(poster.filter((item) => item.header.includes(input)));
    }
  }, [input]);
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
              </div>

              <div className="post-container">
                {searchResult &&
                  searchResult.map((item) => {
                    return (
                      <>
                        <p className="header">{item.header}</p>
                      </>
                    );
                  })}
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
        }
        .post-container {
          height: 80rem;
          overflow: scroll;
        }
      `}</style>
    </>
  );
};

export default Search;
