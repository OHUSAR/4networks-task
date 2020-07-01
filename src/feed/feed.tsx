import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

import styles from "./feed.module.css";

const query = loader("./feed.graphql");

const Feed = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={styles.wrapper}>
      {data.feed.edges.map((edge: any) => (
        <div className={styles.post}>{JSON.stringify(edge.node)}</div>
      ))}

      <button
        className={styles.button}
        onClick={() => {
          alert("https://www.apollographql.com/docs/react/data/pagination/");
        }}
      >
        Načítať ďalšie
      </button>
    </div>
  );
};

export default Feed;
