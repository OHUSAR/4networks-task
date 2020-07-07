export enum PostType {
  /**
   * ALBUM
   */
  POST_ALBUM = "POST_ALBUM",
  /**
   * ARTICLE
   */
  POST_ARTICLE = "POST_ARTICLE",
  /**
   * SHORT_MESSAGE
   */
  POST_SHORT_MESSAGE = "POST_SHORT_MESSAGE",
}

export interface FeedQueryVariables {
  after?: string | null;
}

export interface FeedQuery {
  feed: {
    __typename: "PostNodeConnection";
    /**
     * Contains the nodes in this connection.
     */
    edges: Array<{
      __typename: "PostNodeEdge";
      /**
       * The item at the end of the edge
       */
      node: {
        __typename: "PostNode";
        /**
         * The ID of the object.
         */
        id: string;
        title: string | null;
        newImagesCount: number | null;
        content: string | null;
        postType: PostType | null;
        user: {
          __typename: "UserNode";
          /**
           * The ID of the object.
           */
          id: string;
          /**
           * Required, 30 characters or fewer. Only letters, numbers, and @, ., +, -, or _ characters.
           */
          username: string;
          profile: {
            __typename: "UserProfileNode";
            /**
             * The ID of the object.
             */
            id: string;
            avatar: {
              __typename: "PhotoFileNode";
              /**
               * The ID of the object.
               */
              id: string;
              srcset: string | null;
              src: string;
            } | null;
          };
        } | null;
        images: {
          __typename: "ImageConnection";
          /**
           * Contains the nodes in this connection.
           */
          edges: Array<{
            __typename: "ImageEdge";
            /**
             * The item at the end of the edge
             */
            node: {
              __typename: "ImageNode";
              /**
               * The ID of the object.
               */
              id: string;
              title: string | null;
              photoFile: {
                __typename: "PhotoFileNode";
                /**
                 * The ID of the object.
                 */
                id: string;
                srcset: string | null;
                src: string;
                height: number | null;
                width: number | null;
              } | null;
            } | null;
          } | null>;
          /**
           * Pagination data for this connection.
           */
          pageInfo: {
            __typename: "PageInfo";
            /**
             * When paginating forwards, the cursor to continue.
             */
            endCursor: string | null;
            /**
             * When paginating forwards, are there more items?
             */
            hasNextPage: boolean;
          };
        } | null;
        comments: {
          __typename: "CommentConnection";
          /**
           * Contains the nodes in this connection.
           */
          edges: Array<{
            __typename: "CommentEdge";
            /**
             * The item at the end of the edge
             */
            node: {
              __typename: "CommentNode";
              /**
               * The ID of the object.
               */
              id: string;
              user: {
                __typename: "UserNode";
                /**
                 * The ID of the object.
                 */
                id: string;
                /**
                 * Required, 30 characters or fewer. Only letters, numbers, and @, ., +, -, or _ characters.
                 */
                username: string;
                profile: {
                  __typename: "UserProfileNode";
                  /**
                   * The ID of the object.
                   */
                  id: string;
                  avatar: {
                    __typename: "PhotoFileNode";
                    /**
                     * The ID of the object.
                     */
                    id: string;
                    src: string;
                    srcset: string | null;
                  } | null;
                };
              } | null;
              createdTime: GraphQLScalarDateTime;
              comment: string | null;
            } | null;
          } | null>;
        } | null;
      } | null;
    } | null>;
    /**
     * Pagination data for this connection.
     */
    pageInfo: {
      __typename: "PageInfo";
      /**
       * When paginating forwards, are there more items?
       */
      hasNextPage: boolean;
      /**
       * When paginating forwards, the cursor to continue.
       */
      endCursor: string | null;
    };
  } | null;
}

declare var document: DocumentNode;
export default document;
