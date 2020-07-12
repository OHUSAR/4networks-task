import React, { FC } from "react";

import styles from "./Post.module.css";

enum PostType {
  POST_ALBUM = "POST_ALBUM",
  POST_SHORT_MESSAGE = "POST_SHORT_MESSAGE",
}

interface PostImage {
  id: string;
  [key: string]: any;
}

// TODO: generate from schema
interface Post {
  id: string;
  postType: PostType;
  user: {
    profile: {
      avatar: {
        src: string;
      };
      name: string;
    };
    href: string;
  };
  images: { edges: PostImage[] };
  createdTime: string; // Datetime timestamp
  content?: string;
}

interface Props {
  post: Post;
}

const Post: FC<Props> = ({ post }: Props) => {
  // @ts-ignore
  const relDate = new Intl.RelativeTimeFormat("sk", { style: "long" }); // TODO: create helper with connection to current locale

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <img src={post.user.profile.avatar.src} alt="avatar" />

        <div>
          <a href={post.user.href}>
            {/* TODO: make a decision what to do with users without filled profile = hide / fallback with login or email ??? */}
            {post.user.profile.name || "Unknown user"}
          </a>
          <time>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.createdAtIcon}
              viewBox="0 0 256 256"
              xmlSpace="preserve"
              version="1.1"
              x="0px"
              y="0px"
            >
              <g>
                <g>
                  <path
                    d="M128,256C57.4,256,0,198.6,0,128S57.4,0,128,0s128,57.4,128,128S198.6,256,128,256z M128,23C70.1,23,23,70.1,23,128
                  s47.1,105,105,105s105-47.1,105-105S185.9,23,128,23z"
                  />
                  <polygon points="116.5,140.1 116.5,64.7 133,64.7 133,132.1 190.7,166 182.5,179.7" />
                </g>
              </g>
            </svg>
            {relDate.format(
              ((new Date(post.createdTime).getTime() - Date.now()) /
                (24 * 60 * 60 * 1000)) |
                0,
              "day"
            )}
          </time>
        </div>
      </header>

      {post.content && <p className={styles.content}>{post.content}</p>}

      {post.postType === PostType.POST_ALBUM && (
        <figure className={styles.albumImages}>
          {post.images.edges.map(({ node }) => (
            <img key={node.id} src={node.photoFile.src} alt={node.alt} /> // TODO: inspect how to load smaller thumbs - API request
          ))}
        </figure>
      )}
    </article>
  );
};

export default Post;
