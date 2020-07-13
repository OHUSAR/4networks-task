import { useState, useMemo } from "react";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/react-hooks";

const query = loader("./comments.graphql");

interface Comment {
  comment: string;
}

export interface LazyCommentsResult {
  /** Detect loading in progress */
  loading: boolean;
  /** data */
  comments?: Comment[];
  /** Toggle displaying comments */
  toggle: () => void;
  /** query failed */
  hasError: boolean;
}

export default function usePostComments(parentId: string): LazyCommentsResult {
  const [load, setLoad] = useState<boolean>(false);

  // TODO: think about cache strategy
  const { data, loading, error } = useQuery<{
    comments: { edges: Comment[] };
  }>(query, { variables: { parentId }, skip: !load });

  return useMemo(
    () =>
      load
        ? {
            comments: data?.comments.edges,
            toggle: () => setLoad(false),
            hasError: !!error,
            loading,
          }
        : {
            toggle: () => {
              setLoad(true);
            },
            loading: false,
            hasError: false,
          },
    [data, error, loading, load]
  );
}
