post có đánh giá
SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film
WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID
AND post.POST_ISDELETE=0


(SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user
WHERE post.USER_NAME=user.USER_NAME)

SELECT * FROM (SELECT * FROM evaluation) as A,
(SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user
WHERE post.USER_NAME=user.USER_NAME) as B