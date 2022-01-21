-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3

SELECT id, first_name, last_name
FROM users order by last_name;



-- Exercise 4
select id, image_url, user_id
from posts where user_id = 26;



-- Exercise 5
select id, image_url, user_id
from posts where user_id = 26 or user_id = 12;


-- Exercise 6


select count(id)
from posts;

-- Exercise 7

select user_id, count(post_id)
from comments
group by user_id
order by count desc;


-- Exercise 8

select posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
from posts
inner join users on users.id = posts.user_id
where users.id = 26 or users.id = 12;


-- Exercise 9

select posts.pub_date, following.following_id
from posts
inner join following on posts.user_id = following.user_id
where posts.user_id = 26
order by following.following_id;


-- Exercise 10




-- Exercise 11
insert into bookmarks(user_id, post_id)
values(26, 219);
nsert into bookmarks(user_id, post_id)
values(26, 220);
nsert into bookmarks(user_id, post_id)
values(26, 221);





-- Exercise 12

delete from bookmarks where post_id = 221;
delete from bookmarks where post_id = 220;
delete from bookmarks where post_id = 219;


-- Exercise 13

update users
set email = 'cyoung2022@gmail.com'
where first_name = 'Cody' and last_name = 'Young';

-- Exercise 14
