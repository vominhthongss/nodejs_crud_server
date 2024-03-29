post có đánh giá
SELECT
    post.POST_ID,
    post.POST_CONTENT,
    film.FILM_ID,
    film.FILM_NAME,
    evaluation.EVALUATION_RATE,
    evaluation.USER_NAME,
    user.USER_AVATARURL
FROM
    post,
    user,
    evaluation,
    film
WHERE
    post.USER_NAME = user.USER_NAME
    and post.POST_ID = evaluation.POST_ID
    and user.USER_NAME = evaluation.USER_NAME
    and evaluation.FILM_ID = film.FILM_ID
    AND post.POST_ISDELETE = 0 (
        SELECT
            post.POST_ID,
            post.POST_CONTENT,
            user.USER_NAME,
            user.USER_AVATARURL
        FROM
            post,
            user
        WHERE
            post.USER_NAME = user.USER_NAME
    )
SELECT
    *
FROM
    (
        SELECT
            *
        FROM
            evaluation
    ) as A,
    (
        SELECT
            post.POST_ID,
            post.POST_CONTENT,
            user.USER_NAME,
            user.USER_AVATARURL
        FROM
            post,
            user
        WHERE
            post.USER_NAME = user.USER_NAME
    ) as B
SELECT
    *
FROM
    (
        SELECT
            post.POST_ID,
            post.POST_CONTENT,
            user.USER_NAME,
            user.USER_AVATARURL
        FROM
            post,
            user
        WHERE
            post.USER_NAME = user.USER_NAME
    ) as A
    LEFT JOIN (
        SELECT
            *
        FROM
            evaluation
    ) as B ON A.POST_ID = B.POST_ID 
    -- GET ALL POST
SELECT
    A.POST_ID,
    A.POST_CONTENT,
    B.FILM_ID,
    B.FILM_NAME,
    B.EVALUATION_RATE,
    A.USER_NAME,
    A.USER_AVATARURL
FROM
    (
        SELECT
            post.POST_ID,
            post.POST_CONTENT,
            user.USER_NAME,
            user.USER_AVATARURL
        FROM
            post,
            user
        WHERE
            post.USER_NAME = user.USER_NAME
            and post.POST_ISDELETE = 0
    ) as A
    LEFT JOIN (
        SELECT
            post.POST_ID,
            post.POST_CONTENT,
            film.FILM_ID,
            film.FILM_NAME,
            evaluation.EVALUATION_RATE,
            evaluation.USER_NAME,
            user.USER_AVATARURL
        FROM
            post,
            user,
            evaluation,
            film
        WHERE
            post.USER_NAME = user.USER_NAME
            and post.POST_ID = evaluation.POST_ID
            and user.USER_NAME = evaluation.USER_NAME
            and evaluation.FILM_ID = film.FILM_ID
            AND post.POST_ISDELETE = 0
    ) as B ON A.POST_ID = B.POST_ID 
-- GET ALL COMMENT WITH POST ID
SELECT
    D.POST_ID,
    D.COMMENT_ID,
    D.COMMENT_CONTENT,
    D.COMMENT_PARENT,
    C.USER_NAME,
    C.USER_AVATARURL
FROM
    (
        SELECT
            A.POST_ID,
            A.POST_CONTENT,
            B.FILM_ID,
            B.FILM_NAME,
            B.EVALUATION_RATE,
            A.USER_NAME,
            A.USER_AVATARURL
        FROM
            (
                SELECT
                    post.POST_ID,
                    post.POST_CONTENT,
                    user.USER_NAME,
                    user.USER_AVATARURL
                FROM
                    post,
                    user
                WHERE
                    post.USER_NAME = user.USER_NAME
                    and post.POST_ISDELETE = 0
            ) as A
            LEFT JOIN (
                SELECT
                    post.POST_ID,
                    post.POST_CONTENT,
                    film.FILM_ID,
                    film.FILM_NAME,
                    evaluation.EVALUATION_RATE,
                    evaluation.USER_NAME,
                    user.USER_AVATARURL
                FROM
                    post,
                    user,
                    evaluation,
                    film
                WHERE
                    post.USER_NAME = user.USER_NAME
                    and post.POST_ID = evaluation.POST_ID
                    and user.USER_NAME = evaluation.USER_NAME
                    and evaluation.FILM_ID = film.FILM_ID
                    AND post.POST_ISDELETE = 0
            ) as B ON A.POST_ID = B.POST_ID
    ) AS C,
    comment AS D
WHERE
    D.POST_ID = C.POST_ID
    AND D.COMMENT_ISDELETE = 0
ORDER BY
    D.POST_ID ASC ---
SELECT
    *
FROM
    (
        SELECT
            A.POST_ID,
            A.POST_CONTENT,
            B.FILM_ID,
            B.FILM_NAME,
            B.EVALUATION_RATE,
            A.USER_NAME,
            A.USER_AVATARURL
        FROM
            (
                SELECT
                    post.POST_ID,
                    post.POST_CONTENT,
                    user.USER_NAME,
                    user.USER_AVATARURL
                FROM
                    post,
                    user
                WHERE
                    post.USER_NAME = user.USER_NAME
                    and post.POST_ISDELETE = 0
            ) as A
            LEFT JOIN (
                SELECT
                    post.POST_ID,
                    post.POST_CONTENT,
                    film.FILM_ID,
                    film.FILM_NAME,
                    evaluation.EVALUATION_RATE,
                    evaluation.USER_NAME,
                    user.USER_AVATARURL
                FROM
                    post,
                    user,
                    evaluation,
                    film
                WHERE
                    post.USER_NAME = user.USER_NAME
                    and post.POST_ID = evaluation.POST_ID
                    and user.USER_NAME = evaluation.USER_NAME
                    and evaluation.FILM_ID = film.FILM_ID
                    AND post.POST_ISDELETE = 0
            ) as B ON A.POST_ID = B.POST_ID
    ) AS G
    LEFT JOIN (
        SELECT
            D.POST_ID,
            D.COMMENT_ID,
            D.COMMENT_CONTENT,
            D.COMMENT_PARENT,
            C.USER_NAME,
            C.USER_AVATARURL
        FROM
            (
                SELECT
                    A.POST_ID,
                    A.POST_CONTENT,
                    B.FILM_ID,
                    B.FILM_NAME,
                    B.EVALUATION_RATE,
                    A.USER_NAME,
                    A.USER_AVATARURL
                FROM
                    (
                        SELECT
                            post.POST_ID,
                            post.POST_CONTENT,
                            user.USER_NAME,
                            user.USER_AVATARURL
                        FROM
                            post,
                            user
                        WHERE
                            post.USER_NAME = user.USER_NAME
                            and post.POST_ISDELETE = 0
                    ) as A
                    LEFT JOIN (
                        SELECT
                            post.POST_ID,
                            post.POST_CONTENT,
                            film.FILM_ID,
                            film.FILM_NAME,
                            evaluation.EVALUATION_RATE,
                            evaluation.USER_NAME,
                            user.USER_AVATARURL
                        FROM
                            post,
                            user,
                            evaluation,
                            film
                        WHERE
                            post.USER_NAME = user.USER_NAME
                            and post.POST_ID = evaluation.POST_ID
                            and user.USER_NAME = evaluation.USER_NAME
                            and evaluation.FILM_ID = film.FILM_ID
                            AND post.POST_ISDELETE = 0
                    ) as B ON A.POST_ID = B.POST_ID
            ) AS C,
            comment AS D
        WHERE
            D.POST_ID = C.POST_ID
            AND D.COMMENT_ISDELETE = 0
        ORDER BY
            D.POST_ID ASC
    ) AS H ON G.POST_ID = H.POST_ID -- GET ALLPOST
SELECT
    *
FROM
    (
        SELECT
            *
        FROM
            (
                SELECT
                    A.POST_ID,
                    A.POST_CONTENT,
                    B.FILM_ID,
                    B.FILM_NAME,
                    B.EVALUATION_RATE,
                    A.USER_NAME,
                    A.USER_AVATARURL
                FROM
                    (
                        SELECT
                            post.POST_ID,
                            post.POST_CONTENT,
                            user.USER_NAME,
                            user.USER_AVATARURL
                        FROM
                            post,
                            user
                        WHERE
                            post.USER_NAME = user.USER_NAME
                            and post.POST_ISDELETE = 0
                    ) as A
                    LEFT JOIN (
                        SELECT
                            post.POST_ID,
                            post.POST_CONTENT,
                            film.FILM_ID,
                            film.FILM_NAME,
                            evaluation.EVALUATION_RATE,
                            evaluation.USER_NAME,
                            user.USER_AVATARURL
                        FROM
                            post,
                            user,
                            evaluation,
                            film
                        WHERE
                            post.USER_NAME = user.USER_NAME
                            and post.POST_ID = evaluation.POST_ID
                            and user.USER_NAME = evaluation.USER_NAME
                            and evaluation.FILM_ID = film.FILM_ID
                            AND post.POST_ISDELETE = 0
                    ) as B ON A.POST_ID = B.POST_ID
            ) AS G
            LEFT JOIN (
                SELECT
                    D.POST_ID as POST_IDD,
                    D.COMMENT_ID,
                    D.COMMENT_CONTENT,
                    D.COMMENT_PARENT,
                    C.USER_NAME AS USERNAMEE,
                    C.USER_AVATARURL AS USER_AVATARURLL
                FROM
                    (
                        SELECT
                            A.POST_ID,
                            A.POST_CONTENT,
                            B.FILM_ID,
                            B.FILM_NAME,
                            B.EVALUATION_RATE,
                            A.USER_NAME,
                            A.USER_AVATARURL
                        FROM
                            (
                                SELECT
                                    post.POST_ID,
                                    post.POST_CONTENT,
                                    user.USER_NAME,
                                    user.USER_AVATARURL
                                FROM
                                    post,
                                    user
                                WHERE
                                    post.USER_NAME = user.USER_NAME
                                    and post.POST_ISDELETE = 0
                            ) as A
                            LEFT JOIN (
                                SELECT
                                    post.POST_ID,
                                    post.POST_CONTENT,
                                    film.FILM_ID,
                                    film.FILM_NAME,
                                    evaluation.EVALUATION_RATE,
                                    evaluation.USER_NAME,
                                    user.USER_AVATARURL
                                FROM
                                    post,
                                    user,
                                    evaluation,
                                    film
                                WHERE
                                    post.USER_NAME = user.USER_NAME
                                    and post.POST_ID = evaluation.POST_ID
                                    and user.USER_NAME = evaluation.USER_NAME
                                    and evaluation.FILM_ID = film.FILM_ID
                                    AND post.POST_ISDELETE = 0
                            ) as B ON A.POST_ID = B.POST_ID
                    ) AS C,
                    comment AS D
                WHERE
                    D.POST_ID = C.POST_ID
                    AND D.COMMENT_ISDELETE = 0
                ORDER BY
                    D.POST_ID ASC
            ) AS H ON G.POST_ID = H.POST_IDD
    ) AS O,
    media as M
WHERE
    O.POST_ID = M.POST_ID
    AND M.MEDIA_ISDELETE = 0