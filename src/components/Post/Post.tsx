import React, { FC } from "react";

import Icon from "components/Icon";
import Button from "components/Button";

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
  title?: string;
  imagesCount?: number;
  href?: string;
  likesCount: number;
}

interface Props {
  post: Post;
}

const Post: FC<Props> = ({ post }: Props) => {
  // @ts-ignore: TODO: use polyfill
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
            <Icon name="clock" />
            {relDate.format(
              ((new Date(post.createdTime).getTime() - Date.now()) /
                (24 * 60 * 60 * 1000)) |
                0,
              "day"
            )}
          </time>
        </div>
      </header>

      {(post.content || post.title) && (
        <p className={styles.content}>{post.content || post.title}</p>
      )}

      {post.images && post.images.edges && (
        <figure className={styles.albumImages}>
          {post.images.edges.map(({ node }) => (
            <img key={node.id} src={node.photoFile.src} alt={node.alt} /> // TODO: inspect how to load smaller thumbs - API request
          ))}
        </figure>
      )}

      {post.postType === PostType.POST_ALBUM && (
        <a className={styles.title} href={post.href}>
          {/* TODO: use pluralization like http://userguide.icu-project.org/formatparse/messages */}
          <h3>
            {post.title} <span>({`${post.imagesCount} fotiek`})</span>
          </h3>
        </a>
      )}

      <hr />

      <footer>
        {post.likesCount > 0 && (
          <Button>
            <Icon name="likeFilled" />
            {post.likesCount}
          </Button>
        )}
        <Button>
          {post.likesCount === 0 && <Icon name="like" />}
          Páči sa mi to
        </Button>
        <Button>
          <Icon name="comment" />
          Komentáre
        </Button>
        <Button>
          <Icon name="more" />
          Viac
        </Button>
      </footer>
    </article>
  );
};

export default Post;
